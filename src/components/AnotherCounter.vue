<template>
	<div>
    <hr>
    <button class="btn btn-info" @click="acyncIncrement({by: 100, duration: 1000})">Async_increment</button>
    <button class="btn btn-info" @click="acyncDecrement({by: 100, duration: 1000})">Async_decrement</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
   methods: {
   	...mapActions([
        'acyncIncrement',
        'acyncDecrement'
      ])
   }
}

</script>
