<template>
  <div class="MrA mx-2">
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

      <v-toolbar-title> &emsp;Duke 390</v-toolbar-title>

      <v-spacer></v-spacer>

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
      <div><v-icon class="amber--text">mdi-application</v-icon> <span class="font-weight-bold">TN12X1234</span></div><br>
      <v-layout row wrap justify-space-between>
      <v-flex xs4 md3 class="mx-3">
      <v-icon class="amber--text">mdi-home</v-icon><span class="font-weight-bold"> 123, ABC </span></v-flex>
      <v-flex xs4 md3 class="pa-1">
        <v-btn class="red white--text">Delete</v-btn></v-flex>
      </v-layout>
    <v-icon class="amber--text">mdi-phone</v-icon><span class="font-weight-bold"> 1234567890 </span>
    </v-card-text>
  </v-card>
        </v-flex>
<br><br>
<v-layout row wrap justify-space-between>
      <v-flex xs4 md3 class="mx-5">
        <v-card
    max-width="250"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold">LAST TRAVEL <span class="font-weight-bold red--text"></span></div>
      <br><span class="text-h3 font-weight-bold red--text"> - </span>
    </v-card-text>
  </v-card>
        </v-flex> 

    <v-flex xs4 md3 class="mx-5">
        <v-card
    max-width="250"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold">KMS TRAVELLED <span class="font-weight-bold red--text"></span></div>
      <br><span class="text-h3 font-weight-bold red--text">-</span>
    </v-card-text>
  </v-card>
        </v-flex>
</v-layout>

  </v-card>
<br><br><br><br><br><br>

<v-layout>
<v-flex xs4 md3 class="ml-2">
        <v-card
    max-width="250"
    height="120"
  >
    <v-card-text>
      <div class="font-weight-bold">KMS TRAVELLED <span class="font-weight-bold red--text"></span></div>
      <br><span class="text-h3 font-weight-bold red--text">-</span>
    </v-card-text>
  </v-card>
        </v-flex>
</v-layout>

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
