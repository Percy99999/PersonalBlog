<template>
  <div class="warp_main">
    <!-- <div v-for="item in audioFile" :key="item.id">
      {{item.name}} -->
      <audio class="audio_box" src="../../../static/audio/Jay/一路向北.mp3" controls="controls"></audio>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      audioFile: [],
    };
  },
  mounted() {
    // this.$axios.defaults.baseURL = "/api";
    // this.$axios.get("/search?keyword=周杰伦").then((Response) => {
    //   this.audioFile = Response.data.data.list;
    // });
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.warp_main {
  text-align: center;
  font-size: 60px;
}
</style>