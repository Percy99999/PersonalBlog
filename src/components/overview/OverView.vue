<template>
  <div class="warp_main">
    {{code}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: 0,
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:3000/search?keywords=海阔天空")
      .then((Response) => {
        this.code = Response.data.code;
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