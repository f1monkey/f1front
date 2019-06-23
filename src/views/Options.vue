<template>
  <options></options>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Options from '@/components/Options/Options.vue';

@Component({
  components: {
    Options,
  },
})
export default class OptionsView extends Vue {}
</script>
