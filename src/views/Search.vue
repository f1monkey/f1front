<template>
  <div>
    <search-input></search-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchInput from '@/components/Search/SearchInput.vue';

@Component({
  components: {
    SearchInput,
  },
})
export default class Search extends Vue {}
</script>
