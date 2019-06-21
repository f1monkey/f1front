<template>
  <router-link to="/">
    <img
      class="logo"
      src="../../assets/logo.jpg"
      alt="Photo by Pascal THAUVIN https://freeimages.com/photographer/Gastonmag-49456"
    >
  </router-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Logo extends Vue {}
</script>

<style lang="less" scoped>
.logo {
  width: 200px;
}
</style>
