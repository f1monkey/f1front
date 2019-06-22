<template>
  <div>
    <el-row>
      <el-col :span="5">
        <logo/>
      </el-col>
      <el-col :span="10">
        <top-nav></top-nav>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/components/Header/Logo.vue';
import TopNav from '@/components/Header/TopNav.vue';

@Component({
  components: {
    Logo,
    TopNav,
  },
})
export default class Header extends Vue {}
</script>
