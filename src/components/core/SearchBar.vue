<script setup>
import { ref } from 'vue'
import SearchIcon from '@/assets/images/search.svg'
import CloseIcon from '@/assets/images/x.svg'
import { useMovieStore } from '@/stores/movieStore'

const searchData = ref('')

const { fetchMovies } = useMovieStore()

const clearhandler = () => {
  searchData.value = ''
  fetchMovies()
}
const debounce = (fn, delay) => {
  let timeoutID
  return (...args) => {
    if (timeoutID) clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
const handleSearch = () => {
  fetchMovies(searchData.value)
}
const debouncedSearch = debounce(handleSearch, 500)
</script>
<template>
  <div class="search-box">
    <img class="search-icon" :src="SearchIcon" alt="search icon" />
    <input type="text" v-model="searchData" placeholder="Movie Name" @input="debouncedSearch" />
    <img
      v-show="searchData ? true : false"
      @click="clearhandler"
      class="close-icon"
      :src="CloseIcon"
      alt="close icon"
    />
  </div>
</template>

<style lang="scss">
.search-box {
  position: relative;
  input {
    border: 0;
    min-height: 3rem;
    border-radius: 3rem;
    padding: 0 3rem 0 3rem;
    color: $btntext;
    min-width: 300px;
    font-size: 1rem;
    &:focus {
      box-shadow: $boxShadowCard;
      outline: none;
    }
  }
  .search-icon,
  .close-icon {
    width: 1.25rem;
    height: auto;
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    filter: opacity(0.5);
  }
  .close-icon {
    left: unset;
    right: 1rem;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
      filter: opacity(1);
    }
  }
}
</style>
