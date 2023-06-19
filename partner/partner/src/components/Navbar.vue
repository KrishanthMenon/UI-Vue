<template>
    <nav>
        
        <v-toolbar color="yellow darken-1">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="font-weight-light">DcList</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" color="yellow darken-1">
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Dashboard
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
    

</template>

<script>
export default {
    name:'Navbar',
    data(){
        return{
            drawer: false
        }
    }
}
</script>