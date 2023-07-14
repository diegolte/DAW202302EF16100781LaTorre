<template>
  <h4>Register</h4>
  <div class="input-container">
    <input
      v-model="firstname"
      type="text"
      placeholder="First Name"
      class="login-input"
    />
  </div>

  <div class="input-container">
    <input
      v-model="middlename"
      type="text"
      placeholder="Middle Name"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="lastname"
      type="text"
      placeholder="Last Name"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="DateofBirth"
      type="text"
      placeholder="Date of Birth"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="Email"
      type="text"
      placeholder="Email"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="Country"
      type="text"
      placeholder="Country"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="Phone"
      type="text"
      placeholder="Phone"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="Password"
      type="text"
      placeholder="password"
      class="register-input"
    />
  </div>

  <button @click="Register" class="register.button">Register</button>
  <button @click="Login" class="login.button">Go to login</button>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    Login() {
      this.$router.push("/");
    },
    Register() {
      this.$router.push("/");
    },
  },
};
</script>
