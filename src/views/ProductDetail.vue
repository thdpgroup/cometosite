<template>
  <div class="product container mx-auto px-6 py-10">
    <ProductItem/>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ProductDetail',
  components: {
    ProductItem: defineAsyncComponent(() => import('@/components/Product/ProductItem.vue'))
  }
})
</script>
