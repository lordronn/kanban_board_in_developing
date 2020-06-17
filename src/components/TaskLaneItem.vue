<template>
  <div class="card task-lane-item">
    <div class="card-block task_block">
      
      <div class="card-title">
        <span class="text-muted ">id: {{item.id}}</span>
        <button v-on:click="deleteTasks" >x</button>
      </div>
      
      <div>{{item.text}}</div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskLaneItem',
  props: ['item'],
  methods: {
    deleteTasks () {
      this.$http
        .delete(
          `https://trello.backend.tests.nekidaem.ru/api/v1/cards/${this.item.id}/`,                        
          {headers: {Authorization : "JWT " + this.$store.state.token}}         
        )
        
         .then(
            this.$store.commit('deleteTask', this.item)
         )
        .then(resp => {
          console.log(resp)
      })
    }
  }
};
</script>

<style lang="scss" scoped>

.task_block {
  text-align: left;
  .card-title {
    display: flex;
    justify-content: space-between;
  }
  div {
    margin-left: 0;
  }
}


button {
  background-color: #4e5d6c;
  border: none;
}
</style>>
  
