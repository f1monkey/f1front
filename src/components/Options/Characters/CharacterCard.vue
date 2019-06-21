<template>
  <el-card>
    <div slot="header">
      <span class="character-name">{{ character ? character.name : 'Character' }}</span>
      <el-button
        class="character-delete-button"
        icon="el-icon-delete"
        circle
        @click="confirmDelete(character)"
      ></el-button>
    </div>
    <img :src="characterIcon(character ? character.id : 1)">
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { characterIcon } from '@/lib/Helper/EveImageHelper';
import Character from '@/lib/Dto/Character';

@Component({
  components: {},
})
export default class CharacterCard extends Vue {
  @Prop(Number) readonly id: number | undefined;

  protected characterIcon(id: number) {
    return characterIcon(id, 128);
  }

  get character(): Character | undefined {
    return this.$store.getters['characters/character'](this.id);
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
}
</script>

<style lang="less" scoped>
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
