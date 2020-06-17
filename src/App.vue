<template>
  <div id="app">
    <div class="page-header"></div>
      <MenuBar />
      <router-view/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar';

export default {
  name: 'app',
  components: {
    MenuBar
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
