<template>
    <div>
        <h1>First statement</h1>
        <h1>{{data}}</h1>
        <h1 v-if="show">Hello</h1>
        <h2 v-else>Hello all</h2>
        <!--<center>
        <button v-on:click="y">Click</button>
        </center>-->
    </div>
</template>

<script>
export default {
    name:'Test',
    props:{
        msg:String
    },
    methods:{
        y(){
            alert("Entering the red zone")
        }
    },
    data(){
        return{
            show:false
        }
    }
}
</script>