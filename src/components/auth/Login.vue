<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Login</label>
     <input required v-model="username" type="login" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
 </div>
</template>

<script>
  export default {
    data(){
      return {
        username : "",
        password : ""
      }
    },
    methods: {
      login () {
        this.$store.dispatch('login', { 
          username: this.username, 
          password: this.password
        })
       // eslint-disable-next-line no-unused-vars
       .then(resp => {
         this.$router.push('/')
       })
       .catch(err => console.log(err))
      
       }
    }
  }
</script>

<style lang="scss" scoped>
.login {
  color: #fff;
}
</style>