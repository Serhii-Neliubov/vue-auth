<template>
  <div class="__container">
    <div class="body">
      <div class="content">
        <div class="content__form">
          <img src="../assets/images/login/Logo.svg" alt="image"/>
          <h1 class="content__title">Log in to your account</h1>
          <p>Learn for free and start the career you've been dreaming of since you were an embryo!</p>
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
            <label class="content__password-label">
              Password
              <input
                  required
                  v-model="password"
                  type="password"
                  placeholder="password"
              />
            </label>
            <div class="content__remember-box">
              <input v-model="isRemembered" type="checkbox" />
              <span>Remember me</span>
            </div>
            <button type="submit" class="content__login-button">Log in</button>
          </form>
          <router-link class="content__register-button" to="/signup">
            <div>Don't have an account yet? <span>Register now, it's free!</span></div>
          </router-link>
        </div>
        <div class="content__image">
          <img src="../assets/images/login/main-image.jpeg" alt="image"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from "axios";

  export default {
    name: 'Login',

    data() {
      return {
        email: this.email,
        password: this.password,
        isRemembered: this.isChecked,
      }
    },

    methods: {
      onsubmit() {
        axios.post(`http://localhost:5000/login`, {
          email: this.email,
          password: this.password,
          isRemembered: this.isRemembered || false,
        })
      }
    }
  }

</script>

<style lang="scss">
  .content{
    display: flex;
    align-items: center;

    &__register-button{
      text-decoration: none;

      & > div{
        margin-top: 30px;
        font-family: Arial,serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0;
        text-align: center;
        color: rgb(75, 85, 99);
        & > span{
          color: rgb(79, 70, 229);
          background: none;
        }
      }
    }

    &__remember-box{
      margin-top: 20px;
      display: flex;
      align-items: center;
      gap: 20px;

      & > span{
        margin: 0;
        font-size: 16px;
        font-family: Arial, sans-serif;
        color: #000;
      }

      & > input{
        margin: 0;
        border-radius: 4px;
        border: 1px solid #000;
      }
    }

    &__login-button{
      width: 100%;
      margin-top: 30px;
      padding: 20px 40px;
      background-color: rgb(79, 70, 229);
      border-radius: 8px;
      border: none;
      color: #fff;
      font-size: 16px;
      font-family: Arial, sans-serif;
      font-weight: 600;
      cursor: pointer;
      transition: 0.2s;
      box-shadow: 0 30px 60px 0 rgba(79, 70, 229, 0.15);
      &:hover{
        background-color: rgb(93, 83, 236);
        transform: scale(1.02);
      }
    }

    &__form{
      & > h1{
        margin: 55px 0 10px 0;
        font-size: 24px;
        font-family: Arial, sans-serif;
        font-weight: 600;
        color: #000;
      }

      & > p{
        color: rgb(75, 85, 99);
        font-size: 16px;
        font-family: Arial, sans-serif;
        line-height: 28px;
        letter-spacing: 0;
        text-align: left;
        max-width: 440px;
      }

      & > form{
        & > label{
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          font-family: Arial, sans-serif;
          color: #000;
          gap: 10px;

          & > input{
            border-radius: 8px;
            width: 100%;
            padding: 20px 20px;
            background: rgb(243, 244, 246);
            border: none;
            outline: none;

            &::placeholder{
              color: rgba(0, 0, 0, 0.3);
              font-family: Arial, serif;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0;
            }
          }
        }
      }
    }
  }
</style>