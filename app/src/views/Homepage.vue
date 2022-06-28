<template>
  <div>
    <HeaderView />
    <div>Homepage</div>
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
};
</script>
