<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
            <b-img :src="require('../assets/baby_icon.png')" height="30" width="30" style="margin: 0px 20px 0px 0px"/>
            <b-navbar-brand href="#/">BabyBet</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#/statistics">Mijn gokjes</b-nav-item>
                    <b-nav-item href="#" disabled>Uitslag</b-nav-item>
                    <!--<b-alert v-if="user" style="height: 20px" show dismissible fade >Joepie, je bent ingelogd!</b-alert> -->
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>

                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>{{user.data.displayName}}</em>
                        </template>
                        <b-dropdown-item v-on:click="logout">Log Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<!-- TODO functionaliteit voor uit te loggen -->

<script>
    import {mapGetters} from "vuex";
    import firebase from 'firebase'

    export default {
        name: 'Navbar',
        data() {
            return{
                isLoggedIn: false,
                currentUser: false
            }
        },
        methods:{
            logout(){
                firebase.auth().signOut().then(() => {
                    this.$router.push('/login')
                });
            }
        },
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        }
    }
</script>

