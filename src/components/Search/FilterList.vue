<template>
  <div v-loading="loading">
    <h4>Filters</h4>
    <el-collapse>
      <el-collapse-item v-for="filter in filters" v-bind:key="filter.code" :title="filter.name">
        <filter-card :code="filter.code"/>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilterDto from '@/lib/Dto/Search/Filter';
import FilterCard from '@/components/Search/FilterItem.vue';

@Component({
  components: {
    FilterCard,
  },
})
export default class FilterList extends Vue {
  protected loading = false;

  protected async mounted() {
    this.loading = true;
    await this.$store.dispatch('search/loadFilters');
    this.loading = false;
  }

  get filters(): FilterDto[] {
    return this.$store.state.search.filters;
  }
}
</script>
