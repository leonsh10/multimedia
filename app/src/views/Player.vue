<template>
  <div class="player">
    <div class="player_sizer">
      <video controls>
        <source type="video/mp4" src="../assets/borabora.mp4" />
      </video>
    </div>
  </div>
</template>
<script>
// import Player from "../components/Player";
import "../components/Player/Player.scss";

export default {
  name: "Player",

  components: {
   //  Player,
  },
};
</script>
