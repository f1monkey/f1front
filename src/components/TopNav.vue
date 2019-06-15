<template>
  <el-menu :default-active="$route.path" :router="true" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/">Main</el-menu-item>
    <el-menu-item index="/options">Options</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class TopNav extends Vue {
  activeIndex: string = '1';

  handleSelect(key: string, keyPath: string) {
    console.dir(this.$route.path);
    console.log(key, keyPath);
  }
}
</script>
