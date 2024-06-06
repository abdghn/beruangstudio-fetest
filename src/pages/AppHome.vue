<template>
  <div class="home">
    <h1>Latest Movies</h1>
    <div class="movies-grid">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';

export default {
  components: { MovieCard },
  data() {
    return {
      movies: []
    }
  },
  async mounted() {
    const key = "d1b341d9a73c903555118b367178db7a"
    const response = await fetch('https://api.themoviedb.org/3/movie/latest?api_key='+ key);
    const data = await response.json();
    this.movies = data.results;
  }
}
</script>
