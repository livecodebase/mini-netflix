<script setup>
import BackButton from '@/components/MovieDetail/BackButton.vue'
import MovieDetail from '@/components/MovieDetail/MovieDetail.vue'
import MovieDetailLoader from '@/components/MovieDetail/MovieDetailLoader.vue'
import MovieDetailNotFound from '@/components/MovieDetail/MovieDetailNotFound.vue'

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movie = ref(null)
const loading = ref(true)
const error = ref(false)

const fetchMovieData = async () => {
  const movieId = route.params.id
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/?apikey=${import.meta.env.VITE_OBMI_API_KEY}&i=${movieId}&plot=full`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const parseResponse = await response.json()
    if (parseResponse.Response === 'False') {
      throw new Error('Request movie not found')
    }
    movie.value = parseResponse
  } catch (err) {
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchMovieData()
})
</script>

<template>
  <article class="container-fluid movie-detail">
    <BackButton />
    <MovieDetailLoader v-if="loading" />
    <MovieDetailNotFound v-else-if="error" />
    <MovieDetail v-else-if="!loading && movie" :movie="movie" />
  </article>
</template>
