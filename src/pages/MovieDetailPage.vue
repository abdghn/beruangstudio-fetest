<template>
  <div class="movie-detail-page">
    <MovieDetail :movie="movie" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../store/user';
import MovieDetail from '../components/MovieDetail.vue';

export default {
  components: { MovieDetail },
  props: ['id'],
  setup(props) {
    const movie = ref(null);
    const store = useUserStore();

    onMounted(async () => {
      // Fetch movie details from TMDB API using props.id
      const response = await fetch(`https://api.themoviedb.org/3/movie/${props.id}?api_key=YOUR_API_KEY`);
      const data = await response.json();
      movie.value = data;
    });

    return { movie, store };
  },
};
</script>

