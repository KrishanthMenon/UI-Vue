<template>

    <div>
        <v-toolbar flat color="amber">
            <v-toolbar-title>
                <span class="font-weight-light white--text">Dashboard</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <br>
        <div class="mx-0">

            <v-card flat class="mx-2" tile="">
                 <v-row align="start">
                    <v-col class="shrink">
                         <v-img src="https://media3.giphy.com/media/Ka1l9zldxnhAyoyIdn/200w.webp?cid=ecf05e472l4gwhi3tl7b3ih3pr84c76cnkfcxzfcrwks6d17&rid=200w.webp&ct=t" max-width="100" max-height="100" class="ml-3"></v-img>
                    </v-col>
                    <v-col>
                         <v-card-title class="pa-0 body-2">From July 1 Delivery Days are changing for a few <br>locations.
<br>Your delivery days:</v-card-title>
                         <br><v-list-item-content class="pa-0 pl-16 amber">Sunday, Tuesday, Thursday</v-list-item-content>
                         <!--<v-list-item-subtitle class="font-weight-black">₹69</v-list-item-subtitle>
        <v-list-item-subtitle class="text-decoration-line-through text-sm-body-2 red--text">₹88</v-list-item-subtitle>
        <v-list-item-subtitle class="green--text">₹16 off</v-list-item-subtitle>-->
                     </v-col>
                 </v-row>
        </v-card>

        </div>

        <div class="mx-2">
        <br><v-card class="pa-3">
            <v-layout>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Today</div>
                    <div class="body-2">27 Jul</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Net Sales</div>
                    <div class="font-weight-bold">-</div>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs4 sm4 md2>
                    <div class="caption grey--text"><br>Gross Sales</div>
                    <div>-</div>
                </v-flex>
                <v-flex xs4 sm4 md2>
                    <div class="caption grey--text"><br>Returns</div>
                    <div>-</div>
                </v-flex>
                <v-flex xs4 sm4 md2>
                    <div class="caption grey--text"><br>Cancellations</div>
                    <div>-</div>
                </v-flex>
            </v-layout>
        </v-card>
        </div>

        <div class="mx-2">
        <br><v-card class="pa-3">
            <v-layout>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Week</div>
                    <div class="body-2">26 Jul - 01 Aug</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Net Sales</div>
                    <div class="font-weight-bold">-</div>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs4 sm4 md2>
                    <div class="caption grey--text"><br>Gross Sales</div>
                    <div>-</div>
                </v-flex>
                <v-flex xs4 sm4 md2>
                    <div class="caption grey--text"><br>Returns</div>
                    <div>-</div>
                </v-flex>
                <v-flex xs4 sm4 md2>
                    <div class="caption grey--text"><br>Cancellations</div>
                    <div>-</div>
                </v-flex>
            </v-layout>
        </v-card>
        </div>

        <div class="mx-2">
        <br><v-card class="pa-3">
            <v-layout>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Month</div>
                    <div class="body-2">01 Jul - 31 Jul</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Net Sales</div>
                    <div class="font-weight-bold">-</div>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs4 sm4 md2>
                    <div class="caption grey--text"><br>Gross Sales</div>
                    <div>-</div>
                </v-flex>
                <v-flex xs4 sm4 md2>
                    <div class="caption grey--text"><br>Returns</div>
                    <div>-</div>
                </v-flex>
                <v-flex xs4 sm4 md2>
                    <div class="caption grey--text"><br>Cancellations</div>
                    <div>-</div>
                </v-flex>
            </v-layout>
        </v-card>
<br>

    <div align="center">
        Top 5 Partners
    </div>
   <div>
   <apexchart 
     width="350" type="bar" align="center"
     :options="options" :series="series">
   </apexchart>  
  </div>

  <br><div align="center">
        Top 5 Categories
    </div>
   <div>
   <apexchart 
     width="350" type="bar" align="center"
     :options="items" :series="series">
   </apexchart>  
  </div>

  <br><div align="center">
        Top 10 Products
    </div>
   <div>
   <apexchart 
     width="350" type="bar" align="center"
     :options="products" :series="series2">
   </apexchart>  
  </div>



        <br><br><br><br>
        </div>

    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    options: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: [
         "Mr.A",
         "Mrs.B",
         "Ms.C",
         "Mr.D",
         "Mrs.E",
        ]
      }
    },
    items: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: [
         "V",
         "W",
         "X",
         "Y",
         "Z",
        ]
      }
    },
    products: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: [
         "1",
         "2",
         "3",
         "4",
         "5",
         "6",
         "7",
         "8",
         "9",
         "10"
        ]
      }
    },
    colors: ['#00897b'],
    series: [{
      name: 'series-1',
      data: [55, 62, 89, 66, 98]
    }],
    series2: [{
      name: 'series-1',
      data: [55, 62, 89, 66, 98, 23, 44, 66, 72, 66]
    }],
  })
}
</script>