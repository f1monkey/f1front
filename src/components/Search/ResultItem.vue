<template>
  <router-link :to="{ name: 'loadout-view', params: { id: result.id }}">
    <el-row>
      <el-col :span="6">
        <img :src="result.image" width="64">
      </el-col>
      <el-col :span="18">
        <h4>{{ result.name }}</h4>
        <span>{{ result.description }}</span>
      </el-col>
    </el-row>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Result from '@/lib/Dto/Search/Result';

@Component({
  components: {},
})
export default class ResultItem extends Vue {
  @Prop(String) readonly id: string | undefined;

  get result(): Result {
    return this.$store.getters['search/result'](this.id);
  }
}
</script>
