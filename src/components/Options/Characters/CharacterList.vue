<template>
  <div>
    <el-row>
      <el-col
        :span="4"
        v-for="character in characters"
        v-bind:key="character.id"
        class="character-card"
      >
        <el-card>
          <div slot="header">
            <span class="character-name">{{ character.name }}</span>
            <el-button
              class="character-delete-button"
              icon="el-icon-delete"
              circle
              @click="deleteCharacter(character)"
            ></el-button>
          </div>
          <img :src="characterIcon(character.id)">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { characterIcon } from '@/lib/Helper/EveImageHelper';
import Character from '@/lib/Dto/Character';
import { mapState } from 'vuex';
import { CharacterState } from '../../../store/characters';
import { RootState } from '../../../store';

@Component({
  components: {},
})
export default class Characters extends Vue {
  protected characterIcon(id: number) {
    return characterIcon(id, 128);
  }

  protected async deleteCharacter(character: Character) {
    await this.$store.dispatch('characters/delete', character);
  }

  protected mounted() {
    this.$store.dispatch('characters/load');
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
.character-name {
  white-space: nowrap;
  font-size: 0.8em;
}
.character-delete-button {
  float: right;
  margin-top: -10px;
  margin-right: -10px;
}
</style>

