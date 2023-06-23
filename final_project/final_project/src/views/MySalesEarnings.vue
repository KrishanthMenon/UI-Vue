<template>
    <div id="MySalesEarnings" class="pl-16">
        <br>
        <div>
        <v-btn color="amber">
            LEDGER&emsp;&emsp;&nbsp;&nbsp;</v-btn></div>
            <div><br>
        <v-btn color="amber" @click:stop="dialog" v-for="item in items" :key="item.text" router :to="item.route">
            <span>COMMISSION</span>
            </v-btn></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialog: false,
            items:[
              {text: 'Commission', route: '/Commission'},
            ],
        }
    },
}
</script>