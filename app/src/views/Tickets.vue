<template>
  <div>
    <Header />
    <div class="form-wrap">
      <form class="login">
        <h3>Where Would You like to Go?</h3>
        <div class="inputs">
          <div class="input">
            <!-- <div  style="height: 100px;">
  <el-steps direction="vertical" :active="1">
     <el-step title=""></el-step>
    <el-step title=""></el-step> 
  
  </el-steps>
</div> -->

            <input type="text" placeholder="Select City" name="" id="" />
            <!-- <email class="icon"/> -->
          </div>
          <div class="input">
            <input type="text" placeholder="Your Destination" name="" id="" />
            <!-- <password class="icon"/> -->
          </div>
          <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
          </el-date-picker>
          <input type="text" placeholder="1 Adult" name="" id="" />
        </div>
        <div class="input">
          <input type="text" placeholder="Your Destination" name="" id="" />
          <!-- <password class="icon"/> -->
        </div>
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
        </el-date-picker>
        <input type="text" placeholder="1 Adult" name="" id="" />

        <el-button
          @click="goToFlights()"
          size="large"
          plain
          style="width: 150px; margin-top: 10px"
          >Search Flights</el-button
        >

        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";


export default ({
    components: {
        Header,

    },
      methods: {
    goToFlights() {
      this.$router.push({
        name: "flights",
      });
    },

  },
})
</script>

<style>
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 100%;
}

.login-register {
  margin-bottom: 32px;
}

.router-link {
  color: #000;
}

form {
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

h2 {
  text-align: center;
  font-size: 32px;
  color: #303030;
  margin-bottom: 40px;
}

.inputs {
  width: 100%;
  max-width: 350px;
}

.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}

input {
  width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 4px 4px 4px 30px;
  height: 50px;
}

/* .icon{
            width: 12px;
            position: absolute;
            left: 6px;
          }
         */

.forgot-password {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  margin: 16px 0 32px;
  border-bottom: 1px solid transparent;
  transition: 0.5s ease all;
}

button {
  color: #141414;
  text-decoration: none;
  margin-right: 10px;

  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 0px rgba(255, 255, 255, 0.1) inset,
    0 0px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0 1px 0px rgba(255, 255, 255, 0.1) inset,
    0 0px 1px rgba(0, 0, 0, 0.7);
  box-shadow: 0 1px 0px rgba(255, 255, 255, 0.1) inset,
    0 0px 1px rgba(0, 0, 0, 0.7);

  background: rgba(0, 0, 0, 0.1); /* #191919 */
  border: 1px solid #141414;
  padding: 10px 25px;
}

.angle {
  display: flex;
  position: absolute;
  background-color: #fff;
  transform: rotateZ(3deg);
  width: 60px;
  right: -30px;
  height: 101%;
}

.background {
  flex: 2;
  background-size: cover;
  background-image: url("../assets/planeee.jpg");
  width: 100%;
  height: 100%;
}
</style>
