<script setup>
import { useMovieStore } from '@/stores/movieStore'
const { fetchMovies } = useMovieStore()

function refreshHandler() {
  fetchMovies()
}
</script>
<template>
  <section class="container-fluid movie-noresult">
    <h1>No Results Found</h1>
    <button @click="refreshHandler">Try again</button>
  </section>
</template>
