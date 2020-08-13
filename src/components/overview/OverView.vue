<template>
  <div class="warp_main">
    <audio
      class="audio_box"
      v-for="item in audioFile"
      :key="item.id"
      :src="item.url"
      controls="controls"
    ></audio>
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
    this.$axios.get("http://api.migu.jsososo.com/search?keyword=周杰伦").then((Response) => {
      this.audioFile = Response.data.data.list;
    });
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