<script setup>
import FallbackImage from '@/assets/images/fallback-movie.png'
</script>
<template>
  <article class="card" v-for="n in 20" :key="n">
    <figure>
      <img :src="FallbackImage" alt="loading movie" />
    </figure>
  </article>
</template>
