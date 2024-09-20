<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
import FallbackImage from '@/assets/images/fallback-movie.png'
import MoviesLoader from './MoviesLoader.vue'
import MoviesNotFound from './MoviesNotFound.vue'

const movieStore = useMovieStore()

const { movies, loading, error } = storeToRefs(movieStore)

function onImageError(event) {
  event.target.src = FallbackImage
}
</script>

<template>
  <section class="container-fluid movie-card-list">
    <MoviesLoader v-if="loading" />
    <RouterLink
      v-for="data in movies"
      :key="data.imdbID"
      :aria-label="`Please click here to go to detail page of movie ${data?.Title} released on year ${data?.Year}`"
      :to="`/movie/${data.imdbID}`"
      rel="noopener noreferrer"
    >
      <article class="card">
        <figure>
          <img
            :src="data?.Poster || FallbackImage"
            :alt="`movie poster of ${data?.Title}`"
            @error="onImageError"
          />
          <figcaption>
            <h2 class="movie-title">{{ data?.Title }}</h2>
            <p class="release-year">Released: {{ data?.Year }}</p>
          </figcaption>
        </figure>
      </article>
    </RouterLink>
  </section>
  <MoviesNotFound v-if="error" />
</template>
