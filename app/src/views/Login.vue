<template>
  <div class="form-wrap">
      <div class="background"></div>
    <form class="login">
        <p>Welcome Back</p>
      <h2>Login to your account</h2>
      <div class="inputs">
        <div class="input">
          <input
            type="text"
            placeholder="Email"
            v-model="email"
            name=""
            id=""
          />
          <!-- <email class="icon"/> -->
        </div>
        <div class="input">
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            name=""
            id=""
          />
          <!-- <password class="icon"/> -->
        </div>
        <el-checkbox v-model="checked">Remember Me</el-checkbox>
      </div>
     
      <el-button
        size="large"
        type="success"
        plain
        style="width: 175px; margin-top: 10px"
        @click.prevent="signIn"
        >Log in now</el-button
      >
       <el-button
        size="large"
        type="primary"
        plain
        style="width: 175px; margin-top: 10px"
        @click.prevent="signIn"
        >Or sign in with Google</el-button
      >
      <p class="login-register">
        Don't have an account?
        <span @click="goToSignUp()" style="cursor: pointer; color: #67c23a"
          >Join us free today</span
        >
      </p>
      <div class="angle"></div>
    </form>
    <!-- <div class="background"></div> -->
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
     
    };
  },
  methods: {
   
  },
};
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
  background-image: url("../assets/copyy.jpg");
  width: 100%;
  height: 100%;
}


</style>
