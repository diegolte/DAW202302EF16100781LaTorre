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
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Login() {
      axios
        .post("https://api-gil.onrender.com/api/v1/userauthentications/login", {
          Email: this.email,
          Password: this.password,
        })
        .then((response) => {
          this.$router.push("/Dashboard/Activity");
          this.$q.notify({
            message: "Inicio de sesión exitoso",
            color: "positive",
            position: "top",
            timeout: 3000,
          });
        })
        .catch((error) => {
          console.error("Error de inicio de sesión:", error);
          this.$q.notify({
            message: "Credenciales inválidas",
            color: "negative",
            position: "top",
            timeout: 3000,
          });
        });
    },
    Register() {
      this.$router.push("/Register");
    },
  },
};
</script>
