<template>
<div>
  
<v-toolbar flat color="indigo darken-4">
            <v-toolbar-title>
                <span class="font-weight-light white--text">Telemetry</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
<!--<div class="mx-2">
<v-flex xs12 class="mx-1">
        <v-text-field
      label="Search for vehicles"
      solo
      append-icon="mdi-magnify"
    >
        </v-text-field>
        </v-flex></div>-->
        <!--<v-flex xs12>
        <v-card
    class="mx-auto"
    max-width="500"
    height="100"
  >
    <v-card-text>
      <div class="font-italic">Please enable/disable</div>
        <v-switch
      v-model="switch2"
      inset
      label="To connect with new customers"
      class="text-subtitle-1"
      color="amber"
    ></v-switch>
    </v-card-text>
    
  </v-card>
        </v-flex>-->

    <!--<v-sheet
    class="mx-auto"
    elevation="8"
    max-width="900"
  >-->
  <div class="mx-2">
  <!--<span class="font-weight-medium">TO BE KNOWN</span>
    <v-slide-group
      v-model="model"
    >
      <v-slide-item>
        <v-card
          :color="active ? undefined : 'amber darken-3'"
          class="ma-4"
          height="120"
          width="200"
          @click.stop="dialog = true"
        >
        <v-card-text class="white--text">
          <span class="font-weight-bold">ABOUT ></span><br>
          Total Customers: 20 <br>
          Total Sales: ₹300
        </v-card-text>

          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>

      <v-slide-item>
        <v-card
          :color="active ? undefined : 'amber darken-2'"
          class="ma-4"
          height="120"
          width="200"
          @click.stop="dialog = true"
        >
        <v-card-text class="white--text">
          <span class="font-weight-bold">ACTIVE CUSTOMERS ></span><br>
          Total Customers: 10 <br>
          Total Sales: ₹200
        </v-card-text>

          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="40"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>

      <v-slide-item>
        <v-card
          :color="active ? undefined : 'amber darken-1'"
          class="ma-4"
          height="120"
          width="200"
          @click="toggle"
        >
        <v-card-text class="white--text">
          <span class="font-weight-bold">INACTIVE CUSTOMERS ></span><br>
          Total Customers: 8 <br>
          Total Sales: ₹50
        </v-card-text>

          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>

      <v-slide-item>
        <v-card
          :color="active ? undefined : 'amber lighten-1'"
          class="ma-4"
          height="120"
          width="200"
          @click.stop="dialog = true"
        >
        <v-card-text class="white--text">
          <span class="font-weight-bold">BROKEN CUSTOMERS ></span><br>
          Total Customers: 5 <br>
          Total Sales: ₹40
        </v-card-text>

          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>

    </v-slide-group>-->
  <!--</v-sheet>-->

 <!-- <v-flex xs12>
        <v-card v-for="link in links" :key="link.text" router :to="link.route"
    class="mx-auto"
    max-width="500"
    height="75"
    @click.stop="dialog = true"
  >
    <v-card-text>
      <div>{{link.text}} <span class="font-weight-bold red--text"></span></div>
      Click for more<span class="font-weight-bold red--text"> ></span>
    </v-card-text>
  </v-card>
        </v-flex>  -->

  <!--<v-flex xs12>
        <v-card
    class="mx-auto"
    max-width="500"
    height="75"
    @click.stop="dialog = true"
  >
    <v-card-text>
      <div>Mrs. B <span class="font-weight-bold red--text">></span></div>
      Share the application<span class="font-weight-bold red--text"> ></span>
    </v-card-text>
  </v-card>
        </v-flex> 

      <v-flex xs12>
        <v-card
    class="mx-auto"
    max-width="500"
    height="75"
    @click.stop="dialog = true"
  >
    <v-card-text>
      <div>Ms. C <span class="font-weight-bold red--text">></span></div>
      Share the application<span class="font-weight-bold red--text"> ></span>
    </v-card-text>
  </v-card>
        </v-flex>   
        
      <v-flex xs12>
        <v-card
    class="mx-auto"
    max-width="500"
    height="75"
    @click.stop="dialog = true"
  >
    <v-card-text>
      <div>Mr. D <span class="font-weight-bold red--text">></span></div>
      Share the application<span class="font-weight-bold red--text"> ></span>
    </v-card-text>
  </v-card>
        </v-flex> -->
<br><br>
        <v-layout row wrap justify-space-between class="steps">
      <v-flex xs4 md3 class="mx-5">
        <v-card
    max-width="250"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold">Tire Pressure <span class="font-weight-bold red--text"></span></div>
      <br><div class="text-h3 font-weight-bold red--text" align="center"> - </div>
    </v-card-text>
  </v-card>
        </v-flex> 

    <v-flex xs4 md3 class="mx-5">
        <v-card
    max-width="250"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold" align="center">Battery Level <span class="font-weight-bold red--text"></span></div>
      <br><div class="text-h3 font-weight-bold red--text" align="center">-</div>
    </v-card-text>
  </v-card>
        </v-flex>
</v-layout>
<br><br>

<!--<div class="font-weight-medium"><br>Details of all Orders</div><br>-->
<br>
<v-layout row wrap justify-space-between class="pl-3 pr-3">
       

    <v-flex xs6 md2 class="mx-auto">
        <v-card
    max-width="300"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold" align="center">Service Deadline <span class="font-weight-bold red--text"></span></div>
      <br><div class="text-h3 font-weight-bold red--text" align="center">-</div>
    </v-card-text>
  </v-card>
        </v-flex>

        


</v-layout>

<!--<v-flex xs12 md6 class="mx-16">
        <v-card
    max-width="250"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold" align="center">Service Deadline <span class="font-weight-bold red--text"></span></div>
      <br><div class="text-h3 font-weight-bold red--text" align="center">-</div>
    </v-card-text>
  </v-card>
        </v-flex>-->


  </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        switch2: false,
        model: null,
        dialog: false,
        links: [
          //{text: 'Home', route: '/'},
          //{text: 'Duke 390', route: '/CustomerSection/mr.A'},
          //{text: 'NS 200', route: '/CustomerSection/mrs.B'},
        ]
      }
    },
    components: {
    },
  }
</script>

<style>
.steps >:last-child {
  flex-grow: 0 !important;
}
</style>
