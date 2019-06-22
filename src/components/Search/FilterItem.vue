<template>
  <div>
    <el-checkbox-group v-model="checkedVariants">
      <el-checkbox-button
        :label="variant.name"
        v-for="variant in sortedVariants"
        v-bind:key="variant.code"
      ></el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { characterIcon } from '@/lib/Helper/EveImageHelper';
import FilterDto from '@/lib/Dto/Search/Filter';

@Component({
  components: {},
})
export default class FilterItem extends Vue {
  @Prop(String) readonly code: string | undefined;

  get filter(): FilterDto {
    return this.$store.getters['search/filter'](this.code);
  }

  get sortedVariants() {
    return this.filter.variants.sort((variant1, variant2) => {
      return variant1.name > variant2.name ? 1 : -1;
    });
  }

  get checkedVariants(): string[] {
    return this.sortedVariants
      .map(variant => {
        return variant.checked ? variant.name : '';
      })
      .filter(Boolean);
  }

  set checkedVariants(checkedVariantNames: string[]) {
    this.$store.dispatch('search/selectFilterVariants', {
      filter: this.filter,
      checkedVariantNames,
    });
  }
}
</script>
