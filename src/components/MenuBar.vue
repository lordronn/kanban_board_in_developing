<template>
  <div class="menubar">
    <ul class="btn-group" role="group" aria-label="Menu bar">
      <li><router-link to="/" :class="buttonClass('/')"> Board </router-link></li>
      <li v-if="!loggedIn">
        <router-link to="/register" :class="buttonClass('/register')"> Registration </router-link>
        <router-link to="/login" :class="buttonClass('/login')"> Authorization </router-link>
      </li>
      <li v-if='loggedIn'>
        <router-link to="/logout" :class="buttonClass('/logout')"> Logout </router-link>
      </li>
    </ul>
  </div>
</template>


<script>

export default {
  name: 'MenuBar',
  methods: {
    buttonClass(path) {
      return {
        btn: true,
        'btn-primary': this.$route.path === path,
        'btn-secondary': this.$route.path !== path
      };
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  }
};
</script>

<style>
  .menubar {
    margin-bottom: 16px;
  }
</style>