<script setup>
import StarIcon from './StarIcon.vue'

defineProps({
  movie: Object
})
</script>
<template>
  <section class="movie-detail-header">
    <div>
      <h1>{{ movie.Title }}</h1>
      <ul class="movies-info">
        <li>{{ movie.Genre }}</li>
        <li>{{ movie.Year }}</li>
        <li>{{ movie.Runtime }}</li>
      </ul>
    </div>
    <div class="content-right">
      <div class="rating-wrap">
        <h2 class="title"><strong>IMDb Rating</strong></h2>
        <p class="content">
          <StarIcon />
          <span
            ><span class="rating-val">{{ movie.imdbRating }}</span
            >/10</span
          >
        </p>
      </div>
      <div class="votes-wrap">
        <h2 class="title"><strong>IMDb Votes</strong></h2>
        <p class="content">{{ movie.imdbVotes }}</p>
      </div>
    </div>
  </section>
  <section class="movie-featured">
    <figure>
      <img :src="movie.Poster" :alt="movie.Title" />
    </figure>
    <div class="content">
      <h2>Plot</h2>
      <p>
        {{ movie.Plot }}
      </p>
      <h2 class="movie-detail-title">Movie Details</h2>
      <ul class="movie-detail-list">
        <li><strong>Director:</strong> {{ movie.Director }}</li>
        <li><strong>Writer(s):</strong> {{ movie.Writer }}</li>
        <li><strong>Actors:</strong> {{ movie.Actors }}</li>
        <li><strong>Language(s):</strong> {{ movie.Language }}</li>
        <li><strong>Country:</strong> {{ movie.Country }}</li>
        <li><strong>Awards:</strong> {{ movie.Awards }}</li>
      </ul>
    </div>
  </section>
</template>
