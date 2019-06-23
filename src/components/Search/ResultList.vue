<template>
  <div>
    <grid :size="3" :items="results">
      <template v-slot:default="slotProps">
        <el-card>
          <result-item :id="slotProps.item.id"></result-item>
        </el-card>
      </template>
    </grid>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ResultItem from '@/components/Search/ResultItem.vue';
import Result from '@/lib/Dto/Search/Result';
import Grid from '@/components/Common/Grid.vue';

@Component({
  components: {
    Grid,
    ResultItem,
  },
})
export default class ResultList extends Vue {
  get results(): Result[] {
    return this.$store.state.search.results;
  }
}
</script>
