<template>
  <div>Loadout #{{ id }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Loadout extends Vue {
  @Prop(String) readonly id!: string;
}
</script>
