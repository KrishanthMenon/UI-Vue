<template>
  <v-app>
    

    <v-main>
      <Navbar/>
      <Home/>
    </v-main>

  </v-app>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',

  components: {
    Home,
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
