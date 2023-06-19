<template>
  <div class="MrD mx-2">
    <v-card
    color="white"
    flat
    height="200px"
    tile
  >
    <v-toolbar
      extension-height="100"
    >
      <v-btn icon v-for="link in links" :key="link.text" router :to="link.route"><v-icon>mdi-arrow-left</v-icon></v-btn>

      <v-toolbar-title> &emsp;Mr. D</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon class="red--text">mdi-account-circle</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

 <v-flex xs12>
        <v-card
    class="mx-auto"
    max-width="500"
    height="120"
  >
    <v-card-text>
      <div><v-icon class="amber--text">mdi-phone</v-icon> <span class="font-weight-bold">1234567890</span></div><br>
      <v-layout row wrap justify-space-between>
      <v-flex xs4 md3 class="mx-3">
      <v-icon class="amber--text">mdi-home</v-icon><span class="font-weight-bold"> 123, ABC </span></v-flex>
      <v-flex xs4 md3 class="pa-1">
        <v-btn class="red white--text">Order</v-btn></v-flex>
      </v-layout>
    <v-icon class="amber--text">mdi-whatsapp</v-icon><span class="font-weight-bold"> 1234567890 </span>
    </v-card-text>
  </v-card>
        </v-flex>
<br>
<v-layout row wrap justify-space-between>
      <v-flex xs4 md3 class="mx-3">
        <v-card
    max-width="250"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold">LAST ORDER <span class="font-weight-bold red--text"></span></div>
      <br><br><span class="font-weight-bold red--text"> - </span>
    </v-card-text>
  </v-card>
        </v-flex> 

    <v-flex xs4 md3 class="mx-3">
        <v-card
    max-width="250"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold">LAST ORDER COMMISSION <span class="font-weight-bold red--text"></span></div>
      <br><span class="font-weight-bold red--text"> -</span>
    </v-card-text>
  </v-card>
        </v-flex>
</v-layout>

<div class="font-weight-medium"><br>Details of all Orders</div><br>
<v-layout row wrap justify-space-between class="pl-3 pr-3">
      <v-flex xs4 md2 class="mx-auto">
        <v-card
    max-width="150"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold">TOTAL ORDERS <span class="font-weight-bold red--text"></span></div>
      <br><br><span class="font-weight-bold red--text"> -</span>
    </v-card-text>
  </v-card>
        </v-flex> 

    <v-flex xs4 md2 class="mx-auto">
        <v-card
    max-width="150"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold">TOTAL SALES <span class="font-weight-bold red--text"></span></div>
      <br><br><span class="font-weight-bold red--text"> -</span>
    </v-card-text>
  </v-card>
        </v-flex>

        <v-flex xs4 md2 class="mx-auto">
        <v-card
    max-width="150"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold">TOTAL COMMISSION <span class="font-weight-bold red--text"></span></div>
      <br><span class="font-weight-bold red--text"> -</span>
    </v-card-text>
  </v-card>
        </v-flex> 

      <div class="font-weight-medium"><br class="pt-n1">Details of all Orders</div><br>

</v-layout>

  </v-card>
  <br><br><br><br><br><br><br><br><br><br><br>
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
          {text: 'Home', route: '/CustomerSection'},
        ]
      }
    },
}
</script>
