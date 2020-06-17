import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    items: [
      [],
      [],
      [],
      []
    ],
    tasks: [],
    token:  null,
  },
  mutations: {
    
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    },
    pushTasks (state, tasks) {
      state.items = tasks
    },
    // временное решение
    deleteTask: (state, task) => {
      state.items[task.row].splice(task.seq_num ,1)
    }
  },
  actions: {
    login(context, user){
      return new Promise((resolve, reject) => {
        axios.post('https://trello.backend.tests.nekidaem.ru/api/v1/users/login/',{
          username: user.username,
          password: user.password
      })
        .then(resp => {
          const token = resp.data.token
          
          localStorage.getItem('token', token)
          context.commit('retrieveToken', token)
          resolve(resp)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
      }) 
    },
    register(context, userInfo){
      return new Promise((resolve, reject) => {
        axios.post('https://trello.backend.tests.nekidaem.ru/api/v1/users/create/',{
          username: userInfo.username,
          email: userInfo.email,
          password: userInfo.password
      })
        .then(resp => {
          console.log(resp)
          resolve(resp)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
      }) 
    },
    logout(context){
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('../components/auth/Logout')
          .then(resp => {          
            localStorage.removeItem('token')
            context.commit('destroyToken')
            resolve(resp)
          })
          .catch(error => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            reject(error)
          })
        }) 
      }
    }
    
  },
  getters : {
    loggedIn: state => !!state.token,
  }
})
