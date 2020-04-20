<template>
    <div class="row justify-content-center" id="page">
        <div class="container-fluid col-md-8" style="background: transparent">
            <h2 id="line">Mijn Gokbriefje</h2>

    <div class="card container-fluid" id="form">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <div class="container-fluid">
                <b-form-group
                        id="input-group-1"
                        label="Mijn naam wordt: "
                        label-for="input-1"
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.naam"
                            type="naam"
                            required
                            placeholder="???"
                    ></b-form-input>
                </b-form-group>
            </div>

            <div class="container-fluid">
                <b-form-group id="input-group-2" label="Het wordt een: " label-for="input-2">
                    <b-form-select
                            id="input-2"
                            v-model="form.geslacht"
                            :options="geslacht"
                            required
                    ></b-form-select>
                </b-form-group>
            </div>

            <div class="container-fluid">
                <b-form-group id="input-group-3" label="Hoeveel ga ik wegen? " label-for="input-3">
                    <b-form-input
                            id="input-3"
                            v-model="form.gewicht"
                            required
                            placeholder=".... g"
                    ></b-form-input>
                </b-form-group>
            </div>

            <div class="container-fluid">
                <b-form-group id="input-group-4" label="Hoe groot ga ik zijn? " label-for="input-4">
                    <b-form-input
                            id="input-4"
                            v-model="form.lengte"
                            required
                            placeholder=".. cm"
                    ></b-form-input>
                </b-form-group>
            </div>

            <div class="container-fluid">
                <label for="example-input">Wanneer kom ik piepen?</label>
                <b-input-group class="mb-3">
                    <b-form-input
                            id="example-input"
                            v-model="form.datum"
                            type="text"
                            placeholder="YYYY-MM-DD"
                            autocomplete="off"
                    ></b-form-input>
                    <b-input-group-append>
                        <b-form-datepicker
                                v-model="form.datum"
                                button-only
                                right
                                :min="min"
                                :max="max"
                                locale="nl"
                                aria-controls="example-input"
                                @context="onContext"
                        ></b-form-datepicker>
                    </b-input-group-append>
                </b-input-group>
            </div>

            <div class="container-fluid">
                <b-form-group id="input-group-5" label="Schiftingsvraag: Hoelaat word ik geboren? " label-for="input-5">
                    <b-form-input
                            type="time"
                            v-model="form.schiftingsvraag"
                            required
                    ></b-form-input>
                </b-form-group>
            </div>

            <div class="container-fluid col-md-8">
                <b-row class="flex-center">
                    <b-col><a href="" class="button1" v-on:click.prevent="post">Stuur door</a></b-col>
                    <b-col><a href="" class="button1" v-on:click.prevent="onReset">Reset</a></b-col>
                </b-row>
            </div>
            <br>
        </b-form>
    </div>


         <!--   <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
            </b-card> -->

        </div>
    </div>
</template>

<script>

    import {mapGetters} from "vuex";

    export default {
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        },
        data() {
            // 15th two months prior
            const minDate = new Date(2020, 8, 1)
            // 15th in two months
            const maxDate = new Date(2020,9,31)

            return {
                form: {
                    naam: '',
                    geslacht: null,
                    gewicht: '',
                    lengte:'',
                    datum:'',
                    schiftingsvraag: ''
                },
                geslacht: [{ text: 'Kies: ', value: null }, 'Jongen', 'Meisje'],
                show: true,

                value: '',
                min: minDate,
                max: maxDate
            }
        },

        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.naam = ''
                this.form.geslacht = null
                this.form.gewicht = ''
                this.form.lengte= ''
                this.form.datum = ''
                this.form.schiftingsvraag = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            },
            post: function(){
                this.$http.post("https://babyproject-fbee0.firebaseio.com/Users/" + this.user.data.displayName +"/posts.json", this.form).then(function(data){
                    console.log(data);
                    this.$alert("Bedankt voor je gokje lieve " + this.user.data.displayName);
                    this.$router.push('/#')
                });
            }
        }
    }
</script>
<style scoped>
    #form{
        background: lightblue;
        color: darksalmon;
        font-family: Chiller;
        font-size: 30px;
        font-weight: bold;
    }

    #line{
        color: darksalmon;
        font-family: chiller;
        font-size: 60px;
        font-weight: bold;
        background: transparent;
    }

    a.button1{
        display:inline-block;
        padding:0.15em 1em;
        border:0.1em solid #FFFFFF;
        margin:0 0.3em 0.3em 0;
        border-radius:0.12em;
        box-sizing: border-box;
        text-decoration:none;
        font-family: chiller;
        font-weight:300;
        font-size: 40px;
        color:#FFFFFF;
        text-align:center;
        transition: all 0.2s;
    }
    a.button1:hover{
        color: lightblue;
        background-color:#FFFFFF;
    }
    @media all and (max-width:30em){
        a.button1{
        display:block;
        margin:0.4em auto;
        }
    }

</style>