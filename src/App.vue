<template>
  <div id="app">
    <el-header>
      <app-header></app-header>
      <top-nav></top-nav>
    </el-header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeader from '@/components/Header.vue';
import TopNav from '@/components/TopNav.vue';

@Component({
  components: {
    AppHeader,
    TopNav,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
@import 'https://unpkg.com/element-ui/lib/theme-chalk/index.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
