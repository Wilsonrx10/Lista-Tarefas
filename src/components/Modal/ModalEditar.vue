<template>
  <v-dialog
      v-model="dialog"
      max-width="390"
    >
      <v-card>
        <v-card-title class="text-h5">
          Editar tua Tarefa ?
        </v-card-title>

        <v-card-text>
          <v-text-field
            label="Informe o novo titulo"
            outlined
            v-model="titulo"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red"
            text
            @click="$emit('fechaModal')"
          >
            cancelar
          </v-btn>

          <v-btn
            color="primary"
            text
            @click="handlerEditar()"
          >
            Editar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props:["tarefa"],
    data () {
      return {
        dialog: true,
        titulo:null
      }
    },
    created(){
      this.titulo = this.tarefa.titulo
    },
    methods: {
      handlerEditar() {
        let novaTarefa = {
          titulo: this.titulo,
          id: this.tarefa.id
        }
        this.$store.commit('atualizar_tarefa',novaTarefa);
        this.$emit('fechaModal');
      }
    }
  }
</script>
<style>

</style>