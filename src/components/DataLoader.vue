<template>
  <div>
    <el-dialog
      :visible="loading"
      :modal="true"
      :modal-append-to-body="true"
      :lock-scroll="true"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <div v-loading="loading"></div>
      <div class="status">{{ status }}</div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class DataLoader extends Vue {
  protected percentage: number = 0;

  protected status: string = 'Loading database...';

  protected get loading() {
    return this.$store.state.loading;
  }

  protected async mounted() {
    await this.$store.dispatch('sde/load');
    this.$store.dispatch('setLoading', false);
  }
}
</script>
<style lang="less" scoped>
.status {
  margin-top: 30px;
}
</style>

