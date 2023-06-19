<template>

<div>
<v-toolbar flat color="amber">
            <v-toolbar-title>
                <span class="font-weight-light white--text">Commission</span>
            </v-toolbar-title>
        </v-toolbar>


<!--DROPDOWNS -->

    <div>
      <div class="pr-16">
        <v-container fluid>
          <v-layout justify-space-between>
            
        <v-row align="center">
            <v-col
        class="d-flex"
        cols="12"
        sm="6"
        align="center"
      >
    <v-flex xs6 sm6 md6>
        <v-content class="title" align="center">Time: </v-content>
       </v-flex> 
       <v-flex xs6 sm6 md6>
        <v-select
          :items="items" 
          label="This month"
          dense
          solo 
          color="yellow"
          >
        </v-select>
       </v-flex>
      </v-col>
    </v-row>
  </v-layout>
  
  <v-layout justify-space-between>
        <v-row align="center">
            <v-col
        class="d-flex"
        cols="12"
        sm="6"
        align="center"
      >
    
    <v-flex xs6 sm6 md6>
        <v-content class="title" align="center">Customer: </v-content>
    </v-flex>  
    <v-flex xs6 sm6 md6> 
        <v-select
          :items="cutomers"
          label="All"
          input-value="1"
          multiple
          dense
          solo 
          color="yellow"
        >
         </v-select>
    </v-flex>
      </v-col>
    </v-row>
  </v-layout>
    
    <v-layout justify-space-between>

        <v-row align="center">
            <v-col
        class="d-flex"
        cols="12"
        sm="6"
        align="center"
      >
    <v-flex xs6 sm6 md6>
        <v-content class="title" align="center">Type:</v-content>
    </v-flex>
    <v-flex xs6 sm6 md6>
        <v-select
          :items="type"
          label="All"
          dense
          solo 
          multiple
          color="yellow darken-1"
        >
        </v-select>
        
    </v-flex>
      </v-col>
    </v-row>
    </v-layout>
  </v-container>
      </div>
<br>
<v-row>

<!--CARDS -->
<v-layout row wrap justify-space-around>
  <v-flex xs4 sm4 md4>
    <v-card 
    class="mx-auto rounded-card rounded-xl"
    color="amber"
    dark
    max-width="500px"
    height="107px"
    left
  >
    <v-card-title class="text-h4 font-weight-bold black--text justify-center font" align="center">
      ₹55
    </v-card-title>

    <v-card-text class="text-h6 font-weight-light black--text" align="center">
      Net earning
    </v-card-text>

  </v-card>
  </v-flex>

  <v-flex xs4 sm4 md4>
    <v-card
    class="mx-auto rounded-xl"
    color="amber"
    dark
    max-width="500px"
    height="107px"
    left
  >
    <v-card-title class="text-h4 font-weight-bold black--text justify-center" align="center">
    25
    </v-card-title>

    <v-card-text class="text-h6 font-weight-light black--text" align="center">
      Total Orders
    </v-card-text>

  </v-card>
  </v-flex>
</v-layout>
</v-row> 
    <br><br>

<!-- EXPANSION PANELS -->

<v-expansion-panels>
  
    <v-expansion-panel>
    
      <v-expansion-panel-header class="font-weight-bold green--text">
          Dc Number: 42122DC-529<br><br>
          Delivery Date: Wed Jun 16 2021 
              <br><br>
          Type: Order &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;₹150
          </v-expansion-panel-header>
      <v-expansion-panel-content>
        <br>
        <v-layout row wrap justify-space-around>
          <v-flex xs4 md3>
          <span class="font-weight-regular">Total items: <span class="font-weight-bold">2</span></span>
          </v-flex>
          <v-flex xs4 md3>
          <span class="font-weight-regular">Total cost: <span class="font-weight-bold">₹150</span></span>
          </v-flex>
        </v-layout>

<!-- TABS IN EXPANSION PANELS -->

<br><br>

<!-- CARDS IN EXPANSION PANELS -->

        <v-card class="mb-2" tile="">
                 <v-row align="start">
                    <v-col class="shrink">
                         <v-img src="data:image/jpeg;base64,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" max-width="80" class="ml-3"></v-img>
                    </v-col>
                    <v-col>
                         <v-card-title class="pa-0">Rasamalai Gold Jaggery 960 gm</v-card-title>
                         <v-list-item-content class="pa-0">Qty: 2</v-list-item-content>
                         <v-list-item-subtitle class="font-weight-black">₹69</v-list-item-subtitle>
        <v-list-item-subtitle class="text-decoration-line-through text-sm-body-2 red--text">₹88</v-list-item-subtitle>
        <v-list-item-subtitle class="green--text">₹16 off</v-list-item-subtitle>
                     </v-col>
                 </v-row>
        </v-card>

        
        
      </v-expansion-panel-content>
    </v-expansion-panel>


<!-- EXPANSION PANEL 2-->

<v-expansion-panel>
    
      <v-expansion-panel-header class="font-weight-bold red--text">
          Dc Number: 42122DC-529<br><br>
          Delivery Date: Wed Jun 16 2021 
              <br><br>
          Type: Return &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;-₹200
          </v-expansion-panel-header>
      <v-expansion-panel-content>
        <br>
        <v-layout row wrap justify-space-around>
          <v-flex xs4 md3>
          <span class="font-weight-regular">Total items: <span class="font-weight-bold">2</span></span>
          </v-flex>
          <v-flex xs4 md3>
          <span class="font-weight-regular">Total cost: <span class="font-weight-bold">₹150</span></span>
          </v-flex>
        </v-layout>

<!-- TABS IN EXPANSION PANELS -->

<br><br>

<!-- CARDS IN EXPANSION PANELS -->

        <v-card class="mb-2" tile="">
                 <v-row align="start">
                    <v-col class="shrink">
                         <v-img src="data:image/jpeg;base64,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" max-width="80" class="ml-3"></v-img>
                    </v-col>
                    <v-col>
                         <v-card-title class="pa-0">Rasamalai Gold Jaggery 960 gm</v-card-title>
                         <v-list-item-content class="pa-0">Qty: 2</v-list-item-content>
                         <v-list-item-subtitle class="font-weight-black">₹69</v-list-item-subtitle>
        <v-list-item-subtitle class="text-decoration-line-through text-sm-body-2 red--text">₹88</v-list-item-subtitle>
        <v-list-item-subtitle class="green--text">₹16 off</v-list-item-subtitle>
                     </v-col>
                 </v-row>
        </v-card>

      </v-expansion-panel-content>
    </v-expansion-panel>


<!--EXPANSION PANEL 3-->

<v-expansion-panel>
    
      <v-expansion-panel-header class="font-weight-bold red--text">
          Dc Number: 42122DC-529<br><br>
          Delivery Date: Wed Jun 16 2021 
              <br><br>
          Type: Cancel &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;-₹100
          </v-expansion-panel-header>
      <v-expansion-panel-content>
        <br>
        <v-layout row wrap justify-space-around>
          <v-flex xs4 md3>
          <span class="font-weight-regular">Total items: <span class="font-weight-bold">2</span></span>
          </v-flex>
          <v-flex xs4 md3>
          <span class="font-weight-regular">Total cost: <span class="font-weight-bold">₹150</span></span>
          </v-flex>
        </v-layout>

<!-- TABS IN EXPANSION PANELS -->

<br><br>

<!-- CARDS IN EXPANSION PANELS -->

        <v-card class="mb-2" tile="">
                 <v-row align="start">
                    <v-col class="shrink">
                         <v-img src="data:image/jpeg;base64,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" max-width="80" class="ml-3"></v-img>
                    </v-col>
                    <v-col>
                         <v-card-title class="pa-0">Rasamalai Gold Jaggery 960 gm</v-card-title>
                         <v-list-item-content class="pa-0">Qty: 2</v-list-item-content>
                         <v-list-item-subtitle class="font-weight-black">₹69</v-list-item-subtitle>
        <v-list-item-subtitle class="text-decoration-line-through text-sm-body-2 red--text">₹88</v-list-item-subtitle>
        <v-list-item-subtitle class="green--text">₹16 off</v-list-item-subtitle>
                     </v-col>
                 </v-row>
        </v-card>

      </v-expansion-panel-content>
    </v-expansion-panel>


<!--EXPANSION PANEL 3-->

<v-expansion-panel>
    
      <v-expansion-panel-header class="font-weight-bold green--text">
          Dc Number: 42122DC-529<br><br>
          Delivery Date: Wed Jun 16 2021 
              <br><br>
          Type: Order &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          ₹150
          </v-expansion-panel-header>
      <v-expansion-panel-content>
        <br>
        <v-layout row wrap justify-space-around>
          <v-flex xs4 md3>
          <span class="font-weight-regular">Total items: <span class="font-weight-bold">2</span></span>
          </v-flex>
          <v-flex xs4 md3>
          <span class="font-weight-regular">Total cost: <span class="font-weight-bold">₹150</span></span>
          </v-flex>
        </v-layout>

<!-- TABS IN EXPANSION PANELS -->

<br><br>

<!-- CARDS IN EXPANSION PANELS -->

        <v-card class="mb-2" tile="">
                 <v-row align="start">
                    <v-col class="shrink">
                         <v-img src="data:image/jpeg;base64,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" max-width="80" class="ml-3"></v-img>
                    </v-col>
                    <v-col>
                         <v-card-title class="pa-0">Rasamalai Gold Jaggery 960 gm</v-card-title>
                         <v-list-item-content class="pa-0">Qty: 2</v-list-item-content>
                         <v-list-item-subtitle class="font-weight-black">₹69</v-list-item-subtitle>
        <v-list-item-subtitle class="text-decoration-line-through text-sm-body-2 red--text">₹88</v-list-item-subtitle>
        <v-list-item-subtitle class="green--text">₹16 off</v-list-item-subtitle>
                     </v-col>
                 </v-row>
        </v-card>
           
      </v-expansion-panel-content>
    </v-expansion-panel>



  </v-expansion-panels>
    </div>
  <br><br><br>
 </div>
</template>

<script>
export default {
    name:"Home",
    data: () => ({
      items: ['This month', 'This Week', 'All Months','Custom Dates'],
      cutomers: ['All','A','B','C','D'],
      type: ['All','Order','Return','Cancel','Monsoon Icentive','Umang Incentive']
    }),
}
</script>

<style>
.font{
  font-family: 'Franklin Gothic Medium';
}
</style>