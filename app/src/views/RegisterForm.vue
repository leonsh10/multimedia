<template>
  <div>
    <div class="main__div">
      <img class="login__image img-responsive" src="../assets/view.png" />
      <div class="angle"></div>
      <div class="register__form">
        <b-form class="inside__form" @submit.prevent="goToHome()">
          <h3 class="text-center">Register</h3>
          <b-form-group class="mt-3">
            <b-form-input
              class="inputat"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
          </b-form-group>
          <b-form-group class="mt-3">
            <b-form-input
              class="inputat"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </b-form-group>
          <b-form-group class="mt-3">
            <b-form-input
              class="inputat"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
          </b-form-group>
          <b-form-group class="mt-3">
            <b-form-input
              type="text"
              id="email"
              class="inputat"
              name="email"
              placeholder="Email"
            />
          </b-form-group>
          <b-form-group class="mt-3">
            <b-form-input
              type="password"
              id="password"
              name="password"
              class="inputat"
              placeholder="Password"
            />
          </b-form-group>
          <b-button
            class="mt-3"
            type="submit"
            style="width: 100px; height: 50px"
            variant="primary"
            >Register</b-button
          >
          <p style="width: 100%; text-align: center" class="mt-3">
            Already have an account?
            <a class="text-decoration-none" href="/">Go to sign in</a>
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
.inputat {
  width: 100%;
}
.inside__form fieldset {
  width: 80%;
}
.angle {
  display: flex;
  position: absolute;
  background-color: #fff;
  transform: rotateZ(2deg);
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

.register__form {
  width: 30%;
  margin-left: 90px;
  display: flex;
  align-items: center;
}

.inside__form {
  width: 70%;
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 800px) {
  .register__form {
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

  .register__form {
    width: 100%;
  }
  .login__image {
    width: 50%;
  }
}
</style>
