<template>
  <div class="add-item">
    <div v-if="openAddTask" >
      <form action="#" method="post" v-on:submit.prevent="submitForm">
        <textarea type="text" v-model="itemText" placeholder="Ввести заголовок для этой карточки" />
        <div class="btn_box">
          <button v-on:click="submitForm">Добавить карточку</button>
          <button v-on:click="openAddTask = 0">X</button>
        </div>
      </form>
    </div>
    <div v-else>
        <button v-on:click="openAddTask = 1">+ Добавить карточку</button> 
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'NewItemForm',
  data() {
    return {
      itemText: '',
      openAddTask: 0,
    };
  },
  props: ['id'],
  methods: {
    submitForm() {
      if (this.itemText) {
        
      this.$http.post(
          'https://trello.backend.tests.nekidaem.ru/api/v1/cards/',
          {
            row: this.id,
            text: this.itemText
          }, 
          {headers: {
            Authorization : "JWT " + this.$store.state.token
            }
          }         
        )
    .then(resp => {console.log(resp)})
        this.openAddTask = 0;
        this.itemText = '';
      }
    },
    
  },
  
};
</script>

<style lang="scss" scoped>
button {
      background-color: #888888;
}
.add-item {
  textarea {
  height: 110px;
  outline: none;
  border: 0;
  width: 100%;
  transition: all 0.25s;
  background: #505050;
  color: #888888;
  margin: 10px 0;
  }
  .btn_box {
    display: flex;
    justify-content: space-between;
    
  }
}
.add-item input:focus {
  border-bottom-color: rgba(255, 255, 255, 1);
}
</style>