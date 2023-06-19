<template>
    <div>
        <p v-html="header"></p>
        <h1>From Home</h1>
        <h2 v-once>{{name}}</h2>
        <h2>{{name}}</h2>
        <button v-bind:disabled="btndisable" v-on:click="hello">Click</button>
        <h3>{{ok?"yes":"no"}}</h3>
        <!--<p>{{1+100}}</p>-->
    </div>
</template>

<script>

export default {
    name:"Home",
    data(){
        return{
            name:"Myself",
            ok:true,
            header:"<h6>Hello all</h6>",
            btndisable:true
        }
    },
    methods:{
        hello(){
            this.ok=!this.ok
        }
    }
}
</script>