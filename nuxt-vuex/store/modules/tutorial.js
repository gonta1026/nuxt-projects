export const state = () => ({
  count: 2,
  message: "",
})

export const getters = {
  dobleCount: state => state.count * 2,
  tripleCount: state => state.count * 3,
  count: state => state.count,
  message: state => state.message
}

export const mutations = {
  /* storeの書き換えをする役割 */
  increment(state, {
    num01,
    num02
  }) {
    state.count += (num01 + num02);
  },
  decrement(state, payload) {
    state.count -= payload;
  },
  autoIncrement(state, number) {
    state.count -= number;
  },
  updateMessage(state, event) {
    // console.log(event.target.value)
    state.message = event.target.value;
  }
}

export const actions = {
  incrementAction({
    commit
  }, number) {
    commit("increment", number);
  },
}
