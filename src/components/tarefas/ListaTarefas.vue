<template>
    <div>
        <drop-list :items="tarefasComputada" @reorder="$event.apply(items1)">
            <template v-slot:item="{ item, reorder }">
                <drag :key="item.id" :data="item">

                    <Tarefas_filho
                    :tarefa="item"
                    style="background-color: white"
                    :style="reorder ? { borderLeft: '2px solid #1976D2', marginLeft: '-2px' } : {}"
                    />
                    <v-divider />
                </drag>
            </template>
        </drop-list>
    </div>
</template>

<script>
import {Drag,DropList} from "vue-easy-dnd";
import Tarefas_filho from "./Tarefas_filho.vue";
export default {
    components: {
    Drag,
    DropList,
    Tarefas_filho
},
    computed: {
        tarefasComputada() {
            return this.$store.state.tarefas
        }
    }
}
</script>

<style>

</style>