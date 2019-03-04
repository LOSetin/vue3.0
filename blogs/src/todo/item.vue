<template>
  <div :class= "['todo-item', todo.completed ? 'completed':'']">
<input type="checkbox"
       class="toggle"
       v-model="todo.completed"
  >
  <label>{{todo.content}}</label>
  <button class="destory" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  props: {
    todo:{
      type: Object,
      required: true
    }
  },
  methods: {
      //没写这段代码时 全线崩盘
      deleteTodo(){
				this.$emit('del',this.todo.id)
			}
  }
}
</script>
<style lang="stylus" scoped>
.todo-item{
  position relative
  background #ffffff
  font-size 24px
  width 600px
  padding 12px
  border-bottom 9px soild rgba(0,0,0,0.06)
  &:hover{
    .destory:after{
      content "x"
      }
    }
  }
label{
  white-space pre-line
  word-break break-all
  padding 15px 60px 15px 15px
  margin 45px
  line-height 1.2
  transition color 0.4s
}
&.completed{
  label{
    color #d9d9d9
    text-decoration line-through
  }
  }
.toggle {
  text-align center
  margin 0
  // width 624px
  // height 30px
  font-size 14px
  padding 15px 0 5px 10px

  position absolute
  top 0
  // padding 5px 0 5px 20px
  bottom 0

  border none
  appearance none
  outline  none
  &:after{
      content "✖️"
    }
  &:checked:after{
    content  "☑️"
    }
  }
  .destory{
    position absolute
    top 0
    right 10px
    bottom 0
    width 40px
    height 40px
    margin auto 0
    font-size 30px
    color #cc9a9a
    margin-bottom  11px
    transition color 0.2s ease-out
    background-color  transparent
    appearance none
    border-width 0
    outline none
    cursor pointer
    }
</style>

