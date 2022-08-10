<template>
  <v-app id="inspire">
    <v-navigation-drawer
     v-model="drawer"
      app
    >
     <v-img
     src="https://picsum.photos/1920/1080?random"
     gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
     dark
     class="pt-5 text-center"
     >

       <v-avatar
       size="100"
       >
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>

       <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Aplicacção
          </v-list-item-title>
          <v-list-item-subtitle>
            Tarefas
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
     </v-img>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      app
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>App de Tarefas {{$store.state.version}}</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>


    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: true,
       items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard'},
          { title: 'Tarefas', icon: 'mdi-image', to:'/tarefa' },
          { title: 'Sobre', icon: 'mdi-help-box', to:'/sobre' },
        ],
        right: null, 
      }),
  }
</script>