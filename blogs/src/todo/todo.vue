<template>
  <section class="real-app">
    <input type="text"
    class="add-input"
    autofocus="autofocus"
    placeholder="接下来要做什么？"
    @keyup.enter="addTodo"
    >
    <Item :todo="todo"
          v-for="todo in todos"
          :key="todo.id"
          @del="deleteTodo"
    />
  </section>
</template>

<script>
import Item from "./item.vue"
let id = 0
export default {
  components: {
    Item
  },
  data () {
    return {
      todos:[{
        id: 0,
        content: "this is false",
        completed: false
      }]
    }
  },
  methods: {
    addTodo(e) {

      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value=""
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id==id),1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow  0 0 5px #666
}
.add-input{
  position relative
  margin 0
  width 600px
  height 30px
  font-size 14px
  padding 5px 0 5px 20px
  }
</style>
