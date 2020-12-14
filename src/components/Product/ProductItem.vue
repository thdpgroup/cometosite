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
          <p class="text-sm text-gray-600 flex items-center">
            author&nbsp;<a :href="authorUrl" class="hover:underline" target="_blank">{{authorName}}</a>
          </p>
        </div>
        <div class="flex items-center">
          <ul class="list-disc list-inside text-gray-700">
            <li :key="index" v-for="(feat, index) in features">{{feat}}</li>
          </ul>
        </div>
    </div>
    <div class="border-l border-gray-300 pl-4 lg:w-60 flex flex-wrap text-center justify-center items-end">
      <div class="text-xl font-semibold text-gray-900">${{price/1000}}</div>
      <div class="w-full"/>
      <div class="text-sm">
        <svg height="0" width="0">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#cc4b37;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#cc4b37;stop-opacity:1" />
              <stop offset="50%" style="stop-color:transparent;stop-opacity:1" />
              <stop offset="100%" style="stop-color:transparent;stop-opacity:1" />
            </linearGradient>
          </defs>
        </svg>

        <svg :key="index" class="inline-block w-4" viewBox="0 0 40 37" stroke="#cc4b37" xmlns="http://www.w3.org/2000/svg" v-for="(rate, index) in 5">
          <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
             31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
             12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
            :fill="renderRating(rate)" stroke-width="1" stroke="#cc4b37"/>
        </svg>
        ({{convertRating}})</div>
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
        return '#cc4b37'
      }
      if (rate >= Math.ceil(this.convertRating)) {
        return 'url(#grad)'
      }
      return '#fff'
    }
  },
  name: 'ProductItem',
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
    price: {
      default: 0
    },
    rating: {
      default: 0
    },
    url: {
      default: ''
    }
  }
})
</script>
