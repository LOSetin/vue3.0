<template>
<div id="test">{{text}}</div>
</template>
<script>
// import 'style-loader!css-loader!./style.css';
export default {
  data() {
    return {
      text: 'abc'
    }
  }
}
</script>

<style>
#test{
  color: red;
}
</style>
