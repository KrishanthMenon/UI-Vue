<template>
<v-main>

<!--<v-row>
    &emsp;&nbsp;
    <div>
      &emsp;  <v-container
    fluid
    class="pa-0"
  >
  <div class="my-2">
            <v-btn
              x-large
              color="success"
              dark
              fab
              class="mx-auto padding"
            >
              <v-icon>&nbsp;&nbsp;mdi-new-box</v-icon>
            </v-btn>
          </div>
          <v-text class="caption">&nbsp;New Arrivals</v-text>
        </v-container>
    </div>
    &emsp;&emsp;
    <div>
       &emsp; <v-container
    fluid
    class="pa-0"
  >
  <div class="my-2">
            &emsp;<v-btn
              x-large
              color="success"
              dark
              fab
              class="mx-auto padding"
            >
              <v-icon>mdi-offer</v-icon>
            </v-btn>
          </div>
          <v-text class="caption">&emsp;&nbsp;&nbsp;&nbsp;&emsp;Offers</v-text>
        </v-container>
    </div>

  &emsp;&emsp;&emsp;
    <div>
        &emsp;<v-container
    fluid
    class="pa-0"
  >
  <div class="my-2">
            &nbsp;&nbsp;<v-btn
              x-large
              color="success"
              dark
              fab
              class="mx-auto padding"
            >
              <v-icon>mdi-weather-snowy-heavy</v-icon>
            </v-btn>
          </div>
          <v-text class="caption">Winter Specials</v-text>
        </v-container>
    </div>

&emsp;&emsp;&emsp;
    <div>
        &emsp;<v-container
    fluid
    class="pa-0"
  >
  <div class="my-2">
            &nbsp;&nbsp;&nbsp;<v-btn
              x-large
              color="success"
              dark
              fab
              class="mx-auto padding"
            >
              <v-icon>mdi-food</v-icon>
            </v-btn>
          </div>
          <v-text class="caption">Food & Beverages</v-text>
        </v-container>
    </div>

&emsp;
    <div>
        &emsp;<v-container
    fluid
    class="pa-0"
  >
  <div class="my-2">
            &emsp;&nbsp;&nbsp;<v-btn
              x-large
              color="success"
              dark
              fab
              class="mx-auto padding"
            >
              <v-icon>mdi-shopping</v-icon>
            </v-btn>
          </div>
          <v-text class="caption">&emsp;&emsp;&emsp;Grocery</v-text>
          
        </v-container>
        
    </div>
</v-row><br>-->
<!--story-->
<br>
<v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          dark
          v-bind="attrs"
          v-on="on"
          fab
          x-large
          role="menuitem"
          border-color="white"
        >
          Story
        </v-btn>
        <spacer></spacer>
      </template>
      <!--<v-card>
        <v-toolbar
          dark
          color="red"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Stories</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Next
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>-->
        <span @click="dialog=false">
        <v-card class="pa-2" tile="" v-model="dialog">
                 <v-row align="start">
                    <v-col class="shrink">
                        <v-card-title class="title font-weight-normal amber--text">
                            Offer!! <br>Buy1 Get1 Free
                            </v-card-title>
                         <v-img src="data:image/jpeg;base64,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" max-width="500" class="ml-3"></v-img>
                    </v-col>
                    <v-col>
                         <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeLdg-hgr-4Drs56t3_7J_wGXtLrRyyQRrQ&usqp=CAU" max-width="1000" class="ml-3"></v-img>
                     </v-col>
                 </v-row>
        </v-card>
        </span>

      <!--</v-card>-->
    </v-dialog>

    

<!--story end-->

&emsp;
<!--story-->
<br>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          class="fb-btn"
          dark
          v-bind="attrs"
          v-on="on"
          fab
          x-large
        >
          Story2
        </v-btn>
      </template>
      <!--<v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
      class="mb-16"
    >
      <v-card
        color="white"
        dark
      >
          <v-progress-linear
      color="red lighten-2"
      buffer-value="0"
      stream
    ></v-progress-linear>
      </v-card>
    </v-dialog>-->
      <!--<v-card>
        <v-toolbar
          dark
          color="red"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Stories</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Next
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>-->


        <span @click="dialog=false">

        <v-card class="pa-2" tile="" v-model="dialog">
                 <v-row align="start">
                    <v-col class="shrink">
                        <v-card-title class="title font-weight-normal amber--text">
                            Offer!! <br>Buy1 Get1 Free
                            </v-card-title>
                         <v-img src="data:image/jpeg;base64,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" max-width="500" class="ml-3"></v-img>
                    </v-col>
                    <v-col>
                         <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeLdg-hgr-4Drs56t3_7J_wGXtLrRyyQRrQ&usqp=CAU" max-width="1000" class="ml-3"></v-img>
                     </v-col>
                 </v-row>
        </v-card>
        </span>
      <!--</v-card>-->
    </v-dialog>
  </v-row>
<!--story end-->
<br>
<div class="text-center">
    <!--<v-btn
      :disabled="dialog"
      :loading="dialog"
      class="white--text"
      color="purple darken-2"
      @click="dialog = true"
    >
      Start loading
    </v-btn>-->
  </div>

<Dashboard/>
<Banner/>
</v-main>
</template>

<script>
import Dashboard from './Dashboard.vue'
import Banner from './Banner.vue';
export default {
    name: "Home",
    components:{
      Dashboard,
      Banner,
    },
     data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    watch: {
      dialog (val) {
        if (!val) return
        setTimeout(() => (this.dialog = false), 4000)
      },
    },
}
</script>

<style>
  .fb-btn.v-btn--outlined {
    border: thin solid yellow ;
  }
  html { overflow-y: auto }
</style>
