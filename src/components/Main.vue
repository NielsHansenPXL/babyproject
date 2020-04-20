<template>
 <!-- <div>
    <div>
      <img src='src/assets/jongen_meisje.jpg' alt="jongen_of_meisje">
    </div>
    <button>Waag je kans!</button>
  </div> -->
    <div class="container">
        <br>
        <div class="row justify-content-center">
                <div style="background: transparent">
                        <b-card-group deck style="background: transparent">
                            <b-card
                                    title="Baby Hansen 2.0"
                                    img-src="https://s3.amazonaws.com/dailybreak_images_prod/88fc7221-6a46-4d2e-aa64-bd1a642c1e79"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;"
                                    class="mb-2"
                            >
                                <b-card-text>
                                    In navolging van ons eerste gokwedstrijdje 3 jaar geleden, kan er nu opnieuw lustig op los geraden worden. Wordt het weer een jongen, of misschien wel een meisje? Behoort hij/zij tot de zwaargewichten, of toch eerder een pluimpje? Als je ervan overtuigd bent dat jij het bij het rechte eind heb, doe dan maar gezellig mee.                                      </b-card-text>
                                <a href="#/form" class="button1" v-bind:to="'form'">Waag je kans</a>
                            </b-card>
                            <b-card
                                    title="Hoe werkt het??"
                                    img-src="https://www.drtomcade.com.au/dashboard/wp-content/uploads/2018/03/Dr-Thomas-Tom-Cade-1200x628-4.jpg"
                                    img-alt="Image"
                                    img-bottom
                                    tag="article"
                                    style="max-width: 20rem;"
                                    class="mb-2"
                            >
                                <b-card-text>
                                    Iedereen kan zoveel gokbriefjes invullen als hij/zij wil. Per gokbriefje gaat er €1 in de pot. Wanneer de heuglijke dag aangebroken is zal de uitslag bekend gemaakt worden. De winnaar is diegene met het meeste juiste antwoorden en in geval van ex aequo diegene die het dichtst bij het tijdstip zit. De winst wordt verdeeld tussen de baby en de winnaar. Veel succes!
                                </b-card-text>
                            </b-card>
                        </b-card-group>

                </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

export default {
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
            user: "user"
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<style>
    a.button1{
        display:inline-block;
        padding:0.35em 1.2em;
        border:0.01em solid #17a2b8;
        margin:0 0.3em 0.3em 0;
        border-radius:0.12em;
        box-sizing: border-box;
        text-decoration:none;
        font-family: chiller;
        font-weight:300;
        font-size: 30px;
        color: #17a2b8;
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