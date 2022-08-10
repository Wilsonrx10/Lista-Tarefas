<template>
    <div>
        <v-list-item :class="{'light-blue lighten-4':tarefa.concluido}" @click="mudar_valor()">
            <template v-slot:default="{}">
                <v-list-item-action>
                    <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title :class="{'text-decoration-line-through':tarefa.concluido}">
                        {{tarefa.titulo}}
                    </v-list-item-title>
                </v-list-item-content>

                <!-- <v-list-item-action>
                    <v-btn icon @click.stop="remover_tarefas(tarefa.id)">
                        <v-icon color="red lighten-1">mdi-delete</v-icon>
                    </v-btn>
                </v-list-item-action> -->

                <TarefaMenu :tarefa="tarefa" />

            </template>
        </v-list-item>
        <v-divider></v-divider>
    </div>
</template>

<script>
import TarefaMenu from '../tarefas/TarefaMenu.vue'
export default {
 components: {
    TarefaMenu
 },
 props:['tarefa'],
 data:function() {
    return {
        tarefaR: this.tarefa
    }
 },
 methods:{
    mudar_valor() {
     this.tarefaR.concluido = !this.tarefaR.concluido
    },
    remover_tarefas(id) {
      this.$store.commit("remover",id)
    }
 }
}
</script>

<style>
</style>