<template>
  <div>
    <h1>Эта страница находится на стадии разработки!</h1>
  </div>
</template>


<script>
  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
        // eslint-disable-next-line no-unused-vars
        .then(resp => {
          this.$router.push('/login')
       })
      }
    },
  }
</script>