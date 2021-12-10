<template>
  <el-row class="header">
      <el-col :span="6">
        <div class="logo"></div>
      </el-col>
      <el-col :span="12"></el-col>
      <el-col :span="6">
        <div class="toolBtn" @click="windowReload">刷新</div>
        <div class="toolBtn" @click="windowMin">最小化</div>
        <div class="toolBtn" @click="windowClose">关闭</div>
      </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  setup(){
    const windowMin = () => {
      window.sdk.windowMin();
    }
    const windowClose = () => {
      window.sdk.windowClose();
    }
    const windowReload = () => {
      window.location.reload()
    }
    return {
      windowMin,
      windowClose,
      windowReload
    }
  }
});
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  -webkit-app-region: drag; // 无边框窗口拖拽
    .logo{
        margin-left: 20px;
        width: 30px;
        height: 30px;
        background-image: url('~@/assets/logo.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    .toolBtn{
        cursor: pointer;
        display: inline-block;
        margin: 0 5px;
        -webkit-app-region: no-drag;
    }
}
</style>