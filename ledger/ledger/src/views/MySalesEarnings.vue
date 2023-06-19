<template>
    <div id="MySalesEarnings" class="pl-16">
        <br>
        <div>
        <router-link to='/MySalesEarnings/Ledger' class="white--text" style="text-decoration: none; color: inherit;">
        <v-btn color="amber"
        max-width="250"
        max-height="100"
         class="center">
            LEDGER</v-btn></router-link></div>
            <div><br>
        <router-link to='/MySalesEarnings/Commission' class="white--text" style="text-decoration: none; color: inherit;">
        <v-btn color="amber"
        max-width="250"
        max-height="100"
         class="center">
            <span>COMMISSION</span>
            </v-btn></router-link></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialog: false,
            /*items:[
              {text: 'Commission', route: ''},
            ],*/
        }
    },
}
</script>