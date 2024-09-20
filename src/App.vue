<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useMovieStore } from './stores/movieStore'
import AppHeader from '@/components/core/AppHeader.vue'
import AppFooter from './components/core/AppFooter.vue'

const { fetchMovies } = useMovieStore()

onMounted(() => {
  fetchMovies()
})
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>
