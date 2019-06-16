<template>
  <div id="app">
    <el-header>
      <app-header></app-header>
      <top-nav></top-nav>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
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
export default class App extends Vue {
  mounted() {
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
