<template>
  <span>
    <!-- <v-system-bar v-if="config.showLocation" app color="primary" dense dark>
      <v-btn right x-small class="secondary primary--text">
        <v-icon>mdi-map-marker</v-icon>Location
      </v-btn>
      {{ current_location }}
    </v-system-bar>-->
    <v-navigation-drawer
      app
      v-model="config.drawer"
      disable-resize-watcher
      color="primary"
      dense
      dark
      :key="forceRenderNavigation"
      @click="startNavTour"
    >
      <v-list-item>
        <v-list-item-content>
          <div v-if="$store.getters.isAuthenticated" class="mx-auto">
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="5">
                <v-img
                  v-if="$store.state.User.image"
                  class="justify-center rounded-circle grey lighten-4"
                  eager
                  aspect-ratio="1"
                  :height="100"
                  :max-height="100"
                  :width="100"
                  :max-width="100"
                  style="align-self: center; margin: auto; border: 4px double"
                  :src="$store.state.User.image"
                  outlined
                  large
                  fab
                ></v-img>

                <v-img
                  v-else
                  class="justify-center rounded-circle grey lighten-4"
                  eager
                  aspect-ratio="1"
                  :height="100"
                  :max-height="100"
                  :width="100"
                  :max-width="100"
                  style="
                    align-self: center;
                    margin: auto;
                    border: 4px double;
                    display: inline-block;
                  "
                  src="@/assets/user.png"
                  outlined
                  large
                  fab
                >tsdsfdfdfsdfs</v-img>
              </v-col>
              <v-col class="text-center" cols="7">
                <v-list-item-title class="title d-inline-block">
                  {{ $store.state.User.firstName }}
                </v-list-item-title>
                <v-list-item-subtitle class="font-weight-black">
                  <v-icon class="font-weight-black pb-1" small
                    >mdi-phone</v-icon
                  >
                  {{ $store.state.User.mobile }}
                </v-list-item-subtitle>
              </v-col>

              <!-- <br /> -->
              <!-- <span color="primary" text>{{$store.state.User.firstName}}</span> -->
            </v-row>
          </div>
          <div v-else>
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="5">
                <v-img
                  class="justify-center rounded-circle primary"
                  eager
                  aspect-ratio="1"
                  :height="100"
                  :max-height="100"
                  :width="100"
                  :max-width="100"
                  style="align-self: center; margin: auto; border: 4px double"
                  src="@/assets/logo.png"
                  outlined
                  large
                  fab
                ></v-img>
              </v-col>
              <v-col class="text-center" cols="7">
                <v-list-item-title class="title">Guest</v-list-item-title>
              </v-col>
            </v-row>
            <!-- <br /> -->
            <!-- <span color="primary" text>Guest</span> -->
          </div>
        </v-list-item-content>
        <!-- <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>subtext</v-list-item-subtitle>
        </v-list-item-content>-->
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <template v-for="(item, index) in navigationData.drawerMenus">
          <v-list-item :key="index" :to="{ name: item.href }" exact>
            <v-list-item-icon>
              <v-icon color="yellow">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <span>{{ $t(`${item.title}`) }}</span>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block disabled>{{ $store.getters.appVersion }}</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar fixed color="primary" class="mb-14" dense dark>
      <!-- use only one for tour steps id,data-v-step,class -->
      <v-app-bar-nav-icon
        data-v-step="0"
        class="step-0"
        id="step-0"
        v-if="config.showDrawerMenu"
        @click="config.drawer = !config.drawer"
      ></v-app-bar-nav-icon>
      <v-btn icon @click="$router.back()" v-if="configfeed.showBackButton">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <!-- <v-spacer class="hidden-md-and-up"></v-spacer> -->
      <v-toolbar-title>{{ $t(`${config.title}`) }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn
          icon
          v-if="hasHistory() && !configfeed.showBackButton"
          @click="hasHistory() ? $router.back() : $router.push('/')"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn> -->
      <!-- <TopDeliverToComponent v-if="config.showSelectPartner" /> -->

      <!-- use only one for tour steps id,data-v-step,class -->
      <v-btn data-v-step="1" class="step-1" id="step-1" small color="primary" to="/checkout"
        >Cart Total:{{ this.$store.state.cart.carttotal }}</v-btn
      >
      <!-- <div class="pl-6 pr-5">
        <cart-icon v-show="config.showCartIcon" :config="configfeed" />
      </div> -->

      <template v-if="configfeed.showSearch" v-slot:extension>
        <!-- use only one for tour steps id,data-v-step,class -->
        <v-text-field
          style="background: white"
          v-model="searchproduct"
          light
          :placeholder="$t('search.your.favourite.product')"
          outlined
          dense
          filled
          hide-details
          data-v-step="2"
          class="step-2"
          id="step-2"
          append-icon="mdi-magnify"
          @change="sendSearchData(searchproduct)"
        >
          <template v-slot:append>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  small
                  icon
                  color="primary"
                  depressed
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-magnify </v-icon>
                </v-btn>
              </template>
            </v-menu>
          </template>
        </v-text-field>
      </template>
    </v-app-bar>
    <div class="mb-10">
    </div>
    <div v-if="configfeed.showSearch" class="pb-10"></div>
    </span>
</template>

<script>
import { mapState } from "vuex";
//import CartIcon from "@/components/CartIcon";

export default {
  name: "AppNavigation",
  components: {
    // CartIcon,
  },
  props: {
    datafeed: [Array, Boolean],
    apisource: [Object, Boolean],
    configfeed: [Object, Boolean],
    appTourSteps:[Array,Object],
  },
  data() {
    return {
      config: {
        showDrawerMenu: true,
        showCartIcon: true,
        showCartAmount: true,
        showBackButton: false,
        drawer: false,
        showProfileinMenu: false,
        showLocation: false,
        showSelectPartner: true,
        showSearch: false,
        title: "Frendy",
      },
      navigationData: {
        drawerMenus: [],
      },
      current_location: " Please select location",
      showBack: true,
      forceRenderNavigation: 1,
      searchproduct: "",    
    };
  },
  // beforeMount() {
  //   this.updateMenus();
  // },
  mounted() {
    console.log(
      "this.forceRenderNavigation navigation",
      this.forceRenderNavigation
    );
    this.updateMenus();
    this.setupInitialData("navigationData", "navigationData", undefined);

  },
  computed: mapState(["User"]),
  methods: {
    sendSearchData(searchproduct) {
      console.log("Search............", searchproduct);
      // this.$emit("productSearch", this.searchproduct);
      this.$router.push("/search?searchproduct=" + searchproduct);
    },
    hasHistory() {
      console.log("router history ", window.history.length);
      // let currentLength = window.history.length;
      // history.go(-currentLength);
      return window.history.length > 2;
    },
    updateMenus() {
      this.navigationData.drawerMenus = [];
      this.navigationData.drawerMenus.push({
        title: "home",
        href: "Home",
        icon: "mdi-home-outline",
      });
      this.navigationData.drawerMenus.push({
        title: "categories.page",
        href: "Category",
        icon: "mdi-tshirt-crew-outline",
      });
      if (this.$store.getters.isAuthenticated) {
        this.navigationData.drawerMenus.push({
          title: "my.orders.page",
          href: "UserOrders",
          icon: "mdi-package-variant-closed",
        });
      }
      this.navigationData.drawerMenus.push({
        title: "wishlist.page",
        href: "WishList",
        icon: "mdi-heart-outline",
      });
      this.navigationData.drawerMenus.push({
        title: "current.offers",
        href: "AllOffers",
        icon: "mdi-ticket-percent",
      });

      this.navigationData.drawerMenus.push({
        title: "learn.more",
        href: "LearnMore",
        icon: "mdi-lightbulb-on-outline",
      });
      // this.navigationData.drawerMenus.push({
      //   title: "faqs.page",
      //   href: "FaqTopic",
      //   icon: "mdi-help-circle-outline",
      // });
      if (this.$store.getters.isAuthenticated) {
        this.navigationData.drawerMenus.push({
          title: "account",
          href: "Account",
          icon: "mdi-shield-account-outline",
        });
        this.navigationData.drawerMenus.push({
          title: "sign.out.btn",
          href: "Logout",
          icon: "mdi-logout",
        });
      } else {
        this.navigationData.drawerMenus.push({
          title: "sign.in.page",
          href: "Landing",
          icon: "mdi-login",
        });
      }

      this.navigationData.drawerMenus.push({
        title: "search",
        href: "Search",
        icon: "mdi-magnify",
      });
      // this.navigationData.drawerMenus.push({
      //   title: "support",
      //   href: "TicketList",
      //   icon: "mdi-message-text",
      // });

      // this.navigationData.drawerMenus.push({
      //   title: "search",
      //   href: "Search",
      //   icon: "mdi-magnify-outline"
      // });
    },
  },
  watch: {
    User: {
      handler(value) {
        value;
        console.log("UserLoggin in", value.userId);
        // if (value.userId > 0) {
        //   }
        this.forceRenderNavigation += 1;
        this.updateMenus();
        // console.log(this.forceRenderNavigation);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style >
/* .custom-placeholer-color input::placeholder {
  color: black !important;
  opacity: 1;
}

.custom-label-color .v-label {
  color: black;
  opacity: 1;
} */

.custom-placeholer-color input,
.custom-label-color input {
  color: black !important;
}
</style>
