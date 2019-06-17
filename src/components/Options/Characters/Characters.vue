<template>
  <div>
    <h2>Character list</h2>
    <el-button icon="el-icon-plus" @click="addCharacter">Add</el-button>
    <character-list></character-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharacterList from '@/components/Options/Characters/CharacterList.vue';

@Component({
  components: {
    CharacterList,
  },
})
export default class Characters extends Vue {
  addCharacter() {
    this.$store.dispatch('characters/register');
  }
}
</script>
