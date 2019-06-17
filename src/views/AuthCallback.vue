<template>
  <div v-loading="true" class="loader"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AuthCallback extends Vue {
  mounted() {
    this.$store.dispatch('characters/callback', {
      code: this.$route.query.code,
    });
    this.$router.push('/');
  }
}
</script>

<style lang="less" scoped>
.loader {
  width: initial;
  top: 50%;
  left: 50%;
  position: fixed;
}
</style>
