<template>
  <v-dialog
      v-model="dialog"
      max-width="390"
    >
      <v-card>
        <v-card-title class="text-h5">
         Excluir
        </v-card-title>

        <v-card-text>
          <p>tens certeza que desejas eliminar ?</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            text
            @click="$emit('fechaModal')"
          >
            cancelar
          </v-btn>

          <v-btn
            color="red"
            text
            @click="handlerExcluir()"
          >
            Excluir
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
    methods: {
      handlerExcluir() {
        this.$store.commit('excluir_tarefa', this.tarefa.id);
        this.$emit('fechaModal');
      }
    }
  }
</script>
<style>

</style>