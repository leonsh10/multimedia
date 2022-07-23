<template>
  <div>
    <div class="main__pic">
      <HeaderView />
      <!-- <el-carousel height="600px" indicator-position="outside" >
            <el-carousel-item v-for="item in img" :key="item">
              <img class="top__image" :src="item" />
            </el-carousel-item>
          </el-carousel> -->
      <div class="row">
        <div class="col-md-12 width">
          <div class="col-md-6 title">
            <h1>Find your adventure</h1>
            <h2>
              Book tours with local hosts and share experiences with a community
              of passionate travelers.
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; padding: 10px">
      <h1 style="text-align: center">
        Some of the greates cities in the world
      </h1>
      <div class="all__destinations">
        <div class="single__destination__tokyo">
          <h3 class="single__destination-text">Tokyo</h3>
        </div>

        <div class="single__destination__paris">
          <h3 class="single__destination-text">Paris</h3>
        </div>

        <div class="single__destination__seoul">
          <h3 class="single__destination-text">Seoul</h3>
        </div>

        <div class="single__destination__london">
          <h3 class="single__destination-text">London</h3>
        </div>
      </div>
    </div>

    <div class="row">
      <div style="margin: 20px; display: flex">
        <video controls>
          <source type="video/mp4" src="../assets/world.mp4" />
        </video>
        <h1>Explore the world with Voyager!</h1>
      </div>
    </div>
    <section class="why_adventure">
      <div >
        <h2 class="title-header-section">Why book an adventure with <strong>Voyager</strong>?</h2>
      </div>
      <div class="list_info_with_icon" style="border-bottom: 1px solid rgba(255, 255, 255, 1)">
        <div class="item_info">
          <img src="../assets/hiking.png" />
          <h5>
            We do adventure.<br />
            Only adventure.
          </h5>
          <p>
            You won't find cruises or dinner shows here. We're inspired to get
            outside and rock climb, mountaineer, ski, hike, kayak, surf, dive,
            and so much more. If we end up in a remote village or by a hidden
            waterfall, then all the better!
          </p>
        </div>
        <div class="item_info">
          <img src="../assets/explore.png" style="height: 32px; width: 32px" />
          <h5>
            Passionate, responsible,<br />
            local adventure hosts
          </h5>
          <p>
            Each host is vetted for quality and reliability. We only work with
            P2P hosts, certified guides, and small tour operators. We support
            local business; NOT big tour conglomerates.
          </p>
        </div>
        <div class="item_info">
          <img src="../assets/accept.png" style="height: 32px; width: 32px" />
          <h5>
            Booking a tour<br />
            is easy
          </h5>
          <p>
            Message our hosts to set up a tour OR just pick a day and book it.
            Communicate with ease with adventure hosts and our knowledgeable
            customer service team.
          </p>
        </div>
      </div>
    </section>
    <FooterView />
  </div>
</template>

<script>
import FooterView from "../views/Footer.vue";
import HeaderView from "../views/Header.vue";

export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      img: [require("@/assets/star.webp"), require("@/assets/home1.jpeg")],
    };
  },
};
</script>
<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap'); */

.main__pic {
  width: 100%;
  height: 600px;
  background: url("../assets/hike.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
}
.stickytop {
  position: sticky;
  top: 0;
}
.top__image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.tinput {
  width: 110%;
  height: 40px;
  margin-left: -12px;
  border: white;
}
::placeholder {
  margin-left: 20px;
}
.tinput:focus {
  border-color: #007ae9;
}
.t-button {
  width: 105%;
  margin-left: -12px;
  height: 104%;
}
t-button:hover {
  border-color: #007ae9;
}
#links {
  float: right;
  color: #6e798c;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
}
#Maps {
  font-size: 14px;
  margin-left: 5px;
  float: right;
  color: #007ae9;
  font-family: "Open Sans", sans-serif;
}
a:hover {
  text-decoration: underline #007ae9;
}
.book {
  color: #007ae9;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  float: right;
}
#hotel {
  color: #007ae9;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  padding-left: 11px;
}
#title {
  font-family: "DM Serif Display", serif;
  padding-top: 30px;
  padding-left: 20px;
}
#contetText {
  font-family: "Open Sans", sans-serif;
  color: #6e798c;
  font-size: 15px;
  padding-left: 19px;
  padding-right: 51px;
}
#styleL {
  font-family: "Open Sans", sans-serif;
  color: #6e798c;
  font-weight: 600;
  padding-left: 5px;
  padding-top: 5px;
}
#date {
  font-family: "Open Sans", sans-serif;
  color: #6e798c;
  font-weight: 400;
  font-size: 15px;
  float: right;
}

.imageSrc {
  width: 123%;
  height: 109%;
  margin-left: -38px;
  margin-top: -31px;
}

.maincontent {
  /* border:1px solid black; */
  /* height: 600px; */
  width: 70%;
  margin-left: 15%;
}
.content {
  /* border:1px solid black; */
  width: 100%;
  height: 400px;
  border-radius: 20%;
}

::placeholder {
  color: gray;
  font-family: "Open Sans", sans-serif;
}

#yetId {
  margin-left: 32%;
}
.title {
  margin-top: 10%;
  margin-left: 18%;
  color: white;
  font-family: "Open Sans", sans-serif;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 15px;
  width: 70% !important;
}
.title h1 {
  font-size: 72px;
  line-height: 72px;
  color: #666;
  text-align: center;
}
.title h2 {
  font-size: 22px;
  color: #666;
}
body {
  overflow-x: hidden;
}

/* .width{
    position: relative;
    left: 300px;
} */
.divmod {
  height: 100px;
  overflow-x: hidden;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
::v-deep .el-menu {
  background-color: #fff0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.all__destinations {
  width: 99%;
  height: 350px;
  /* outline:1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 0px 30px;
}
.single__destination__paris {
  width: 22%;
  height: 300px;
  border-radius: 15px;
  background: url("../assets/paris.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s all ease-in-out;
}
.single__destination__paris:hover {
  -ms-transform: scale(0.5); /* IE 9 */
  -webkit-transform: scale(0.5); /* Safari 3-8 */
  transform: scale(1.2);
}
.single__destination__tokyo {
  width: 22%;
  height: 300px;
  border-radius: 15px;
  background: url("../assets/tokyo.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s all ease-in-out;
}
.single__destination__tokyo:hover {
  -ms-transform: scale(0.5); /* IE 9 */
  -webkit-transform: scale(0.5); /* Safari 3-8 */
  transform: scale(1.2);
}
.single__destination__seoul {
  width: 22%;
  height: 300px;
  border-radius: 15px;
  background: url("../assets/bali.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s all ease-in-out;
}
.single__destination__seoul:hover {
  -ms-transform: scale(0.5); /* IE 9 */
  -webkit-transform: scale(0.5); /* Safari 3-8 */
  transform: scale(1.2);
}
.single__destination__london {
  width: 22%;
  height: 300px;
  border-radius: 15px;
  background: url("../assets/london.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s all ease-in-out;
}
.single__destination__london:hover {
  -ms-transform: scale(0.5); /* IE 9 */
  -webkit-transform: scale(0.5); /* Safari 3-8 */
  transform: scale(1.2);
}
.single__destination-text {
  color: white;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  height: 97%;
  display: flex;
  align-items: end;
  margin-left: 10px;
  letter-spacing: 1px;
}
.why_adventure {
  background-color: #3c3d41;
  padding: 20px 10px 50px 10px;
}
.list_info_with_icon {
  display: flex;
  text-align: center;
  line-height: 30px;
}
.item_info {
  width: 65%;
  padding: 10px;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
}
.title-header-section{
    color: white;
  font-family: "Roboto Condensed", sans-serif;
}
</style>
