import Vuex from 'vuex'
import {
  INIT
} from './types'
import db from '~/plugins/firebaseInit'

const itemRef = db.collection('items')

// myPluginはストアが初期化されたときに呼ばれます
// 第二引数はactionに渡ります INIT, 'hoge' みたいな
const myPlugin = store => store.dispatch(INIT)

const store = () =>
  new Vuex.Store({
    state: {
      itemList: []
    },
    mutations: {
      [INIT](state, data) {
        state.itemList = data
      }
    },
    actions: {
      [INIT]({ commit }) {
        // commit('LOADING', true)
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

          favRef.get().then(favRes => {
            let favList = []
            favRes.forEach(doc => {
              let data = {
                id: doc.id,
                favorite: doc.data().addFlg
              }
              favList.push(data)
            })
            commit('SEL_FAVORITE', favList)
          })
          //loading finish
          commit('LOADING', false)
        })
      }
    },
    getters: {
      getItems: state => {
        return state.itemList
      }
    },
    plugins: [myPlugin]
  })

export default store