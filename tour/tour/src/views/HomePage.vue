<template>

  <v-container class="pa-0">
    <!-- <dynamic-screen :screenname="'home'"></dynamic-screen> -->
    <div class="pb-3">
      <HeaderNavigation :app-tour-steps="appTourSteps" :configfeed="headerConfig"></HeaderNavigation>
    </div>
    <!-- <Card></Card> -->

    <div class="text-center">
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-img src="@/assets/App-Popup1.png" height="30%">
            <div justify="end" align="end">
              <v-btn v-on:click="dialog = !dialog" class="" small>X</v-btn>
            </div>
          </v-img>
        </v-card>
      </v-dialog>
    </div>

    <!-- <v-card elevation="3">
      <div class="ma-2">
        <v-text-field
          style="background: primary"
          v-model="searchproduct"
          light
          placeholder="Search"
          outlined
          dense
          hide-details
          color="black"
          @change="sendSearchData(searchproduct)"
        ></v-text-field>
      </div>
    </v-card> -->

    <Initial-Language-Selector data-v-step="3" class="step-3"
      id="step-3"  
      v-if="$store.getters.selectedLanguage == null"
    ></Initial-Language-Selector>
    <Promoting-App-Install></Promoting-App-Install>
    <v-container>
      <CircularCategories
         data-v-step="4" 
         class="step-4"
         id="step-4"
        :apisource="{ params: { data_set: 'home_circular_categories' } }"
      ></CircularCategories>
    </v-container>
    <div  data-v-step="5" class="step-5" id="step-5">
      <Banner :apisource="{ params: { name: 'home_screen_banner' } }"></Banner>
      <v-container>
        <DataSetGroup
          :apisource="{ params: { identifier: 'home_screen_data_set_2' } }"
        >
        </DataSetGroup>
      </v-container>
      <div v-if="this.$store.getters.isAuthenticated">
        <LastOrders />
      </div>
      <Slider :apisource="{ params: { name: 'home_screen_slider' } }"></Slider>
      <Banner
        :apisource="{ params: { name: 'home_screen_strip_banner_1' } }"
      ></Banner>
      <!-- <Banner :apisource="{ params: { name: 'home_screen_strip_banner_2' } }"></Banner> -->
      <v-container>
        <DataSetGroup
          :apisource="{ params: { identifier: 'home_screen_data_set_1' } }"
          :configfeed="{ cols: 3 }"
        ></DataSetGroup>
      </v-container>
      <Banner
        :apisource="{ params: { name: 'home_screen_festive_banner' } }"
      ></Banner>
      <Banner :apisource="{ params: { name: 'home_screen_banner_2' } }"></Banner>
      <!-- <DataSetGroup :apisource="{ params: { identifier: 'home_screen_data_set_2' } }"></DataSetGroup> -->
      <Banner :apisource="{ params: { name: 'banner_category_1' } }"></Banner>
      <v-container>
        <DataSetGroup
          :apisource="{ params: { identifier: 'data_set_group_category_1' } }"
        ></DataSetGroup>
      </v-container>
      <Banner :apisource="{ params: { name: 'banner_category_2' } }"></Banner>
      <v-container>
        <DataSetGroup
          :apisource="{ params: { identifier: 'data_set_group_category_2' } }"
        ></DataSetGroup>
        <!-- <HorizontalProductList :apisource="params"></HorizontalProductList> -->
        <!-- <Combo-List-Scroller :apisource="params"></Combo-List-Scroller> -->
        <Banner :apisource="{ params: { name: 'banner_category_3' } }"></Banner>
        <DataSetGroup
          :apisource="{ params: { identifier: 'data_set_group_category_3' } }"
          :configfeed="{ cols: 2 }"
        ></DataSetGroup>
      </v-container>
      <Banner :apisource="{ params: { name: 'banner_category_4' } }"></Banner>
      <v-container>
        <DataSetGroup
          :apisource="{ params: { identifier: 'data_set_group_category_4' } }"
        ></DataSetGroup>
      </v-container>
      <Banner :apisource="{ params: { name: 'banner_category_5' } }"></Banner>
      <v-container>
        <DataSetGroup
          :apisource="{ params: { identifier: 'data_set_group_category_5' } }"
        ></DataSetGroup>
      </v-container>
      <Banner :apisource="{ params: { name: 'banner_category_6' } }"></Banner>
      <v-container>
        <DataSetGroup
          :apisource="{ params: { identifier: 'data_set_group_category_6' } }"
        ></DataSetGroup>
      </v-container>
      <Banner :apisource="{ params: { name: 'banner_category_7' } }"></Banner>
      <v-container>
        <DataSetGroup
          :apisource="{ params: { identifier: 'data_set_group_category_7' } }"
        ></DataSetGroup>
      </v-container>
      <v-container>
        <BrandList
          :apisource="{
            data_set: 'home_brands',
          }"
          :configfeed="{ title: 'Shop by brands' }"
        ></BrandList>
      </v-container>
      <PromotingPushNotification
        :configfeed="pushnotificationConfig"
        @sendData="reciveData"
      >
      </PromotingPushNotification>
      <div v-if="popup == true">
        <PopupOrder />
    </div>
    <popupScheduler />
    <!-- <Banner :apisource="{ params: { name: 'banner_category_3' } }"></Banner>
    <DataSetGroup :apisource="{ params: { identifier: 'data_set_group_category_5' } }"></DataSetGroup>
    <Banner :apisource="{ params: { name: 'banner_category_6' } }"></Banner>
    <DataSetGroup :apisource="{ params: { identifier: 'data_set_group_category_6' } }"></DataSetGroup>-->
    <!-- <Banner :apisource="{params:{name:'banner_category_7'}}"></Banner> -->
    <!-- <DataSetGroup :apisource="{params:{identifier:'home_screen_data_set_group_1'}}"></DataSetGroup> -->
    <!-- <DataSetGroup :apisource="{params:{identifier:'home_screen_data_set_group_2'}}"></DataSetGroup> -->
    <!-- <ProductDetailModal @productdetailevent="show($event)" /> -->
    <!-- <ProductList :apisource="{params:{ipp:10,categories: 82}}"></ProductList> -->
    <!-- <Banner :apisource="{params:{name:'home_screen_banner'}}"></Banner> -->
    <!-- <PartnerOrderList
      :apisource="{params:{captainId:1,customerId:2,customerMobileNo:8866587098,fromDate:'2020-07-17',toDate:'2020-07-18'}}"
    ></PartnerOrderList>-->
    <!-- <BottomNavigation /> -->
    <!-- <PincodeChecker></PincodeChecker> -->

    </div>
      <v-tour name="appTour" :options="tourOptions" :steps="appTourSteps">
      <template slot-scope="tour">
      <transition name="fade">
        <v-step
          v-if="tour.steps[tour.currentStep]"
          :key="tour.currentStep"
          :step="tour.steps[tour.currentStep]"
          :previous-step="tour.previousStep"
          :next-step="tour.nextStep"
          :stop="tour.stop"
          :skip="tour.skip"
          :is-first="tour.isFirst"
          :is-last="tour.isLast"
          :labels="tour.labels"
        >
          <template>
            <div slot="actions" v-if="tour.isLast">
              <v-btn class="ma-2 pa-2" @click="tour.stop" >Finish</v-btn>
            </div>
            <div slot="actions" v-else>
              <v-btn class="ma-2 pa-2" @click="tour.skip" >Skip Tour</v-btn>
              <v-btn class="ma-2 pa-2" @click="tour.nextStep" >Next step</v-btn>
            </div>
          </template>
        </v-step>
      </transition>
      </template>
    </v-tour>
  </v-container>
  
</template>

<script>
// import DynamicScreen from "@/components/DynamicScreen";
// import Card from "@/components/Card";
import CircularCategories from "@/components/CircularCategories";
// import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Banner from "@/components/Banner";
import DataSetGroup from "@/components/DataSetGroup";
import InitialLanguageSelector from "@/components/InitialLanguageSelector";
import PromotingAppInstall from "@/components/PromotingAppInstall";
import BrandList from "@/components/BrandList";
import PromotingPushNotification from "@/components/PromotingPushNotification";
import popupScheduler from "@/components/popupScheduler";
import LastOrders from "@/components/LastOrders.vue";

// import ComboListScroller from "@/components/ComboListScroller";
import PopupOrder from "@/components/PopupOrder";
// import PincodeChecker from "@/components/PincodeChecker";
import HeaderNavigation from "@/components/HeaderNavigation";
// import PartnerOrderList from "@/components/PartnerOrderList";
// import ProductDetailModal from "@/components/ProductDetailModal";
// import BottomNavigation from "@/components/BottomNavigation";
// import Search from "@/components/Search";

export default {
  name: "App",
  components: {
    // PartnerOrderList,
    HeaderNavigation,
    // Card,
    CircularCategories,
    Slider,
    LastOrders,
    PopupOrder,
    // BottomNavigation,
    Banner,
    DataSetGroup,
    InitialLanguageSelector,
    PromotingAppInstall,
    PromotingPushNotification,
    BrandList,
    popupScheduler,
    // HorizontalProductList,
    // ComboListScroller
    // PincodeChecker
    // ProductList
    // ProductDetailModal
    // DynamicScreen
    // Search,
  },
  data() {
    return {
      headerConfig: {
        showDrawerMenu: true,
        showCartIcon: true,
        showBackButton: false,
        showLocation: true,
        showSearch: true,
      },
      params: { params: {} },
      hasParams: 0,
      popup: null,
      pushnotificationConfig: {
        title: "home.pushnotifify.title",
        content: "home.pushnotifify.content",
        allowBtnName: "home.pushnotifify.alllowBtnName",
        deniedBtnName: "home.pushnotifify.deniedBtnName",
        blocked: {
          title: "Seems, You Blocked us",
          content: "home.pushnotifify.blocked.content",
          actionBtnName: "home.pushnotifify.blocked.actionBtnName",
        },
        displayInPopup: true,
      },
      dialog: true,
      searchproduct: "",
      
      //tour steps data-v-step selector

      // appTourSteps:[
      //   {
      //     target: '[data-v-step="0"]',  
      //     header: {
      //       title: 'Discover Frendy',
      //       },
      //     content: `Click here to check different options`
      //   },
      //   {
      //     target: '[data-v-step="1"]',  
      //     header: {
      //       title: 'Cart Details',
      //       },
      //     content: `get List of products in Your cart`
      //   },
      //   {
      //      target: '[data-v-step="2"]',  
      //      content: `Search Your favourite Product here`
      //   },
      //   { 
      //     target: '[data-v-step="3"]',  
      //     header: {
      //       title: 'Language',
      //       },
      //     content: `Select your prefered Language here`
      //   },
      //   {
      //     target: '[data-v-step="4"]',  
      //     header: {
      //       title: 'Categories',
      //       },
      //     content: `Select your categories here`
      //   },
      //   {
      //     target: '[data-v-step="5"]',  
      //     header: {
      //       title: 'New offers and arrivals',
      //       },
      //     content: `Get details of new offers and arrivals`
      //   }
      // ],


      //tour steps class selector

      // appTourSteps:[
      //   {
      //     target: '.step-0',  
      //     header: {
      //       title: 'Discover Frendy',
      //       },
      //     content: `Click here to check different options`
      //   },
      //   {
      //     target: '.step-1',  
      //     header: {
      //       title: 'Cart Details',
      //       },
      //     content: `get List of products in Your cart`
      //   },
      //   {
      //      target: '.step-2',  
      //      content: `Search Your favourite Product here`
      //   },
      //   { 
      //     target: '.step-3',  
      //     header: {
      //       title: 'Language',
      //       },
      //     content: `Select your prefered Language here`
      //   },
      //   {
      //     target: '.step-4',  
      //     header: {
      //       title: 'Categories',
      //       },
      //     content: `Select your categories here`
      //   },
      //   {
      //     target: '.step-5',  
      //     header: {
      //       title: 'New offers and arrivals',
      //       },
      //     content: `Get details of new offers and arrivals`
      //   }
      // ],



      //tour steps id selector
      appTourSteps:[
        {
          target: '#step-0',  
          header: {
            title: 'Discover Frendy',
            },
          content: `Click here to check different options`
        },
        {
          target: '#step-1',  
          header: {
            title: 'Cart Details',
            },
          content: `get List of products in Your cart`
        },
        {
           target: '#step-2',  
           content: `Search Your favourite Product here`
        },
        { 
          target: '#step-3',  
          header: {
            title: 'Language',
            },
          content: `Select your prefered Language here`
        },
        {
          target: '#step-4',  
          header: {
            title: 'Categories',
            },
          content: `Select your categories here`
        },
        {
          target: '#step-5',  
          header: {
            title: 'New offers and arrivals',
            },
          content: `Get details of new offers and arrivals`
        }
      ],
      
      
    };
  },
  methods: {
    sendSearchData(searchproduct) {
      console.log("Search............", searchproduct);
      // this.$emit("productSearch", this.searchproduct);
      this.$router.push("/search?searchproduct=" + searchproduct);
    },
    reciveData(value) {
      this.popup = value;
      console.log("Emmit method", this.popup);
    },
  },
  beforeMount() {
    this.params = { params: this.filterRedirectURLParams(this.$route.query) };
    this.hasParams = Object.keys(this.$route.query).length;
    var CurrentDate = new Date();
    var SelectedDate = new Date(2021, 0, 16);
    console.log(CurrentDate, SelectedDate);
    console.log("Date");
    if (CurrentDate >= SelectedDate) {
      this.dialog = false;
      //CurrentDate is more than SelectedDate
    } else {
      this.dialog = true;
      //SelectedDate is more than CurrentDate
    }
  },
  mounted() {
    if (this.$store.getters.isAuthenticated) {
      this.$gtag.set("user_properties", {
        userName:
          this.$store.state.User.firstName +
          " " +
          this.$store.state.User.lastName,
        userId: this.$store.state.User.userId,
        userNumber: this.$store.state.User.mobile,
        partnerId: this.$store.state.currentSelected.partnerId,
      });
    }
    this.$tours['appTour'].start()

  },
  
};
</script>
