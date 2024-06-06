<template>
  <div class="movie-detail">
    <h1>{{ movie.title }}</h1>
    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Poster" />
    <p>{{ movie.overview }}</p>
    <p>Release Date: {{ movie.release_date }}</p>
    <p>Rating: {{ movie.vote_average }}</p>
    <button @click="buyMovie">Buy Movie</button>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  methods: {
    buyMovie() {
      // Implement buy movie logic
    }
  }
}
</script>
