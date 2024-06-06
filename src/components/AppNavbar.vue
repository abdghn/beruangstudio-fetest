<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/search">Search</router-link>
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    <router-link v-if="isLoggedIn" to="/profile">Profile</router-link>
  </nav>
</template>

<script>
import { useUserStore } from '../store/user';

export default {
  computed: {
    isLoggedIn() {
      const store = useUserStore();
      return store.isLoggedIn;
    }
  }
}
</script>
