<script setup>
import ArrowBackIcon from './ArrowBackIcon.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <RouterLink
    to="/"
    class="movie-back-btn"
    aria-label="please click here to go back to homepage"
    rel="noopener noreferrer"
  >
    <ArrowBackIcon /> Back to List
  </RouterLink>
</template>
