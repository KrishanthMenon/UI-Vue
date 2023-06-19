<template>
    <div>
        <h1>Please fill the Signup Form </h1>
        <input type="text" placeholder="Enter username" v-model="SignupForm.username"/> <br><br>
        <input type="password" placeholder="Enter password" v-model="SignupForm.password"/> <br><br>
        <p>Hobbies</p>
        <input type="checkbox" value="travel" id="travel" v-model="SignupForm.hobbies"/>
        <label for="travel"> Travel </label> <br><br>
        <input type="checkbox" value="sports" id="sports" v-model="SignupForm.hobbies"/>
        <label for="sports"> Sports </label> <br><br>
        <input type="checkbox" value="book" id="book" v-model="SignupForm.hobbies"/>
        <label for="book"> Book </label> <br><br>
        <p>Gender</p>
        <input type="radio" value="male" id="male" v-model="SignupForm.gender"/>
        <label for="male"> Male </label> <br><br>
        <input type="radio" value="female" id="female" v-model="SignupForm.gender"/>
        <label for="female"> Female </label> <br><br>
        <button v-on:click="sign">Sign Up</button>
    </div>
</template>

<script>
export default {
    name:"Signup",
    data(){
        return{
            SignupForm:{
                username:null,
                password:null,
                hobbies:[],
                gender:null
            }
        }
    },
    methods:{
        sign(){
            console.warn("Signed")
        }
    }
}
</script>