<template>
  <div id="app">
    <el-container>
      <el-header height="100%">
        <app-header></app-header>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeader from '@/components/Header.vue';

@Component({
  components: {
    AppHeader,
  },
})
export default class App extends Vue {
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
