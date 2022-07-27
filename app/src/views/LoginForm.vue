<template>
  <div>
    <div class="main__div">
      <img class="login__image img-responsive" src="../assets/view.png" />
      <div class="angle"></div>
      <div class="login__form">
        <b-form class="inside__form" @submit.prevent="goToHome()">
          <h3 class="text-center">Login to your account</h3>
          <b-form-group class="mt-3">
            <b-form-input
              width="100"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
          </b-form-group>
          <b-form-group class="mt-3">
            <b-form-input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </b-form-group>
          <div class="login-remember__checkbox mt-3">
            <b-form-group>
              <input class="form-check-input" type="checkbox" />
              <label style="margin-left: 5px; margin-top: 8px"
                >Remember Me</label
              >
            </b-form-group>
            <a class="text-decoration-none;" style="width: 150px"
              >Forgot password?</a
            >
          </div>
          <b-button
            class="mt-3"
            type="submit"
            style="height: 50px; width: 100%"
            variant="success"
            >Login</b-button
          >
          <b-button
            class="mt-3"
            style="height: 50px; width: 100%"
            variant="dark"
            @click="goToHome()"
          >
            <img src="../assets/googleIcon.svg" />
            <span style="margin-left: 5px" class="google-text__button"
              >Or sign-in with google</span
            ></b-button
          >
          <p class="text-center mt-5">
            Dont have an account?
            <a class="text-decoration-none" href="/register">Join free today</a>
          </p>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({
        name: "homepage",
      });
    },
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
}
.form-check-input {
  width: 20px !important;
  height: 25px !important;
}
.angle {
  display: flex;
  position: absolute;
  background-color: #fff;
  transform: rotateZ(3deg);
  width: 60px;
  right: 550px;
}
.main__div {
  height: 100vh;
  display: flex;
}
.login__image {
  width: 60%;
  max-height: 100%;
  object-fit: cover;
  display: block;
}

.login__form {
  /* border: 1px solid red; */
  width: 30%;
  margin-left: 90px;
  display: flex;
  align-items: center;
}

.inside__form {
  width: 70%;
  /* border:1px solid black; */
  display: flex;
  flex-direction: column;
}
.inside__form fieldset {
  width: 100%;
}
.login-remember__checkbox {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 800px) {
  .google-text__button {
    display: none;
  }
  .login-remember__checkbox {
    display: flex;
    flex-direction: column;
  }

  .login__form {
    width: 70%;
  }
  .login__image {
    width: 50%;
  }
}

@media only screen and (max-width: 1200px) and (min-width: 800px) {
  .login-remember__checkbox {
    display: flex;
    flex-direction: column;
  }

  .login__form {
    width: 100%;
  }
  .login__image {
    width: 50%;
  }
}
</style>
