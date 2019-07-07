<template>
  <div id="app">
    <el-container v-loading="loading">
      <el-header height="100%">
        <app-header></app-header>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
    <data-loader></data-loader>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeader from '@/components/Header.vue';
import DataLoader from '@/components/DataLoader.vue';

@Component({
  components: {
    AppHeader,
    DataLoader,
  },
})
export default class App extends Vue {
  get loading(): boolean {
    return this.$store.state.loading;
  }

  protected mounted() {
    this.$store.subscribeAction((action, state) => {
      switch (action.type) {
        case 'error':
          this.$notify.error({
            title: 'Error',
            message: action.payload.message,
          });
      }
    });
  }
}
</script>

<style lang="less" scoped>
@import 'https://unpkg.com/element-ui/lib/theme-chalk/index.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
