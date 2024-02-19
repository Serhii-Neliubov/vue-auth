<template>
  <button class="backToLoginButton" @click="goToMainPage">
    <img src="../assets/images/login/Logo.svg" alt="image"/>
  </button>
</template>

<script lang="ts">
export default {
  name: 'BackButton',

  methods: {
    goToMainPage() {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss">
  .backToLoginButton{
    border: none;
    cursor: pointer;
    transition: 0.2s;
    margin: 0;

    &:hover{
      transform: scale(1.02);
    }
  }
</style>