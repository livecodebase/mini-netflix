<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="container-fluid movie-noresult">
    <h1>Lost your way?</h1>
    <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
    <RouterLink to="/" class="btn" rel="noopener noreferrer">Netflix Home</RouterLink>
  </section>
</template>
