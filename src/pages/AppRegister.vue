<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="name" type="text" placeholder="Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '../store/user';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      const store = useUserStore();
      store.register(this.name, this.email, this.password).then(() => {
        this.$router.push('/login');
      }).catch(() => {
        alert('Registration failed');
      });
    }
  }
}
</script>
