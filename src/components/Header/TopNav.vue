<template>
  <div>
    <el-menu :default-active="$route.path" :router="true" mode="horizontal">
      <el-menu-item index="/">Main</el-menu-item>
      <el-menu-item index="/loadouts">
        <i class="el-icon-search"></i>Loadouts
      </el-menu-item>
      <el-menu-item index="/options">
        <i class="el-icon-setting"></i>Options
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class TopNav extends Vue {}
</script>
