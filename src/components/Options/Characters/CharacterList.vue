<template>
  <div>
    <el-row>
      <el-col :span="4" v-for="character in characters" v-bind:key="character.id">
        <el-card>
          <div slot="header" class="clearfix">
            <span>{{ character.name }}</span>
            <el-button class="character-delete-button" icon="el-icon-delete" circle></el-button>
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

@Component({
  components: {},
})
export default class Characters extends Vue {
  protected characters: Character[] = [];

  protected characterIcon(id: number) {
    return characterIcon(id, 128);
  }

  protected async mounted() {
    await this.$store.dispatch('characters/load');
    this.characters = this.$store.state.characters.characters;
  }
}
</script>

<style lang="less" scoped>
.character-delete-button {
  float: right;
  margin-top: -10px;
  margin-right: -10px;
}
</style>

