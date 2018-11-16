import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      driver: {},
      passengers: [
        {
          name: 'Mario',
          surname: 'Rossi'
        }
      ]
    },
    mutations: {
      CREATE_DRIVER_ITINERARY (state, driver) {
        state.driver = driver
      },
      CREATE_PASSENGER_REQUEST (state, passenger) {
        state.passengers.push(passenger)
      }
    },
    actions: {
    },
    getters: {
      driver (state) {
        return state.driver
      },
      passengers (state) {
        return state.passengers
      }
    }
  })
}

export default createStore
