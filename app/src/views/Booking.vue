<template>
  <div>
    <Header />

    <!-- <h1>Booking, Scheduling, and Payments</h1>
    <h1>for tour Companies</h1> -->

    <div class="row" style="--bs-gutter-x: 0 !important">
      <div class="leftcolumn">
        <div class="card">
          <h1>Booking, Scheduling, and Payments for tour Companies</h1>
          <h5>Enjoy traveling with us !</h5>
          <div class="player">
            <video style="width: 700px" controls>
              <source type="video/mp4" src="../assets/borabora.mp4" />
            </video>
          </div>
          <p>Welcome to Voyager!</p>
          <p>
            Reserve your tickets here, plan your destination and more. We hope
            you enjoy your vacation with your loved ones as much as possible,
            thank you for choosing Voyager!
          </p>
        </div>
      </div>

      <div class="rightcolumn">
        <div class="card">
          <h1>More Options</h1>
          <b-button @click="goToTickets()" class="butoni"
            >Go to Tickets</b-button
          >
        </div>
        <br /><br /><br />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    goToTickets() {
      this.$router.push({
        name: "tickets",
      });
    },
  },
};
</script>

<style scoped>
.divikrys {
  display: flex;
}

.header {
  display: block;
  margin-bottom: 40px;
}
.maindiv {
  width: 100%;
  height: 1200px;
}

.butoni {
  background-color: #6e41e2;
  border-radius: 12px;
  height: 70px;
  width: 300px;
}

.butonat {
  display: flex;
  align-items: self-end;
}

.player {
  padding: 20px;
}

.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

.leftcolumn {
  float: left;
  width: 75%;
}

.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

.plane {
  height: 150px;
  width: 150px;
  margin-left: 55px;
}

* {
  --bs-gutter-x: 0 !important;
}
</style>
