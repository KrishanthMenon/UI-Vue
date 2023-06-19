<template>
    <nav>
        
        <v-card>
    <v-toolbar
      color="amber"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Partner Order List</v-toolbar-title>

      <v-spacer></v-spacer>


      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
      </v-tab-item>
    </v-tabs-items>
  </v-card>
    </nav>
    

</template>

<script>
export default {
    name:'Navbar',
    data(){
        return{
            drawer: false,
            tab: null,
            items: [
                'Upcoming DC', 'Delivered to DOST', 'Delivered to Partner'
            ],
        }
    }
}
</script>