<template>
  <div class="card">
    <h3 class="card-header ">{{title}} ({{item.length}})</h3>
    <div class="card-body">
      <Draggable  v-model="draggables" :options="{ group: 'tasks' }">
        <div v-for="item in item" :key="item.id">
          <TaskLaneItem class="task_box" :item="item"/>
        </div>
      </Draggable>
    </div>
    <div class="card-footer text-muted">
      <newTask :id="id" />
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import TaskLaneItem from './TaskLaneItem';
import newTask from './AddTask'

export default {
  name: 'TaskLane',
  props: ['title', 'id', 'item'],
  data() {
    return {
      name: ''
    }
  },
  components: {
    Draggable,
    TaskLaneItem,
    newTask
  },
  computed: {
    draggables: {
      get() {
        return this.items;
      },
      set(items) {
        this.$http.patch('')
        this.$store.commit('updateItems', {
          items,
          id: this.id,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>

.card-body {
  min-height: 50px;
}
</style>