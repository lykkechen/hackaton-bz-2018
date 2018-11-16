import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      driver: {}
    },
    mutations: {
      CREATE_DRIVER_ITINERARY (state, driver) {
        state.driver = driver
      }
    },
    actions: {
    },
    getters: {
      driver (state) {
        return state.driver
      }
    }
  })
}

export default createStore
