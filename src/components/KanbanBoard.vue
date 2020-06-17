-<template>
  <div class="board">
    <div class="row">
      <div class="col-md ">
        <TaskLane id="0" title="ON HOLD" :item="onHold" />
      </div>
      <div class="col-md">
        <TaskLane id="1" title="IN PROGRESS" :item="inProgress" />
      </div>
      <div class="col-md">
        <TaskLane id="2" title="NEEDS REVIEW" :item="needsReview" />
      </div>
      <div class="col-md">
        <TaskLane id="3" title="APPROVED" :item="approved" />
      </div>
     
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';    
import TaskLane from './TaskLane';

export default {
  name: 'KanbanBoard',
  components: {
    TaskLane,
  },
  computed: mapState({
      onHold: s => s.items[0],
      inProgress: s => s.items[1],
      needsReview: s => s.items[2],
      approved: s => s.items[3],
    }),
    
  methods: {
    
  

  
    async getCards () {
      await this.$http
        .get(
          'https://trello.backend.tests.nekidaem.ru/api/v1/cards/', 
          {headers: {
            Authorization : "JWT " + this.$store.state.token
            }
          }         
        )
        .then(resp => {
          
          let tasks = [[],[],[],[]];
          resp.data.map(task => {
           tasks[task.row].push( { id: task.id, row: task.row, seq_num: task.seq_num, text: task.text } )
             })
          
          this.$store.commit('pushTasks', tasks)
          console.log(resp)
          console.log(tasks)
        })
    },
  
  },
  mounted () {
    this.getCards()
  }

}
</script>

<style lang="scss" scoped>


.board {
  width: 90%;
  margin: 0 auto;
}
.col-md {
  align-items: center;
  min-width: 300px;
  max-width: 600px;
  margin-bottom: 25px;
}

@media (max-width: 1300px){
  .col-md {
  min-width: 450px;
}
  
}

@media (max-width: 960px){
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .col-md {
  min-width: 200px;
  max-width: 600px;
}
}
</style>