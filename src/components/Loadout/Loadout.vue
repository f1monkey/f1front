<template>
  <div v-loading="loading">Loadout #{{ id }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import LoadoutDto from '@/lib/Dto/Loadout/Loadout';

@Component({
  components: {},
})
export default class Loadout extends Vue {
  @Prop(String) readonly id!: string;

  protected loading: boolean = true;

  protected async mounted() {
    await this.$store.dispatch('loadout/load', this.id);
    this.loading = false;
  }

  get loadout(): LoadoutDto {
    return this.$store.getters['loadout/loadout'];
  }
}
</script>
