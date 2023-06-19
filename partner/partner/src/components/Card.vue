<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="product in products" :key="product.name"></v-flex>
                <v-card flat class="text-xs-center">hrllo</v-card>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name:'Card',
    data(){
        return{
            products:[
                {name:'Jaggery',qty:1}
                {name:'My Apsara Kit',qty:1}
            ]
        }
    }   
}
</script>