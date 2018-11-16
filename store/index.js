import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      driver: {},
      passengers: [],
      pendingPassenger: {
        name: 'Mario',
        surname: 'Rossi'
      }
    },
    mutations: {
      CREATE_DRIVER_ITINERARY (state, driver) {
        state.driver = driver
      },
      APPROVE_PASSENGER (state, passenger) {
        state.passengers.push(passenger)
      },
      REJECT_PASSENGER (state, pendingPassenger) {
        state.pendingPassenger = {}
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
      },
      pendingPassenger (state) {
        return state.pendingPassenger
      }
    }
  })
}

export default createStore
