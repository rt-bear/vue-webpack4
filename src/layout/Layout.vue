<!-- layout -->
<template>
  <div>
    <div>一个vue111</div>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {
    key() {
      return this.$route.fullPath;
    }
  },

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>