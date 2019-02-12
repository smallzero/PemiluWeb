import Vue from 'vue'
import * as SearchAPI from '@/services/api/search'

export const namespaced = true

export const state = {
  people: [],
  janjiPolitiks: []
}

export const actions = {
  async people(ctx, payload) {
    await SearchAPI.people(payload).then(people => {
      ctx.commit('setPeople', people)
    }).catch(error => {
      console.log(error)
    })
  },
  async janjiPolitiks(ctx, payload) {
    await SearchAPI.janjiPolitiks(payload).then(janjiPolitiks => {
      ctx.commit('setJanjiPolitiks', janjiPolitiks)
    }).catch(error => {
      console.log(error)
    })
  }
}

export const mutations = {
  setPeople(state, people) {
    Vue.set(state, 'people', people)
  },
  setJanjiPolitiks(state, janjiPolitiks) {
    Vue.set(state, 'janjiPolitiks', janjiPolitiks)
  }
}
