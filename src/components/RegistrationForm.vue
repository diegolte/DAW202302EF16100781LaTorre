<template>
  <h4>Register</h4>
  <div class="input-container">
    <input
      v-model="usuario.FirstName"
      type="text"
      placeholder="First Name"
      class="login-input"
    />
  </div>

  <div class="input-container">
    <input
      v-model="usuario.MiddleName"
      type="text"
      placeholder="Middle Name"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="usuario.LastName"
      type="text"
      placeholder="Last Name"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="usuario.DateOfBirth"
      type="text"
      placeholder="Date of Birth"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="usuario.Email"
      type="text"
      placeholder="Email"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="usuario.Country"
      type="text"
      placeholder="Country"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="usuario.Phone"
      type="text"
      placeholder="Phone"
      class="register-input"
    />
  </div>
  <div class="input-container">
    <input
      v-model="usuario.Password"
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
    return {
      usuario: {
        FirstName: "",
        MiddleName: "",
        LastName: "",
        DateOfBirth: "",
        Email: "",
        Country: "",
        Phone: "",
        Password: "",
      },
    };
  },
  methods: {
    checkEmptyFields() {
      const {
        FirstName,
        MiddleName,
        LastName,
        DateOfBirth,
        Email,
        Country,
        Phone,
        Password,
      } = this.usuario;
      return (
        FirstName === "" ||
        MiddleName === "" ||
        LastName === "" ||
        DateOfBirth === "" ||
        Email === "" ||
        Country === "" ||
        Phone === "" ||
        Password === ""
      );
    },

    Login() {
      this.$router.push("/");
    },
    Register() {
      if (this.checkEmptyFields()) {
        this.$q.notify({
          message: "Por favor, complete todos los campos.",
          color: "negative",
          position: "top",
          timeout: 3000,
        });
        return;
      }
      console.log(this.usuario);
      axios
        .post("https://api-gil.onrender.com/api/v1/users/create", this.usuario)
        .then((response) => {
          this.$router.push("/");
          this.$q.notify({
            message: "Registro exitoso",
            color: "positive",
            position: "top",
            timeout: 3000,
          });
        })
        .catch((error) => {
          console.error("Error de Registro:", error);
          this.$q.notify({
            message: "Registro inválido",
            color: "negative",
            position: "top",
            timeout: 3000,
          });
        });
    },
  },
};
</script>
