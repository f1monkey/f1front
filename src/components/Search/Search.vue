<template>
  <div>
    <el-row>
      <el-col :span="5">
        <filter-list></filter-list>
      </el-col>
      <el-col :span="19">
        <search-input></search-input>
        <div class="margin"></div>
        <result-list v-loading="loading"></result-list>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchInput from '@/components/Search/SearchInput.vue';
import FilterList from '@/components/Search/FilterList.vue';
import ResultList from '@/components/Search/ResultList.vue';

@Component({
  components: {
    FilterList,
    ResultList,
    SearchInput,
  },
})
export default class Search extends Vue {
  get loading() {
    return this.$store.state.search.isSearching;
  }
}
</script>

<style lang="less" scoped>
.margin {
  margin: 24px 0;
}
</style>
