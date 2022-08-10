import Vue from 'vue'
import Vuex from 'vuex'

// import Localbase from 'localbase'
// let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      {id:1, titulo:"Aprendendo Vue 3", status :  false},
      {id:2, titulo:"Aprendendo Nuxt 3", status :  false},
      {id:3, titulo:"Aprendendo Laravel 9", status :  false}
     ],
     version:1.1,
     developer:"Wilson Manuel"
  },
  getters: {
  },
  mutations: {
      Adicionar_tarefa(state, titulo) {
      // db.collection('users').add({
      //   id: new Date().getTime,
      //   titulo,
      //   status: false
      // })
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime,
          titulo,
          status: false
        });
      }
    },
    excluir_tarefa(state,id) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    },
    atualizar_tarefa(state, novaTarefa) {
    let tarefa =  state.tarefas.filter(tarefa => tarefa.id == novaTarefa.id)[0]
    tarefa.titulo = novaTarefa.titulo
    console.log(novaTarefa)
    }
  },
  actions: {
  },
  modules: {
  }
})
