<template>
  <div>
    <!-- {{themeList[0]}} -->
    <ProductItem
      :authorName="theme.author_username"
      :img="theme.previews.landscape_preview.landscape_url"
      :key="theme.id"
      :name="theme.name"
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
    ProductItem: defineAsyncComponent(() => import('@/components/Product/ProductItem.vue'))
  },
  computed: {
    ...mapState('theme', ['themeList'])
  },
  created() {
    this.dispatchTheme()
  },
  methods: {
    ...mapActions('theme', ['dispatchTheme'])
  }
})
</script>
