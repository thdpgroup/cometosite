<template>
  <div>
    <ProductItem
      :authorName="theme.author_username"
      :authorUrl="theme.author_url"
      :features="theme.key_features"
      :img="theme.previews.landscape_preview.landscape_url"
      :key="theme.id"
      :name="theme.name"
      :preview="theme.previews.live_site.url"
      :price="theme.price_cents"
      :numberSale="theme.number_of_sales"
      :rating="theme.rating.rating"
      :updatedAt="formatDate(theme.updated_at)"
      :url="theme.url"
      v-for="theme in themeList"/>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default defineComponent({
  name: 'ProductList',
  components: {
    ProductItem: defineAsyncComponent(() => import('@/components/Product/ProductListItem.vue'))
  },
  computed: {
    ...mapState('theme', ['themeList'])
  },
  created() {
    this.dispatchTheme()
  },
  methods: {
    ...mapActions('theme', ['dispatchTheme']),
    formatDate(date: string) {
      return new Date(date).toLocaleDateString()
    }
  }
})
</script>
