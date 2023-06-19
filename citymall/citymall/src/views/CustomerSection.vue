<template>
<div>
  
<v-toolbar flat color="amber">
            <v-toolbar-title>
                <span class="font-weight-light white--text">Customers</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
        <v-icon class="white--text">mdi-account-plus</v-icon>
      </v-btn>
        </v-toolbar>
<div class="mx-2">
<v-flex xs12 class="mx-1">
        <v-text-field
      label="Search for customers"
      solo
      append-icon="mdi-magnify"
    >
        </v-text-field>
        </v-flex></div>
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
  <span class="font-weight-medium">KNOW YOUR CUSTOMERS</span>
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

    </v-slide-group>
  <!--</v-sheet>-->

  <v-flex xs12>
        <v-card v-for="link in links" :key="link.text" router :to="link.route"
    class="mx-auto"
    max-width="500"
    height="75"
    @click.stop="dialog = true"
  >
    <v-card-text>
      <div>{{link.text}} <span class="font-weight-bold red--text">></span></div>
      Share the application<span class="font-weight-bold red--text"> ></span>
    </v-card-text>
  </v-card>
        </v-flex>  

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
<br><br><br>
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
          {text: 'Mr. A', route: '/CustomerSection/mr.A'},
          {text: 'Mrs. B', route: '/CustomerSection/mrs.B'},
          {text: 'Ms. C', route: '/CustomerSection/ms.C'},
          {text: 'Mr. D', route: '/CustomerSection/mr.D'},
        ]
      }
    },
    components: {
    },
  }
</script>
