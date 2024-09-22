<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <ul>
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/tv-shows">TV Shows</RouterLink></li>
    <li><RouterLink to="/action">Action</RouterLink></li>
    <li><RouterLink to="/thriller">Thriller</RouterLink></li>
    <li><RouterLink to="/romance">Romance</RouterLink></li>
    <li><RouterLink to="/science-fiction">Science Fiction</RouterLink></li>
    <li><RouterLink to="/comedy">Comedy</RouterLink></li>
  </ul>
</template>
