<template>
  <div class="profile">
    <h1>{{ user.name }}'s Profile</h1>
    <p>Email: {{ user.email }}</p>
    <p>Saldo: {`{ user.balance }}</p>
    <button @click="logout">Logout</button>
    <div class="purchase-history">
      <h2>Purchase History</h2>
      <ul>
        <li v-for="movie in user.purchases" :key="movie.id">{{ movie.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../store/user';

export default {
  setup() {
    const store = useUserStore();
    const user = store.user;

    const logout = () => {
      store.logout();
      this.$router.push('/login');
    };

    return { user, logout };
  }
}
</script>
as