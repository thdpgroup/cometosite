<template>
  <div class="lg:flex my-5 p-5 bg-white shadow-lg rounded-sm">
    <div
      :style="`background-image: url(${img})`"
      :title="name"
      class="h-40 lg:w-80 bg-cover relative rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <a
          :href="url"
          class="absolute top-0 right-0 bottom-0 left-0"
          target="_blank"/>
    </div>
    <div
      class="pl-4 flex flex-1 flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-lg mb-2 hover:underline">
            <a
              :href="url"
              target="_blank">
                {{name}}
            </a>
          </div>
          <p class="text-sm text-gray-400 flex items-center">
            author&nbsp;
            <a
              :href="authorUrl"
              class="hover:underline"
              target="_blank">{{authorName}}</a>
          </p>
        </div>
        <div class="flex items-center">
          <ul class="list-disc list-inside text-gray-700">
            <li :key="index" v-for="(feat, index) in features">{{feat}}</li>
          </ul>
        </div>
    </div>
    <div class="border-l border-gray-300 pl-4 lg:w-60 flex flex-wrap justify-center items-end content-end text-center">
      <div class="text-xl font-semibold text-gray-900 w-full">${{price/1000}}</div>
      <div class="text-sm text-gray-400">
        <div>
           <svg height="0" width="0">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#fbbf24;stop-opacity:1" />
                <stop offset="50%" style="stop-color:transparent;stop-opacity:1" />
                <stop offset="100%" style="stop-color:transparent;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            :key="index"
            class="inline-block w-4"
            stroke="#fbbf24"
            viewBox="0 0 40 37"
            xmlns="http://www.w3.org/2000/svg"
            v-for="(rate, index) in 5">
            <path
              :fill="renderRating(rate)"
              d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
              31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
              12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
              stroke-width="1"
              stroke="#fbbf24"/>
          </svg>
          ({{convertRating}})
          <p>{{numberSale/100}}k Sales</p>
          <p>Updated at: {{updatedAt}}</p>
        </div>

      </div>
      <div class="w-full mt-10 flex">
        <a
          :href="preview"
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-500 uppercase transition bg-transparent border-2 border-blue-500 rounded ripple hover:bg-blue-100 focus:outline-none"
          target="_blank"
        >
          Preview
        </a>
        <a class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-500 uppercase transition bg-transparent border-2 border-blue-500 rounded ripple hover:bg-blue-100 focus:outline-none ml-1" href="">
          <svg class="inline-block w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    convertRating(): number {
      return Number(this.rating)
    }
  },
  methods: {
    renderRating(rate: number) {
      if (rate <= this.convertRating) {
        return '#fbbf24'
      }
      if (rate >= Math.ceil(this.convertRating)) {
        return 'url(#grad)'
      }
      return '#fff'
    }
  },
  name: 'ProductListItem',
  props: {
    authorName: {
      default: ''
    },
    authorUrl: {
      default: ''
    },
    features: {
      default: []
    },
    img: {
      default: ''
    },
    name: {
      default: ''
    },
    numberSale: {
      default: 0
    },
    preview: {
      default: ''
    },
    price: {
      default: 0
    },
    rating: {
      default: 0
    },
    updatedAt: {
      default: undefined
    },
    url: {
      default: ''
    }
  }
})
</script>
