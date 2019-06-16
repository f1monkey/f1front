<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-menu :default-active="currentGroup" @select="handleSelect">
          <el-menu-item index="characters">
            <i class="el-icon-user-solid"></i>
            <span>Characters</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="19">
        <el-main>
          <div v-if="currentGroup === 'characters'">
            <characters></characters>
          </div>
        </el-main>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Characters from '@/components/Options/Characters/Characters.vue';

@Component({
  components: {
    Characters,
  },
})
export default class OptionsView extends Vue {
  protected currentGroup: string = 'characters';

  handleSelect(selectedGroup: string) {
    this.currentGroup = selectedGroup;
  }
}
</script>
