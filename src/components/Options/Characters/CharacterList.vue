<template>
  <div v-loading="loading">
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
              @click="confirmDelete(character)"
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
  protected loading = false;

  protected characterIcon(id: number) {
    return characterIcon(id, 128);
  }

  protected async confirmDelete(character: Character) {
    this.$confirm('Delete this character?', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    })
      .then(async () => {
        await this.deleteCharacter(character);
        this.$message({
          type: 'success',
          message: 'Delete completed',
        });
      })
      .catch(() => {});
  }

  protected async deleteCharacter(character: Character) {
    await this.$store.dispatch('characters/delete', character);
  }

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

