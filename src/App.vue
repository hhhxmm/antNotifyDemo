<template>
  <div id="app">
    <a-button v-for="item in list" @click="onBtnClick(item)" :key="item">
      {{ item }}
    </a-button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: ["success", "error", "warn", "waring", "open", "close", "destory"],
    };
  },
  methods: {
    onBtnClick(type) {
      console.log("line 19", this);

      // this.$antNotify[type]({
      //   message: "导入完成",
      //   description: "<div>1111</div>",
      //   duration: 0,
      //   key: "product-success",
      // });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
