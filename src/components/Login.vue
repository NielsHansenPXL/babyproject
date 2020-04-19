<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <form action="#" @submit.prevent="submit">
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                <div class="col-md-6">
                                    <input
                                            id="email"
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            value
                                            required
                                            autofocus
                                            v-model="form.email"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Paswoord</label>

                                <div class="col-md-6">
                                    <input
                                            id="password"
                                            type="password"
                                            class="form-control"
                                            name="password"
                                            required
                                            v-model="form.password"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-12">
                                    <a class="button1" v-on:click="submit" type="submit" style="margin: 0px 0px 0px 130px">Login</a>
                                    <a href="#/register" class="button1" type="submit">Registreer</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                },
                error: null
            };
        },
        methods: {
            submit() {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.form.email, this.form.password)
                    .then(data => {
                        console.log(data);
                        this.$router.replace({ path: "/" });
                        data.toString();
                    })
                    .catch(err => {
                        this.error = err.message;
                    });
            }
        }
    };
</script>

<style scoped>

    a.button1{
        display:inline-block;
        padding:0.15em 1em;
        border:0.1em solid #17a2b8;
        margin:0 0.3em 0.3em 1em;
        border-radius:0.12em;
        box-sizing: border-box;
        text-decoration:none;
        font-family: Arial;
        font-weight:300;
        font-size: 20px;
        color:#17a2b8;
        text-align:center;
        transition: all 0.2s;
    }
    a.button1:hover{
        color: white;
        background-color:#17a2b8;
    }
    @media all and (max-width:30em){
        a.button1{
            display:block;
            margin:0.4em auto;
        }
    }
</style>