<template>
    <nav>
        
        <v-toolbar flat color="indigo darken-4">
            <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="font-weight-dark white--text">Motorcycle Safety & Anti-Theft System</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        

        <div class="overflow-hidden">
    
    <v-bottom-navigation
      v-model="value"
      :input-value="active"
      :value="value"
      color="indigo"
      fixed
      class="indigo darken-4"
    >

      <v-btn v-for="item in items" :key="item.text" router :to="item.route">
        <span class="white--text">{{item.text}}</span>

        <v-icon class="white--text">{{item.icon}}</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </div>

        <v-navigation-drawer app v-model="drawer" color="white">
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            
                            <v-card max-height="310" max-width="300" class="indigo darken-4" tile="">
                 <v-row align="start">
                    <v-col class="shrink">
                         <v-img src="https://partnerpwa.staging.frendy.in/img/user.f9ca9ef6.png" max-width="85" class="ml-2"></v-img>
                    </v-col>
                    <v-col>
                         <v-card-title class="px-0 pb-0 white--text">Krishanth</v-card-title>
                         <v-list-item-content class="px-0 py-0 white--text">Logged In</v-list-item-content>
                     </v-col>
                 </v-row>
        </v-card>


                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
              <br>
              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  
                  <v-list-tile-action>
                    <v-icon class="pl-3 pr-4">mdi-monitor-dashboard</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <router-link to="/dashboard" class="black--text" style="text-decoration: none; color: inherit;">
                              Dashboard
                            </router-link>
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>

              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-3 pr-4">mdi-book-open-variant</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Learn More
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>

              <!--<div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-2 pr-4">mdi-motorbike</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Previous Connections
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>-->

              
              <div class="mx-0 my-0">
                <v-card flat @click.stop="dial = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-3 pr-4">mdi-logout</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                          <v-dialog
                          v-model="dial"
                          persistent
                          max-width="290"
                          >
                          <template v-slot:activator>
    
                            Sign Out
                            </template>
                            <v-card>
                              <v-card-title class="text-h6 grey--text">
                                SIGN OUT
                              </v-card-title>
                              <v-card-text class="text-overline black--text">Are you sure?</v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="red darken-1"
                                  text
                                  @click="dial = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  color="green darken-1"
                                  text
                                  @click="dial = false"
                                >
                                  OK
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                            </v-list-tile-title><br><br>
                        </v-list-tile-content>
                      </v-list-tile>
                      </v-card>
                      </div>
                      <br>
                      <div class="ml-12">
                      <v-btn class="pl-2" color="lime" max-width="200">&nbsp;Call Helpline</v-btn>
                      </div>
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
            dialog: false,
            dial: false,
            links:[
              /*{ icon: 'mdi-monitor-dashboard',text: 'Dashboard', route: '/dashboard'},
              { icon: 'mdi-cart-arrow-down',text: 'Order for Customer', route: '/OrderforCustomer'},
              { icon: 'mdi-shopping-search',text: 'Partner Order List', route: '/PartnerOrderList'},
              { icon: 'mdi-truck-delivery',text: 'Order Item Returns', route: '/OrderItemReturns'},
              { icon: 'mdi-book-open-variant',text: 'MySales & Earning', route: '/MySales&Earning'},
              { icon: 'mdi-format-list-text',text: 'DC List', route: '/DCList'},
              { icon: 'mdi-shield-check-outline',text: 'Payment Submit', route: '/PaymentSubmit'},
              { icon: 'mdi-share-variant-outline',text: 'Creatives', route: '/Creatives'},
              { icon: 'mdi-handshake-outline',text: 'Partner Support', route: '/PartnerSupport'},
              { icon: 'mdi-lightbulb-on',text: 'Learn More', route: '/LearnMore'},
              { icon: 'mdi-account',text: 'View Profile', route: '/ViewProfile'},
              { icon: 'mdi-offer',text: 'Monsoon Incentive', route: '/MonsoonIncentive'},
              { icon: 'mdi-logout',text: 'SignOut', route: '/SignOut'},*/
            ],
            items:[
              {icon: 'mdi-map-marker', text: 'Location', route: '/'},
              {icon: 'mdi-motorbike', text: 'Telemetry', route: '/About'},
            ],
        }
    },
}
</script>

<style>
html { overflow-y: auto }
</style>