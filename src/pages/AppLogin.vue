<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '../store/user';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      const store = useUserStore();
      store.login(this.email, this.password).then(() => {
        this.$router.push('/');
      }).catch(() => {
        alert('Login failed');
      });
    }
  }
}
</script>
