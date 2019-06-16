<template>
  <div>Characters</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Characters extends Vue {
  mounted() {
    this.$store.dispatch('characters/load');
  }
}
</script>
