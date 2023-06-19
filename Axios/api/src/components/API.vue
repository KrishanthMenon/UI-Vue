<template>
    <div>
        <h1> List of API's </h1>
        <table border="1px">
            <tr>
                <td> Sample1 </td>
                <td> Sample2 </td>
                <td> Sample3 </td>
            </tr>
            <tr v-for="item in list" v-bind:key="item.Sample">
                <td> {{item.Sample1}} </td>
                <td> {{item.Sample2}} </td>
                <td> {{item.Sample3}} </td>
            </tr>
        </table>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
export default {
    name: "API",
    data()
    {
        return {list:undefined}
    },
    mounted(){
        Vue.axios.get('https://smartdevicemanagement.googleapis.com/$discovery/rest?version=v1')
        .then((resp)=>{
            this.list=resp.data.data
            console.warn(resp.data.data)
        })
    }
}
</script>