<template>
  <div>
   <!------Barra de Adicionar------>
   <div class="adicionar">
    <v-col
          cols="12"
        >
          <v-text-field
            v-model="campoInput"
            label="Adicionar uma tarefa"
            outlined
            clearable
            @keyup.enter="Adicionar_tarefa"
          ></v-text-field>
        </v-col>
   </div>

  <ListaTarefas/>
  </div>
</template>

<script>
import ListaTarefas from '@/components/tarefas/ListaTarefas.vue'
export default {
  name: "Tarefa_principal",
  data:function() {
    return {
     campoInput:null
    }
  }, 
  components: {
    ListaTarefas
},
  methods: {
    Adicionar_tarefa() {
      this.$store.commit("Adicionar_tarefa",this.campoInput)
      this.campoInput = null
   }
  }
}
</script>