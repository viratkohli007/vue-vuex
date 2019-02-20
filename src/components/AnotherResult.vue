<template>
  <div>
   <h1>Counter is {{doubleCounter}}</h1>
   <p>Number of clicks is {{clicks}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: {
    ...mapGetters([
               'doubleCounter',
               'clicks'
          ])
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
