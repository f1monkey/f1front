<template>
  <div>
    <el-row>
      <el-col :span="5">
        <filter-list></filter-list>
      </el-col>
      <el-col :span="19">
        <search-input></search-input>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchInput from '@/components/Search/SearchInput.vue';
import FilterList from '@/components/Search/FilterList.vue';

@Component({
  components: {
    FilterList,
    SearchInput,
  },
})
export default class Search extends Vue {}
</script>
