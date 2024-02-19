<template>
  <div class="__container">
    <div class="body">
      <div class="content">
        <div class="content__form">
          <img src="../assets/images/login/Logo.svg" alt="image"/>
          <h1 class="content__title">Create a new account</h1>
          <p>It's not difficult, you just have to enter some data and it's done straight away !</p>
          <form @submit.prevent="onsubmit">
            <div class="content__userinfo-box">
              <label class="content__email-label">
                Name
                <input
                    required
                    v-model="name"
                    type="text"
                    placeholder="Alex"
                />
              </label>
              <label class="content__password-label">
                Surname
                <input
                    required
                    v-model="surname"
                    type="text"
                    placeholder="Magician"
                />
              </label>
            </div>
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
            <p>By registering, you agree with the terms of service</p>
            <button type="submit" class="content__login-button">Sign in</button>
          </form>
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
    name: 'Splash',

    data() {
      return {
        email: this.email,
        password: this.password,
        name: this.name,
        surname: this.surname,
      }
    },

    methods: {
      onsubmit() {
        axios.post(`http://localhost:5000/register`, {
          email: this.email,
          password: this.password,
          name: this.name,
          surname: this.surname,
        })
      }
    }
  }

</script>

<style lang="scss">
  .content{
    display: flex;
    align-items: center;

    &__userinfo-box{
      display: flex;
      justify-content: space-between;
      gap: 20px;

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
          padding: 20px 40px;
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
      max-width: 440px;

      & > h1{
        margin: 55px 0 10px 0;
        font-size: 24px;
        font-family: Arial, sans-serif;
        font-weight: 600;
        color: #000;
      }

      & > p{
        margin: 0;
        color: rgb(75, 85, 99);
      }

      & > form{
        & > p{
          box-sizing: border-box;
          margin-top: 30px;
          font-family: Arial, sans-serif;
          color: rgb(75, 85, 99);
          max-width: 440px;
          position: relative;
          padding-left: 40px;

          &::after{
            position: absolute;
            content: "!";
            left: 0;
            padding: 5px 13px 5px 12px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50%;
            color: white;
            background-color: rgb(79, 70, 229);
          }
        }

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
            padding: 20px 40px;
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