<template>
<div>
    <h1>Hello from Home component</h1>
    <table border="1px">
        <tr>
            <td> id </td>
            <td> name </td>
            <td> number </td>
        </tr>
        <tr v-for="user in users" :key=user.id>
            <td> {{user.id}} </td>
            <td> {{user.name}} </td>
            <td> {{user.number}} </td>
        </tr>
    </table>
    <!--<h1>{{ data }}</h1>
    <h1>{{msg}}</h1>-->
</div>
</template>

<script>
export default {
    name:'Home',
    props:{
        data:String,
        msg:String
    },
    data(){
        return{
            users:[
                {id:1,name:"mark",number:100},
                {id:2,name:"juliet",number:101},
                {id:3,name:"ash",number:102},
                {id:4,name:"tom",number:103}
            ]
        }
    }
}
</script>
