<template>
  <div class="home px-6 py-10">
    <ProductList/>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    ProductList: defineAsyncComponent(() => import('@/components/Product/ProductList.vue'))
  }
})
</script>
