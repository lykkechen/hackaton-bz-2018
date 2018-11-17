import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      driver: {},
      passengers: [
        {
          name: 'Ingrid',
          surname: 'Oberrauch'
        },
      ],
      pendingPassenger: {
        name: 'Verena',
        surname: 'Mück'
      },
      passenger: {},
      rides: [
        {
          name: 'Jügen',
          surname: 'Wenter',
          places: '3'
        },
        {
          name: 'Gennaro',
          surname: 'Bruno',
          places: '2'
        }
      ],
      codes: [
        {
          number: '4754832658346'
        },
        {
          number: '2984758435784'
        }
      ]
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
      OBTAIN_DISCONT_CODE (state) {
        state.codes.push(code)
      },
      CHECKOUT_PASSENGER (state, passenger) {
        var filtered = state.passengers.filter(function(value, index, arr) {
          return value.name !== passenger.name
        })
        state.passengers = filtered
      },
      CREATE_PASSENGER_ITINERARY (state, passenger) {
        state.passenger = passenger
      },
      APPROVE_DRIVER (state, driver) {
        state.driver = driver
      },
      ADD_DISCOUNT_CODE (state, code) {
        state.codes.push(code)
      },
      REDEEM_CODE (state) {
        state.codes.shift()
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
      codes (state) {
        return state.codes
      },
      rides (state) {
        return state.rides
      },
      passenger (state) {
        return state.passenger
      }
    }
  })
}

export default createStore
