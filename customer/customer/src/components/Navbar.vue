<template>
    <nav>

        <v-toolbar color="purple darken-3">
          
            <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
            <v-toolbar-title>
            
                <v-layout row wrap class="py-4" justify-space-around>
                  <v-flex xs12 sm6 md4>
                <div class="text-h6 font-weight-normal white--text"></div>
                  </v-flex>
               <!--<v-flex xs6 md3>
                <v-btn class="purple darken-3"><v-icon class="white--text">mdi-magnify</v-icon></v-btn>
               </v-flex>-->
                <!--<v-container>
                    <v-col
                    cols="12"
                    sm="6"
                    md="3">
          <v-text-field
            label="Solo"
            placeholder="Placeholder"
            solo
          ></v-text-field>
        </v-col>   
                </v-container>    -->
             
                
                  <v-flex xs12 sm6 md4>
                    
                <!--<v-btn class="purple darken-3 white--text caption size">CART TOTAL: 0</v-btn>-->
                    
                  </v-flex>
                </v-layout>
              
              
            </v-toolbar-title> 
          
        </v-toolbar>
        <div class="overflow-hidden">
    
    <v-bottom-navigation
      v-model="value"
      :input-value="active"
      :value="value"
      color="indigo"
      absolute
      class="purple darken-3"
    >
      <v-btn>
        <span class="white--text">Home</span>

        <v-icon class="white--text">mdi-home</v-icon>
      </v-btn>

      <v-btn>
        <span class="white--text">Search</span>

        <v-icon class="white--text">mdi-magnify</v-icon>
      </v-btn>

      <v-btn>
        <span class="white--text">Account</span>

        <v-icon class="white--text">mdi-account</v-icon>
      </v-btn>

      <v-btn>
        <span class="white--text">Cart</span>

        <v-icon class="white--text">mdi-cart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>

        <v-navigation-drawer app v-model="drawer" color="purple darken-3">
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">
                            Dashboard
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>



<script>
export default {
    name:'Navbar',
    data(){
        return{
            drawer: false,
            value:1
        }
    },
}
</script>

<style>
.size {
  height:auto;
  width:auto;
}

</style>