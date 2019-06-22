<template>
  <el-autocomplete
    class="inline-input"
    v-model="query"
    :fetch-suggestions="querySearch"
    placeholder="Search..."
    :trigger-on-focus="true"
    @select="handleSelect"
    size="medium"
  ></el-autocomplete>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class SearchInput extends Vue {
  protected links = [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ];

  protected query: string = '';

  querySearch(queryString: string, cb: any) {
    let links = this.links;
    let results = queryString
      ? links.filter(this.createFilter(queryString))
      : links;
    // call callback function to return suggestions
    cb(results);
  }
  createFilter(queryString: string) {
    return (link: any) => {
      return link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
    };
  }
  loadAll() {
    return [
      { value: 'vue', link: 'https://github.com/vuejs/vue' },
      { value: 'element', link: 'https://github.com/ElemeFE/element' },
      { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
      { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
      { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
      { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
      { value: 'babel', link: 'https://github.com/babel/babel' },
    ];
  }
  handleSelect(item: any) {
    console.log(item);
  }
  mounted() {
    this.links = this.loadAll();
  }
}
</script>

<style lang="less" scoped>
.logo {
  width: 200px;
}
</style>
