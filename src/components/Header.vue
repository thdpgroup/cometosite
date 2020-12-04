<template>
  <nav class="shop-nav">
    <div class="flex items-center flex-shrink-0 mr-6">
      <a class="text-white" href="#">
        <span class="text-2xl pl-2">Logo</span>
      </a>
    </div>

    <div class="block lg:hidden">
      <button
        @click="toggleMenu"
        class="shop-hamburger">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div
      :class="{hidden: navContentHidden}"
      class="shop-nav__main">
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <a class="inline-block py-2 px-4 text-blue-500 no-underline" href="#">Active</a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-white no-underline hover:text-blue-500 hover:text-underline py-2 px-4" href="#">link</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  data() {
    return {
      navContentHidden: true
    }
  },
  methods: {
    toggleMenu() {
      this.navContentHidden = !this.navContentHidden
    }
  }
})
</script>

<style scoped>
.shop-nav {
  @apply bg-gray-800;
  @apply fixed;
  @apply flex;
  @apply flex-wrap;
  @apply justify-between;
  @apply items-center;
  @apply p-6;
  @apply top-0;
  @apply w-full;
  @apply z-10;
}
.shop-nav__main {
  @apply w-full;
  @apply flex-grow;
  @apply pt-6;
}
@media (min-width: theme('screens.lg')) {
  .shop-nav__main {
    @apply flex;
    @apply items-center;
    @apply w-auto;
    @apply block;
    @apply pt-0;
  }
}
.shop-hamburger {
  @apply border;
  @apply border-gray-600;
  @apply flex;
  @apply items-center;
  @apply px-3;
  @apply py-2;
  @apply rounded;
  @apply text-gray-500;
}
.shop-hamburger:hover {
  @apply border-white;
  @apply text-white;
}
</style>
