<template>
  <div>
   <h1 v-if="seen">Counter is {{counter}}</h1>
  </div>
</template>

<script>
export default {
data(){
  return{
    seen:false
  }
},
  name: 'HelloWorld',
  computed:{
    counter(){
      return this.$store.state.counter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
