<template>
	<div>
    <button class="btn btn-info" @click="increment(100)">increment</button>
    <button class="btn btn-info" @click="decrement(100)">decrement</button>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
export default{
   methods: {
   	// increment(by){
    //    this.$store.dispatch('increment',by)
   	// },
   	// decrement(by){
    //    this.$store.dispatch('decrement',by)
   	// }
      ...mapMutations(['increment', 'decrement'])
   }
}

</script>
