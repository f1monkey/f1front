<template>
  <div v-loading="loading">
    <el-row>
      <el-col
        :span="4"
        v-for="character in characters"
        v-bind:key="character.id"
        class="character-card"
      >
        <character-card :id="character.id"></character-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Character from '@/lib/Dto/Character';
import CharacterCard from '@/components/Options/Characters/CharacterCard.vue';

@Component({
  components: {
    CharacterCard,
  },
})
export default class CharacterList extends Vue {
  protected loading = false;

  protected async mounted() {
    this.loading = true;
    await this.$store.dispatch('characters/load');
    this.loading = false;
  }

  get characters() {
    return this.$store.state.characters.characters;
  }
}
</script>

<style lang="less" scoped>
.character-card {
  margin: 5px;
}
</style>

