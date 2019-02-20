
const state = {
	counter: 1
};

const getters = {
	 doubleCounter: state => {
		  	 return state.counter *3
		  },
		  clicks: state => {
		  	return state.counter
		  }
}

const mutations = {

	increment: (state, payload)=>{
			state.counter += payload
		},
		decrement: (state, payload)=>{
			state.counter -= payload
		}
};

const actions = {
	increment: ({commit}, payload) => {
			commit('increment', payload)
		},
		decrement: ({commit}, payload) => {
			commit('decrement', payload)
		},
		acyncIncrement: ({commit}, payload) =>{
			setTimeout(()=>{
				commit('increment', payload.by)
			},payload.duration)

		},
		acyncDecrement: ({commit}, payload) =>{
			setTimeout(()=>{
        commit('decrement', payload.by)
			},payload.duration)
		}
}

export default{
	state,
	getters,
	mutations,
	actions,
}
