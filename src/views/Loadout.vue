<template>
  <div>
    <loadout :id="id"></loadout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loadout from '@/components/Loadout/Loadout.vue';

@Component({
  components: {
    Loadout,
  },
})
export default class LoadoutView extends Vue {
  get id() {
    return this.$route.params.id;
  }
}
</script>
