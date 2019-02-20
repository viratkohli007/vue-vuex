<template>
  <div id="app">

    <app-result ></app-result>
    <app-another-result></app-another-result>
    <app-counter></app-counter>
    <app-another-counter></app-another-counter>
    <hr>
    <input type="text" v-model="value"><br>
    {{value}}
  </div>
</template>

<script>
import HelloWorld from './components/result'
import Counter from './components/Counter'
import AnotherResult from './components/AnotherResult'
import AnotherCounter from './components/AnotherCounter'

export default {
  name: 'App',
  components: {
    'app-result':HelloWorld,
    'app-counter': Counter,
    'app-another-result': AnotherResult,
    'app-another-counter': AnotherCounter
  },
  computed: {
   value: {
    get(){
      return this.$store.getters.value
    },
    set(value){
      this.$store.dispatch('updateValue', value)
    }
   }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
