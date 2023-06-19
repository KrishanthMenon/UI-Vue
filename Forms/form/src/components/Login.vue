<template>
    <div>
        <h1> Login Page </h1>
        <input type="text" v-model="loginform.username" placeholder="Enter Username" /> <br><br>
        <input type="password" v-model="loginform.password" placeholder="Enter Password" /> <br><br>
        <button v-on:click="logged"> Login </button>
    </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return{
            loginform:{
                username:null,
                password:null
            }
        }
    },
    methods:{
        logged(){
            console.log("Logged in",this.loginform.username,this.loginform.password)
        }
    }
}
</script>
