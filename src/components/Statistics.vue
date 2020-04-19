<template>
    <div class="container">
        <br>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="container-fluid col-md-8" style="background: transparent">
                    <h2 id="line">Mijn gokjes</h2>
                </div>
                <br>
                <div style="background-color: transparent">
                    <div class="card-body" style="background-color: transparent">
                        <b-container fluid="sm">
                            <b-row>
                                <b-col align-self="center" id="text">
                                    Je hebt al {{countBets(gokken)}} keer gegokt!
                                </b-col>
                            </b-row>
                            <br>
                                <div v-for="value in gokken" v-bind:key="value" class="container-fluid " style="background-color: transparent">
                                    <div style="background-color: transparent">
                                        <b-card
                                                border-variant="warning"
                                                id="font"
                                                :img="require('../assets/feet.jpg')"
                                                img-alt="Image"
                                                img-right>

                                            <b-card-text>{{ value.naam }}</b-card-text>
                                            <b-card-text>{{ value.geslacht }}</b-card-text>
                                            <b-card-text>{{ value.lengte }} cm en {{ value.gewicht }} g</b-card-text>
                                            <b-card-text>{{ value.datum }} om {{ value.schiftingsvraag}}</b-card-text>
                                        </b-card>
                                    </div>
                                    <br>
                                </div>
                        </b-container>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                gokken: {
                    gokker: '',
                    naam: '',
                    geslacht: null,
                    gewicht: '',
                    lengte: '',
                    datum: '',
                    schiftingsvraag: ''
                },

                error: null
            };
        },

        created() {
            this.$http.get("https://babyproject-fbee0.firebaseio.com/Users/" +this.user.data.displayName + "/posts.json").then(function (data) {
                this.gokken = data.body;
                console.log(data);
            })
        },

        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        },

        methods: {
            countBets(gokken) {
                gokken = this.gokken;
                console.log(this.gokken);
                var aantal = 0;
                for (gokken in gokken) {
                    aantal++;
                }
                return aantal;
            },
        }
    }
</script>

<style>
    #form{
        background: lightblue;
        color: deeppink;
        font-family: Chiller;
        font-size: 30px;
        font-weight: bold;
    }

    #line{
        color: #17a2b8;
        font-family: chiller;
        font-size: 60px;
        font-weight: bold;
        background: transparent;
    }

    #block{
        margin: 30px 0 30px 0;
        color: #17a2b8;
        border: solid 1px;
    }

    #text{
        color: goldenrod;
        font-family: chiller;
        font-weight: bold;
        font-size: 30px;
    }

    #font{
        font-family: "Comic Sans MS";
        font-size: 25px;
        color: #17a2b8;
        background-color: transparent;
    }

</style>