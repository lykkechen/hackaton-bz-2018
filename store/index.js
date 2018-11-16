import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      driver: {},
      passengers: [],
      pendingPassenger: {
        name: 'Mario',
        surname: 'Rossi'
      },
      coupon: null
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
      },
      OBTAIN_COUPON (state) {
        state.coupon = 'You obtained your coupon'
      },
      CHECKOUT_PASSENGER (state, passenger) {
        var filtered = state.passengers.filter(function(value, index, arr) {
          return value.name !== passenger.name
        })
        state.passengers = filtered
        debugger
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
      },
      coupon (state) {
        return state.coupon
      }
    }
  })
}

export default createStore
