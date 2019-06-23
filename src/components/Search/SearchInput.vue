<template>
  <el-input
    v-model="query"
    prefix-icon="el-icon-search"
    placeholder="Search..."
    size="medium"
    clearable
  ></el-input>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class SearchInput extends Vue {
  get query() {
    return this.$store.state.search.query;
  }

  set query(query: string) {
    this.$store.dispatch('search/setQuery', query);
  }
}
</script>

<style lang="less" scoped>
.logo {
  width: 200px;
}
</style>
