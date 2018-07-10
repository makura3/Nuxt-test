import Vuex from 'vuex'
import {
  INIT
} from './types'
import db from '~/plugins/firebaseInit'

const itemRef = db.collection('items')

const initPlugin = store => store.dispatch(INIT)

const store = () =>
  new Vuex.Store({
    state: {
      itemList: []
    },
    mutations: {
      INIT(state, data) {
        state.itemList = data
      }
    },
    actions: {
      INIT({ commit }) {
        itemRef.get().then(res => {
          let list = []
          res.forEach(doc => {
            let data = {
              id: doc.id,
              url: doc.data().url,
              name: doc.data().name,
              description: doc.data().description
            }
            list.push(data)
          })
          commit('INIT', list)
        })
      }
    },
    getters: {
      getItems: state => {
        return state.itemList
      }
    },
    plugins: [initPlugin]
  })

export default store