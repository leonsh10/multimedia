<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="headermainT" style="margin: 0px">
      <div class="headermaintextT">
        <div class="col-md-6">
          <h1
            class="headerT animate__animated animate__pulse animate__infinite animate__slow"
          >
            Voyager<span class="undertitleT">about us</span>
          </h1>
          <h4 class="headerQuoteT animate__animated animate__zoomIn">
            where the old fashion meets <br />the newest trends
          </h4>
        </div>
        <!-- <div class="row headerQuoteT">
                    <h4 class=" animate__animated animate__zoomIn">where the old fashion meets the newest trends</h4>
                </div> -->
      </div>
    </div>
    <div
      class="imporantdesignT"
      style="background-color: white; height: 400px; margin: 0px; display: flex"
    >
      <div class="col-md-2">
        <h3
          class="titleT animate__animated animate__pulse animate__infinite animate__slow"
        >
          About our company
        </h3>
      </div>
      <div class="col-md-5">
        <p class="textT animate__animated animate__fadeIn">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div class="col-md-5">
        <p class="textT animate__animated animate__fadeIn">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
    <div
      class="row parallaxEffectT"
      style="margin: 0px; position: sticky; top: 0"
    >
      <div class="container final" style="position: sticky; top: 0">
        <div class="letter F">V</div>
        <div class="letter l">o</div>
        <div class="letter i">y</div>
        <div class="letter p">a</div>
        <div class="letter p">g</div>
        <div class="for">for</div>
        <div class="gsap" style="color: #bbbabb">VOYAGER</div>
      </div>
    </div>
    <div
      class="imporantdesignT"
      style="
        height: fit-content;
        background-color: white;
        height: 700px;
        margin: 0px;
        position: sticky;
        top: 0px;
        margin-top: 305px;
      "
    >
      <ul class="cards">
        <li>
          <a
            class="card animate__animated animate__pulse animate__infinite animate__slow"
            @click="goToAboutUs1()"
          >
            <img src="../assets/oldkorea.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header" style="background-color: white">
                <svg
                  class="card__arc"
                  xmlns="http://www.w3.org/2000/svg"
                  style="fill: white"
                >
                  <path />
                </svg>
                <img class="card__thumb" src="../assets/user1.jpg" alt="" />
                <div class="card__header-text" style="background-color: white">
                  <h3 class="card__title">Kim Nam-Joon</h3>
                  <span class="card__status">1 hour ago</span>
                </div>
              </div>
              <p class="card__description" style="background: white">
                To calm myself i go for walks,picnics and visiting nature.It
                makes me feel at ease and my inner child safe!
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href=""
            class="card animate__animated animate__pulse animate__infinite animate__slow"
            @click="goToAboutUs2()"
          >
            <img src="../assets/seol.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg
                  class="card__arc"
                  xmlns="http://www.w3.org/2000/svg"
                  style="fill: white"
                >
                  <path />
                </svg>
                <img class="card__thumb" src="../assets/user2.jpg" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Jennifer Alliston</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Aint no place made me feel like im home! except this , this
                makes me feel safe!
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href=""
            class="card animate__animated animate__pulse animate__infinite animate__slow"
            @click="goToAboutUs3()"
          >
            <img src="../assets/ittali.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg
                  class="card__arc"
                  xmlns="http://www.w3.org/2000/svg"
                  style="fill: white"
                >
                  <path />
                </svg>
                <img class="card__thumb" src="../assets/user3.jpg" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Veronica Park</h3>

                  <span class="card__status">1 hour ago</span>
                </div>
              </div>
              <p class="card__description">
                Whenever the pretty view is shown in front of me , makes me feel
                pretty wanted and im happy for it!
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="textingT" style="display: flex; margin: 0px; margin-top: 50px">
      <div class="col-md-6">
        <img src="../assets/gifff.gif" />
      </div>
      <div class="col-md-6">
        <div class="row titulliTT" style="margin: 0px">
          <h4 class="titulliTT">Submit with Love!</h4>
        </div>
        <el-form
          ref="form"
          :model="form"
          label-width="120px"
          style="margin-top: 50px"
        >
          <div class="row" style="margin: 0px">
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
          <div class="row" style="margin: 0px">
            <el-form-item label="Email">
              <el-input
                aria-placeholder="Emri "
                placeholder="Email....."
                style="width: 540px"
              >
              </el-input>
            </el-form-item>
          </div>
          <div class="row" style="margin: 0px">
            <el-form-item label="Your comment:">
              <el-input type="textarea" style="width: 540px" row="6"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary">Submit -></el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div
      class="marginT textingT"
      style="display: flex; background-color: white; height: fit-content"
    >
      <div class="col-md-4" style="background-color: white">
        <div class="music-card">
          <div class="image">
            <img src="../assets/sf.jpg" />
          </div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="info">
            <h2 class="title">Fourth Of July</h2>
            <author class="artist">Sufjan Stevens</author>
          </div>
        </div>
        <div style="margin-top: -27%">
          <audio
            src="../assets/sufjansteven.mp3"
            controls
            style="height: 100px; width: 64%; margin-left: 18%"
          ></audio>
        </div>
      </div>
      <div class="col-md-4" style="background-color: white">
        <div class="music-card">
          <div class="image">
            <img src="../assets/lgo.jpg" />
          </div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="info">
            <h2 class="title">Life goes on</h2>
            <author class="artist">BTS</author>
          </div>
        </div>
        <div style="margin-top: -27%">
          <audio
            src="../assets/lgo.mp3"
            autoplay
            controls
            style="height: 100px; width: 64%; margin-left: 18%"
          ></audio>
        </div>
      </div>
      <div class="col-md-4" style="background-color: white">
        <div class="music-card">
          <div class="image">
            <img src="../assets/springday.jpg" />
          </div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="info">
            <h2 class="title">Spring Day</h2>
            <author class="artist">BTS</author>
          </div>
        </div>
        <div style="margin-top: -27%">
          <audio
            src="../assets/sd.mp3"
            controls
            style="height: 100px; width: 64%; margin-left: 18%"
          ></audio>
        </div>
      </div>
    </div>

    <div style="position: sticky; top: 0px; margin-top: 125px">
      <Footer />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap");

body {
  margin: 0%;
}

.titulliTT {
  // margin-left: 12%;
  // margin-top: 14%;
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
  font-family: "Raleway", sans-serif;
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
  font-family: "Ibarra Real Nova", serif;
  color: white;
}

.headerT {
  color: white;
  font-family: "Albert Sans", sans-serif;
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
  font-family: "Noto Sans JP", sans-serif;
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
  transition: 0.2s ease-in-out;
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
  transition: 0.2s ease-in-out;
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
  margin: 0 0 0.3em;
  color: #6a515e;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";
  font-size: 0.8em;
  color: #d7bdca;
}

.card__status {
  font-size: 0.8em;
  color: #d7bdca;
}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: #d7bdca;
  font-family: "MockFlowFont";
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  background-color: white;
}

// Variables ---------------------
$veronica: #b01de8;
$red-orange: #f34235;

// Animation ----------------------

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

body {
  background: #fafafa;
}

.music-card {
  & {
    margin: 100px auto;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    position: relative;
    width: 300px;
    height: 500px;
  }

  > .image img {
    position: absolute;
    z-index: 1;
    opacity: 0.3;
    height: 300px;
    width: 300px;
  }

  > .image:after {
    height: 100px;
    content: "";
    top: 200px;
    position: absolute;
    width: 100%;
    z-index: 1;
    background: linear-gradient(rgba(#dd417f, 0), #dd417f);
  }

  > .wave {
    position: absolute;
    height: 750px;
    width: 750px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -70%;
    margin-top: -130%;
    border-radius: 40%;
    background: radial-gradient($veronica, $red-orange);
    animation: spin 3000ms infinite linear;
  }

  > .wave:nth-child(2) {
    top: 10px;
    animation: spin 4000ms infinite linear;
  }

  > .wave:nth-child(3) {
    top: 10px;
    animation: spin 5000ms infinite linear;
  }

  > .info {
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
    text-align: center;
  }

  > .info > .title {
    font-size: 1.3em;
    font-weight: 400;
    font-family: "Playfair display";
    color: #333;
    margin-bottom: 8px;
  }

  > .info > .artist {
    font-family: "Source sans pro";
    color: #cfcfcf;
    font-size: 0.8em;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
}
</style>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  methods: {
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
