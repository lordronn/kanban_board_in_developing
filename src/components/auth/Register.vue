<template>
  <div class="register">
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="name">Name</label>
      <div>
          <input id="name" type="text" v-model="name" required autofocus>
      </div>
      <label for="email" >E-Mail Address</label>
      <div>
          <input id="email" type="email" v-model="email" required>
      </div>
      <label for="password">Password</label>
      <div>
          <input id="password" type="password" v-model="password" required>
      </div>
      <label for="password-confirm">Confirm Password</label>
      <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>
      <div v-if="password_match">
        <p>Введенные пароли должны совпадать!</p>
        <p>Проверьте корректность ввода</p>
      </div>
      <div>
          <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name : "",
        email : "",
        password : "",
        password_confirmation : "",
        password_match: false
      }
    },
    methods: {
      register () {
        if (this.password == this.password_confirmation) {
          this.$store.dispatch('register', {
            username: this.name,
            email: this.email,
            password: this.password,
          })
        .then(() => this.$router.push('/login'))

        .catch(err => console.log(err))
        } else {this.password_match = true}
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  color: #fff;
}
</style>