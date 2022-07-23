<template>
    <div>
        <div>
            <Header />
        </div>
        <div class="row headermainT" style="margin:0px">
            <div class="row headermaintextT" >
                <div class="col-md-6">
                    <h1 class="headerT animate__animated animate__pulse animate__infinite animate__slow ">Voyager<span
                            class="undertitleT">about us</span></h1>
                    <h4 class="headerQuoteT animate__animated animate__zoomIn">where the old fashion meets <br />the
                        newest trends</h4>

                </div>
                <!-- <div class="row headerQuoteT">
                    <h4 class=" animate__animated animate__zoomIn">where the old fashion meets the newest trends</h4>
                </div> -->
            </div>

        </div>
        <div class="row imporantdesignT" style="background-color:white;height:400px;margin:0px">
            <div class="col-md-2">
                <h3 class="titleT animate__animated animate__pulse animate__infinite animate__slow">
                    About our company
                </h3>
            </div>
            <div class="col-md-5">
                <p class="textT animate__animated animate__fadeIn">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div class="col-md-5">
                <p class="textT animate__animated  animate__fadeIn">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
        <div class="row parallaxEffectT " style="margin:0px;position: sticky;top: 0;">
            <div class="container final" style="position: sticky;top: 0;">
                <div class="letter F">V</div>
                <div class="letter l">o</div>
                <div class="letter i">y</div>
                <div class="letter p">a</div>
                <div class="letter p">g</div>
                <div class="for">for</div>
                <div class="gsap" style="color:#bbbabb">VOYAGER</div>
            </div>
        </div>
        <div class="row imporantdesignT "
            style="background-color:white;height:700px;margin:0px;position:sticky;top:0px">
            <ul class="cards">
                <li>
                    <a class="card animate__animated animate__pulse animate__infinite animate__slow" @click="goToAboutUs1()">
                        <img src="../assets/oldkorea.jpg" class="card__image" alt="" />
                        <div class="card__overlay">
                            <div class="card__header" style="background-color:white">
                                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg" style="fill:white">
                                    <path />
                                </svg>
                                <img class="card__thumb" src="../assets/user1.jpg" alt="" />
                                <div class="card__header-text" style="background-color: white;">
                                    <h3 class="card__title">Kim Nam-Joon</h3>
                                    <span class="card__status">1 hour ago</span>
                                </div>
                            </div>
                            <p class="card__description" style="background:white">To calm myself i go for walks,picnics
                                and visiting nature.It makes me feel at ease and my inner child safe!</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="" class="card animate__animated animate__pulse animate__infinite animate__slow" @click="goToAboutUs2()">
                        <img src="../assets/seol.jpg" class="card__image" alt="" />
                        <div class="card__overlay">
                            <div class="card__header">
                                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg" style="fill:white">
                                    <path />
                                </svg>
                                <img class="card__thumb" src="../assets/user2.jpg" alt="" />
                                <div class="card__header-text">
                                    <h3 class="card__title">Jennifer Alliston</h3>
                                    <span class="card__status">3 hours ago</span>
                                </div>
                            </div>
                            <p class="card__description">Aint no place made me feel like im home! except this , this
                                makes me feel safe!</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="" class="card animate__animated animate__pulse animate__infinite animate__slow" @click="goToAboutUs3()">
                        <img src="../assets/ittali.jpg" class="card__image" alt="" />
                        <div class="card__overlay">
                            <div class="card__header">
                                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg" style="fill:white">
                                    <path />
                                </svg>
                                <img class="card__thumb" src="../assets/user3.jpg" alt="" />
                                <div class="card__header-text">
                                    <h3 class="card__title">Veronica Park</h3>

                                    <span class="card__status">1 hour ago</span>
                                </div>
                            </div>
                            <p class="card__description">Whenever the pretty view is shown in front of me , makes me
                                feel pretty wanted and im happy for it!</p>
                        </div>
                    </a>
                </li>

            </ul>

        </div>
        <div class="row textingT" style="margin:0px">
            <div class="col-md-6">
                <img src="../assets/gifff.gif" />
            </div>
            <div class="col-md-6">
                <div class="row titulliTT" style="margin:0px">
                    <h4 class="titulliTT animate__animated animate__pulse animate__infinite animate__slow">Submit with Love!</h4>
                </div>
                <el-form ref="form" :model="form" label-width="120px" style="margin-top:50px">
                    <div class="row" style="margin:0px">
                        <div class="col-md-6">
                            <el-form-item label="Emri">
                                <el-input aria-placeholder="Emri " placeholder="Emri...">

                                </el-input>
                            </el-form-item>

                        </div>
                        <div class="col-md-6">
                            <el-form-item label="Mbiemri">
                                <el-input aria-placeholder="Emri " placeholder="Mbiemri...">

                                </el-input>
                            </el-form-item>

                        </div>
                    </div>
                    <div class="row" style="margin:0px">

                        <el-form-item label="Email">
                            <el-input aria-placeholder="Emri " placeholder="Email....." style="width: 540px;">

                            </el-input>
                        </el-form-item>

                    </div>
                    <div class="row" style="margin:0px">
                        <el-form-item label="Your comment:">
                            <el-input type="textarea" style="width: 540px;" row="6"></el-input>
                        </el-form-item>

                    </div>
                    <el-form-item>
                        <el-button type="primary">Submit -></el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
       

        <div style="position:sticky;top:0px">
            <Footer />
        </div>

    </div>

</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');

.titulliTT {
    margin-left: 12%;
    margin-top: 14%;
}

.textingT {
    height: 700px;
    position: sticky;
    top: 0px;
    background-color: white;
}

.textT {

    width: 400px;
    text-align: justify;
    margin-top: 60px;
    margin-left: 28%;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 17px;
}

.titleT {
    margin-top: 125px;
    margin-left: 48%;

}

section {
    text-align: center;
    font-size: 3em;
}

.undertitleT {
    font-weight: 800;
    font-size: 30px;
    color: #bbbabb;

}

.headerQuoteT {
    font-family: 'Ibarra Real Nova', serif;
    color: white;

}

.headerT {
    color: white;
    font-family: 'Albert Sans', sans-serif;
    font-weight: 300;
    font-size: 2cm;
    --animate-repeat: infinite;
    color: #bbbabb;
}

.headermaintextT {

    height: auto;
    /* align-items: center; */
    padding-top: 10%;
    padding-left: 10%;
    /* justify-content: space-evenly; */
}

.headermainT {

    height: 800px;
    margin-left: 0%;
    margin-right: 0%;

    background-image: url("../assets/aboutusHouse.jpg");
    background-size: 100% 1000px;
    background-position-y: -6cm;
    background-repeat: no-repeat;
    background-attachment: fixed;


}

.parallaxEffectT {
    height: 300px;
    margin-left: 0%;
    margin-right: 0%;

    background-image: url("../assets/aboutusHouse.jpg");
    background-size: 100% 1000px;
    /* background-position-y: 1cm; */
    background-repeat: no-repeat;
    background-attachment: fixed;
}

* {
    box-sizing: border-box;
}

body {
    background: black;
    padding: 0;
    margin: 0;
    font-family: "Signika Negative", sans-serif, Arial;
    font-weight: 300;
    height: 100vh;
    overflow: hidden;
}

.container {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.container.grid,
.container.columns {
    align-content: stretch;
    align-items: stretch;
    flex-wrap: wrap;
}

.letter {
    text-align: center;
    color: black;
    font-size: 10vmax;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 6px;
}

.container.grid .letter {
    flex-basis: 50%;
}

.container.columns .letter {
    flex-basis: 25%;
}

.for,
.gsap {
    font-size: 5vmax;
    color: white;
}

.for {
    padding: 2px 1.6vmax;
    font-weight: 300;
    display: none;
}

.gsap {
    padding: 2px 0;
    font-weight: 600;
    display: none;
}

.container.final .for,
.container.final .gsap {
    display: block;
}

.F {
    background: rgba(0, 188, 212, 0.7);
}

.l {
    background: rgba(40, 150, 255, 0.7);
}

.i {
    background: rgba(153, 80, 220, 0.7);
}

.p {
    background: rgba(90, 108, 225, 0.7);
}

.container.plain .letter {
    background: transparent;
    color: white;
    padding: 0;
}

:root {
    --surface-color: #fff;
    --curve: 40;
}

* {
    box-sizing: border-box;
}

body {
    font-family: 'Noto Sans JP', sans-serif;
    background-color: #fef8f8;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
}

.card {
    position: relative;
    display: block;
    height: 70%;
    border-radius: calc(var(--curve) * 1px);
    overflow: hidden;
    text-decoration: none;
    width: 75%;
}

.card__image {
    width: 100%;
    height: auto;
}

.card__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: calc(var(--curve) * 1px);
    background-color: var(--surface-color);
    transform: translateY(100%);
    transition: .2s ease-in-out;
    background-color: white;
}

.card:hover .card__overlay {
    transform: translateY(0);
}

.card__header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 2em;
    border-radius: calc(var(--curve) * 1px) 0 0 0;
    background-color: var(--surface-color);
    transform: translateY(-100%);
    transition: .2s ease-in-out;
    background-color: white;
}

.card__arc {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 100%;
    right: 0;
    z-index: 1;

}

.card__arc path {
    fill: var(--surface-color);
    d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}

.card:hover .card__header {
    transform: translateY(0);
}

.card__thumb {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.card__title {
    font-size: 1em;
    margin: 0 0 .3em;
    color: #6A515E;
}

.card__tagline {
    display: block;
    margin: 1em 0;
    font-family: "MockFlowFont";
    font-size: .8em;
    color: #D7BDCA;
}

.card__status {
    font-size: .8em;
    color: #D7BDCA;
}

.card__description {
    padding: 0 2em 2em;
    margin: 0;
    color: #D7BDCA;
    font-family: "MockFlowFont";
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    background-color: white;
}
</style>

<script>

import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {

    components: {
        Header,
        Footer,

    }, methods: {
goToAboutUs1() {
      this.$router.push({
        name: "aboutus1",
      });
    },
    goToAboutUs2() {
      this.$router.push({
        name: "aboutus2",
      });
    },
     goToAboutUs3() {
      this.$router.push({
        name: "aboutus3",
      });
    },
    },



};
</script>

