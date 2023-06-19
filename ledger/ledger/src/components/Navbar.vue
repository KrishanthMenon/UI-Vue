<template>
    <nav>
        
        <v-toolbar flat color="amber">
            <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="font-weight-light white--text">Partner</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        

        <!--<div class="overflow-hidden">
    
    <v-bottom-navigation
      v-model="value"
      :input-value="active"
      :value="value"
      color="indigo"
      absolute
      class="amber"
    >
      <v-btn>
        <span class="white--text">Home</span>

        <v-icon class="white--text">mdi-home</v-icon>
      </v-btn>

      <v-btn>
        <span class="white--text">Training</span>

        <v-icon class="white--text">mdi-school</v-icon>
      </v-btn>

      <v-btn>
        <span class="white--text">Orders</span>

        <v-icon class="white--text">mdi-cart</v-icon>
      </v-btn>

      <v-btn @click:stop="dialog" v-for="item in items" :key="item.text" router :to="item.route">
        <span class="white--text">Customers</span>

        <v-icon class="white--text">mdi-account-group</v-icon>
      </v-btn>

      <v-btn>
        <span class="white--text">Earnings</span>

        <v-icon class="white--text">mdi-currency-inr</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>-->

        <v-navigation-drawer app v-model="drawer" color="white">
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            
                            <v-card max-height="100" class="amber" tile="">
                 <v-row align="start">
                    <v-col class="shrink">
                         <v-img src="https://partnerpwa.staging.frendy.in/img/user.f9ca9ef6.png" max-width="85" class="ml-2"></v-img>
                    </v-col>
                    <v-col>
                         <v-card-title class="px-0 pb-0">ABC</v-card-title>
                         <v-list-item-content class="px-0 py-0">Logged In</v-list-item-content>
                     </v-col>
                 </v-row>
        </v-card>


                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  
                  <v-list-tile-action>
                    <v-icon class="pl-2 pr-4">mdi-monitor-dashboard</v-icon>
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
                    <v-icon class="pl-2 pr-4">mdi-cart-arrow-down</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Order for Customer
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>

              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-2 pr-4">mdi-shopping-search</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <router-link to="/PartnerOrderList" class="black--text" style="text-decoration: none; color: inherit;">
                              Partner Order List
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
                    <v-icon class="pl-2 pr-4">mdi-truck-delivery</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Order Item Returns
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>

              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-2 pr-4">mdi-book-open-variant</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <router-link to="/MySalesEarnings" class="black--text" style="text-decoration: none; color: inherit;">
                              My Sales & Earnings
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
                    <v-icon class="pl-2 pr-4">mdi-format-list-text</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            DC List
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>

              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-2 pr-4">mdi-shield-check-outline</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Payment Submit
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>

              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-2 pr-4">mdi-share-variant-outline</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Creatives
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>

              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-2 pr-4">mdi-handshake-outline</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Partner Support
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>

              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-2 pr-4">mdi-lightbulb-on</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Learn More
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>

              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-2 pr-4">mdi-account</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            View Profile
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>

              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-2 pr-4">mdi-offer</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Monsoon Incentive
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>

              <div class="mx-0 my-0">
                <v-card flat @click.stop="dialog = true" max-width="600" max-height="50" class="pt-3">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="pl-2 pr-4">mdi-logout</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Sign Out
                        </v-list-tile-title><br><br>
                    </v-list-tile-content>
                </v-list-tile>
                </v-card>
              </div>
              <br>
              <div class="ml-5">
              <v-btn class="pl-2" color="amber" max-width="200">&nbsp;Call Partner Support</v-btn>
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
              {text: 'Customers', route: '/CustomerSection'},
            ],
        }
    },
}
</script>