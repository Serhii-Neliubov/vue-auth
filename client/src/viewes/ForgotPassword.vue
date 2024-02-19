<template>
  <div class="__container">
    <div class="body">
      <div class="content">
        <div class="content__form">
          <back-button />
          <h1 class="content__title">Forgot password</h1>
          <p>Enter the email you registered previously, then you will be sent an email.</p>
          <form @submit.prevent="onsubmit">
            <label class="content__email-label">
              Email
              <input
                  required
                  v-model="email"
                  type="email"
                  placeholder="saipul@gmail.com"
              />
            </label>
            <button type="submit" class="content__login-button">Continue</button>
          </form>
          <router-link class="content__register-button" to="/">
            <div>Do you remember the password? <span>Login!</span></div>
          </router-link>
        </div>
        <img src="../assets/images/login/main-image.jpeg" alt="image"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from "axios";

  export default {
    name: 'ForgotPassword',

    data() {
      return {
        email: this.email,
        password: this.password,
        isRemembered: this.isChecked,
      }
    },

    methods: {
      onsubmit() {
        try{
          axios.post(`http://localhost:5000/login`, {
            email: this.email,
            password: this.password,
            isRemembered: this.isRemembered || false,
          })

        } catch (error) {
          console.log(error);
        }
      },
    }
  }

</script>