<template>
      <v-card>
          <div>

<!--<v-toolbar flat color="amber">
            <v-toolbar-title>
                <span class="font-weight-light white--text">Customers</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
        <v-icon class="white--text">mdi-account-plus</v-icon>
      </v-btn>
        </v-toolbar>-->

    <v-toolbar
      color="amber"
      dark
      flat
    >
      <v-toolbar-title>Partner Order List</v-toolbar-title>

      <v-spacer></v-spacer>


      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="link in links" :key="link.text" router :to="link.route"> {{link.text}}</v-tab>

        </v-tabs>
      </template>
    </v-toolbar>


    <v-tabs-items v-model="tab">
      <!--<v-tab-item
        v-for="item in items"
        :key="item"
      >
        
      </v-tab-item>-->
    </v-tabs-items>

          </div>
  </v-card>
  
</template>

<script>
export default {
    data () {
      return {
        tab: null,
        drawer: false,
        links:[
            {text:'Upcoming DC',route:'/PartnerOrderList'},
            {text:'Delivered to DOST',route:'/PartnerOrderList/deliveredtoDOST'},
            {text:'Delivered to Partner',route:'/PartnerOrderList/deliveredtoPARTNER'},
        ],
        
        //text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
}
</script>