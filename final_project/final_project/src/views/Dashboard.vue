<template>
  <div>
    <v-toolbar flat color="indigo darken-4">
            <v-toolbar-title>
                <span class="font-weight-light white--text">Dashboard</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-toolbar
      extension-height="100"
    >
      <v-btn icon v-for="link in links" :key="link.text" router :to="link.route"><v-icon>mdi-arrow-left</v-icon></v-btn>

      <v-toolbar-title class="text-h5 button"> &emsp;KTM RC 390 </v-toolbar-title>

      <v-spacer></v-spacer>


    </v-toolbar>

 <v-flex xs12>
        <v-card
    class="mx-auto"
    max-width="500"
    height="170"
  >
    <v-card-text>
      <div><v-icon class="indigo--text">mdi-account</v-icon>&emsp; <span class="font-weight-bold">Krishanth</span></div><br><br>
      <v-layout row wrap justify-space-between>
      <v-flex xs4 md3 class="mx-3">
      <v-icon class="indigo--text">mdi-clipboard-text</v-icon>&emsp; <span class="font-weight-bold"> TN00X0000 </span></v-flex>
      <v-flex xs4 md3 class="pa-1">
        <!--<v-btn class="red white--text">Order</v-btn>-->
        </v-flex>
      </v-layout>
    <br><br><v-icon class="indigo--text">mdi-phone</v-icon>&emsp; <span class="font-weight-bold"> 1234567890 </span>
    </v-card-text>
  </v-card>
        </v-flex>
<br>
<v-flex class="mx-10">
        <v-card
    class="rounded-lg"
    color="blue"
    dark
    max-width="700"
    height="110"
    left
  >
    <v-card-title class="text-h4 font-weight-bold white--text justify-center" align="center">
    2600
    </v-card-title>

    <v-card-text class="text-subtitle-1 white--text" align="center">
    Kms Driven
    </v-card-text>
  </v-card>
        </v-flex>
<br>
<center><v-btn tile color="error"><v-icon>mdi-target-account</v-icon>&nbsp; Track Location </v-btn></center>
  </div>
</template>