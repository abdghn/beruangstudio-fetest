<template>
  <div class="search">
    <input v-model="query" type="text" placeholder="Search movies..." @input="searchMovies" />
    <div v-if="searchResults.length > 0" class="search-results">
      <MovieCard v-for="movie in searchResults" :key="movie.id" :movie="movie" />
    </div>
    <div v-else>
      <p>No results found.</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import MovieCard from '../components/MovieCard.vue';

export default {
  components: { MovieCard },
  setup() {
    const query = ref('');
    const searchResults = ref([]);

    const searchMovies = async () => {
      if (query.value.trim() === '') {
        searchResults.value = [];
        return;
      }

      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query.value}`);
      const data = await response.json();
      searchResults.value = data.results;
    };

    return { query, searchResults, searchMovies };
  },
};
</script>

