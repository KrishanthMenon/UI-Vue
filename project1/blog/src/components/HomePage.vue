<template>
    <div class="home">
        <h1>Home</h1>
        <Users/>
        <Products/>
    </div>
</template>

<script>
import Users from './Users'
import Products from './Products'

export default {
    name:"HomePage",
    components:{
        Users,
        Products
    }
}
</script>

<style scoped>
.home{
    background-color: aqua;
    height: 500px;
}
</style>