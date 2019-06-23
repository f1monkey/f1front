<template>
  <div>
    <search-component></search-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchComponent from '@/components/Search/Search.vue';

@Component({
  components: {
    SearchComponent,
  },
})
export default class Search extends Vue {}
</script>
