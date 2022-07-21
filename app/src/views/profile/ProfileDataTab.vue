<template>
  <div>
    <div class="main__div mt-5">
      <h2 class="main__title">Profile Data:</h2>
      <b-form class="profile__tab-form">
        <b-form-group
          style="margin-right: 5%"
          class="profile__tab-form-group"
          label="Name"
        >
          <b-input
            class="profile__tab-form-input"
            debounce="1500"
            v-model="updateUsers.name"
          />
        </b-form-group>
        <b-form-group class="profile__tab-form-group" label="Last name">
          <b-input
            class="profile__tab-form-input"
            v-model="updateUsers.lastName"
            value="White"
          />
        </b-form-group>
        <b-form-group
          style="margin-right: 5%;"
          class="profile__tab-form-group"
          label="Username"
        >
          <b-input
            v-model="updateUsers.userName"
            class="profile__tab-form-input"
            value="joellWhite2"
          />
        </b-form-group>
        <b-form-group class="profile__tab-form-group" label="Email">
          <b-input
            disabled
            class="profile__tab-form-input"
            :value="updateUsers.email"
          />
        </b-form-group>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      updateUsers: {
        name: null,

      }
    };
  },
  
};
</script>

<style scoped>
.main__div {
  width: 70%;
  height: 300px;
  /* outline:1px solid red; */
  margin: 0 auto;
  font-family: Open Sans;
}

.main__title {
  color: #6e798c;
}

.profile__tab-form {
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  /* border:1px solid red; */
  margin-top: 3%;
}

.profile__tab-form-group {
  margin-top:3%;
  width: 47.5%;
  /* outline:1px solid red; */
}

.profile__tab-form-input {
  margin-top:15px;
  height: 60px;
  color: #6e798c;
}

@media only screen and (max-width: 800px) {
  .profile__tab-form {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    /* border:1px solid red; */
    margin-top: 3%;
  }

  /* .profile__tab-form-group{
    width:70%;
} */
}
</style>
