<template>
  <div class="movie-card">
    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Poster" />
    <h2>{{ movie.title }}</h2>
    <p>Rating: {{ movie.vote_average }}</p>
    <button @click="$router.push(`/movie/${movie.id}`)">Details</button>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
}
</script>
