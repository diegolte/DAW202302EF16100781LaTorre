<template>
  <h4>Login</h4>
  <div class="input-container">
    <input
      v-model="email"
      type="text"
      placeholder="Email"
      class="login-input"
    />
  </div>

  <div class="input-container">
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="login-input"
    />
  </div>
  <button @click="Login" class="login.button">Login</button>
  <button @click="Register" class="register.button">Create an account?</button>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    Login() {
      this.$router.push("/Dashboard/Activity");
    },
    Register() {
      this.$router.push("/Register");
    },
  },
};
</script>
