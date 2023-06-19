<template>
  <v-app>
    
    <v-main>
      <Navbar/>
      <v-content class="mx-4 mb-4">
      
      <Home/>
      </v-content>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue';

export default {
  name: 'App',

  components: {
    Navbar,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
