<template>
  <div>
    <el-row>
      <el-col :span="4">
        <logo/>
      </el-col>
      <el-col :span="20"></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/components/Header/Logo.vue';

@Component({
  components: {
    Logo,
  },
})
export default class Header extends Vue {}
</script>
