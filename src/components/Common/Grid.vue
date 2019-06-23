<template>
  <div>
    <el-row v-for="(row, i) in rows" :key="i">
      <el-col :span="24/size" v-for="(item, j) in row" :key="j">
        <slot v-bind:item="item"></slot>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Grid extends Vue {
  @Prop({ default: 4 }) readonly size!: number;
  @Prop(Array) readonly items!: any[];

  protected split(input: any[], size: number) {
    // @see https://javascript.ru/php/array_chunk
    let result: any[] = [];
    let length = input.length;
    for (let x, i = 0, c = -1; i < length; i++) {
      (x = i % size) ? (result[c][x] = input[i]) : (result[++c] = [input[i]]);
    }

    return result;
  }

  get rows() {
    return this.split(this.items, this.size);
  }
}
</script>

<style lang="less" scoped>
.logo {
  width: 100px;
}
</style>
