<template>
<div>
    <div>
        <Header/>
    </div>
        <div class="main-container">
  <div class="grid-container">
    <div class="card card--2x animate__animated animate__pulse animate__infinite animate__slow ">
      <div class="card__content big-script padding-large" @click="sendtoAboutus1()">
        <p>Travel and see the world</p>
      </div>
    </div>
    <div class="card animate__animated animate__pulse animate__infinite animate__slow ">
      <div class="card__image">
        <img src="../assets/bali.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
      </div>
    </div>
    <div class="card animate__animated animate__pulse animate__infinite animate__slow ">
      <div class="card__image">
        <img src="../assets/ittali.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
      </div>
    </div>
    <div class="card animate__animated animate__pulse animate__infinite animate__slow ">
      <div class="card__content" @click="sendtoAboutus3()">
        <p><em>Travel is fatal to prejudice, bigotry, and narrow-mindedness.</em></p>
        <p>— Mark Twain</p>
      </div>
    </div>
    <div class="card card--horizontal animate__animated animate__pulse animate__infinite animate__slow " @click="sendtoAboutus()">
      <div class="card__image">
        <img src="../assets/korea.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
      </div>
    </div>
    <div class="card card--featured animate__animated animate__pulse animate__infinite animate__slow">
      <div class="card__side-by-side--m">
        <div class="card__image  ">
          <img src="../assets/oldkorea.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
        </div>
        <div class="card__content padding-large--l">
          <h2>Kim  Nam-Joon</h2>
          <p>Whenever I feel traped in my mind, i need to go out and travel around. This is what calms my soul</p>
          <p>Please visit places, and use Voyager to do that.</p>
          <div class="card__button" @click="sendtoAboutus()">More...</div>
        </div>
      </div>
    </div>
    <div class="card card--vertical animate__animated animate__pulse animate__infinite animate__slow " @click="sendtoAboutus2()">
      <div class="card__image">
        <img src="../assets/koreanstreet.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
      </div>
    </div>
    <div class="card animate__animated animate__pulse animate__infinite animate__slow ">
      <div class="card__image" @click="sendtoAboutus1()">
        <img src="../assets/ven.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
      </div>
    </div>
    <div class="card card--horizontal animate__animated animate__pulse animate__infinite animate__slow ">
      <div class="card__side-by-side">
        <div class="card__image">
          <img src="../assets/vvenn.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
        </div>
        <div class="card__content animate__animated animate__pulse animate__infinite animate__slow" @click="sendtoAboutus3()">
          <h3>Lorem ipsum</h3>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>
        </div>
      </div>
    </div>
    <div class="card card--vertical animate__animated animate__pulse animate__infinite animate__slow" @click="sendtoAboutus2()">
      <div class="card__image">
        <img src="../assets/newyork.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
      </div>
    </div>
    <div class="card animate__animated animate__pulse animate__infinite animate__slow">
      <div class="card__image" @click="sendtoAboutus1()">
        <img src="../assets/seol.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
      </div>
    </div>
    <div class="card animate__animated animate__pulse animate__infinite animate__slow" @click="sendtoAboutus2()">
      <div class="card__content">
        <p><em>We wander for distraction, but we travel for fulfilment.</em></p>
        <p>— Hilaire Belloc</p>
      </div>
    </div>
    <div class="card card--2x animate__animated animate__pulse animate__infinite animate__slow" @click="sendtoAboutus1()">
      <div class="card__image">
        <img src="../assets/koreanstreet.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
      </div>
    </div>
    <div class="card card--horizontal card--frameless animate__animated animate__pulse animate__infinite animate__slow" @click="sendtoAboutus3()">
      <div class="card__content big-script">
        <p>Bon voyage</p>
      </div>
    </div>
    <div class="card animate__animated animate__pulse animate__infinite animate__slow" @click="sendtoAboutus2()">
      <div class="card__image">
        <img src="../assets/itali.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
      </div>
    </div>
    <div class="card card--horizontal animate__animated animate__pulse animate__infinite animate__slow" @click="sendtoAboutus1()">
      <div class="card__image">
        <img src="../assets/beachblue.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
      </div>
    </div>
    <div class="card animate__animated animate__pulse animate__infinite animate__slow">
      <div class="card__image" @click="sendtoAboutus1()">
        <img src="../assets/tokyo.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" />
      </div>
    </div>
    <div class="card animate__animated animate__pulse animate__infinite animate__slow" @click="sendtoAboutus3()">
      <div class="card__content">
        <p><em>A good traveller has no fixed plans and is not intent on arriving.</em></p>
        <p>— Lao Tzu</p>
      </div>
    </div>
    <div class="card animate__animated animate__pulse animate__infinite animate__slow" @click="sendtoAboutus2()">
      <div class="card__image">
        <img src="../assets/paris.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260   " />
      </div> 
    </div>
     <div class="card card--featured ">
      <div class="card__side-by-side--m">
       
        
          <video controls>
          <source type="video/mp4" src="../assets/tailand.mp4" />
        </video>
                <div class="card__content">
        <p><em>A traveller is the one who seeks the peace of nature, enjoy this video of tailand on of the best places at the moment</em></p>
        <p>— Voyager Team</p>
      </div>
      </div>
    </div>
  </div>
</div>
<div>
    <Footer/>
</div>
</div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default{
components:{
     Header,
        Footer,

},
methods:{
    sendtoAboutus(){
          this.$router.push({
        name: "aboutus1",
      });
    },
     sendtoAboutus1(){
          this.$router.push({
        name: "aboutus2",
      });
    },
     sendtoAboutus3(){
          this.$router.push({
        name: "aboutus3",
      });
    }


}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Sacramento');

$spacing-medium: 1.6rem;
$spacing-small: $spacing-medium*0.5;
$spacing-smedium: $spacing-medium*0.707;
$spacing-large: $spacing-medium*2;
$spacing-xlarge: $spacing-medium*4;
$spacing-xxlarge: $spacing-medium*8;
$box-size: $spacing-xxlarge;

$color-text: #404646;

html {
  font-size: 14.5px;
}

body {
  font-family: 'Open Sans', sans-serif;
  line-height: 1.45em;
  background-color: #f0f0f0;
  color: $color-text;
}

* {
  box-sizing: border-box;
}

.main-container {
  margin: $spacing-medium $spacing-small;
}

.grid-container {
  margin: auto;
  display: grid;
  grid-gap: $spacing-smedium;
  grid-template-columns: repeat(auto-fit, $box-size);
  grid-auto-rows: $box-size;
  grid-auto-flow: dense;
  justify-content: center;
  max-width: 75em;
}

.card {
  grid-row: auto / span 1;
  grid-column: auto / span 1;
  background-color: white;
  cursor:pointer;
  box-shadow: 1px 3px 3px rgba(0, 10, 20, 0.06);
  h1, h2, h3, h4, p {
    margin-top: 0;
    font-weight: normal;
  }
  &__image {
    height: 100%;
    max-height: 100%;
    width: 100%;
    display: flex;
    img {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__side-by-side {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    &--m {
      height: 100%;
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      img {
        min-height: auto;
      }
    }
  }
  &__content {
    padding: $spacing-medium;
  }
  &__button {
    margin: $spacing-medium 0;
    text-align: center;
    padding: $spacing-small $spacing-medium;
    background: none;
    border: 0.5px solid #777;
    border-radius: 2px;
    &:hover {
      border-color: #d099a0;
    }
  }
  &--featured {
    grid-row: auto / span 3;
    grid-column: auto / span 2;
  }
  &--2x {
    grid-row: auto / span 2;
    grid-column: auto / span 2;
  }
  &--vertical {
    grid-row: auto / span 2;
  }
  &--horizontal {
    grid-column: auto / span 2;
  }
  &--frameless {
    background-color: transparent;
    box-shadow: none;
  }
}

.padding {
  &-large {
    padding: $spacing-large;
    &--l {
      padding: $spacing-medium;
    }
  }
}

.big-script {
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-family: 'Sacramento', sans-serif;
  font-size: 4.3em;
  line-height: 1.15em;
  text-align: center;
  p {
    margin: 0;
  }
}

@media (max-width: 413px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
  }
  .card {
    min-height: $box-size;
  }
}

@media (min-width: 627px) {
  .grid-container {
    grid-gap: $spacing-medium;
  }
  .card {
    &__side-by-side--m {
      flex-flow: row nowrap;
      img {
        min-height: 100%;
      }
    }
    &--featured {
      grid-row: auto / span 2;
      grid-column: 1 / -1;
    }
  }
}

@media (min-width: 836px) {
  .padding-large--l {
    padding: $spacing-large;
  }
}

</style>