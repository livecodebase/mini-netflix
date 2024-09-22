import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', () => {
  const movies = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchMovies = async (searchTerm) => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/?apikey=${import.meta.env.VITE_OBMI_API_KEY}&s=${searchTerm || import.meta.env.VITE_OBMI_DEFAULT_SEARCH}&type="movie"`
      )

      const data = await response.json()
      movies.value = data.Search
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  return { movies, loading, error, fetchMovies }
})
