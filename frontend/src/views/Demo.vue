<template>
  <div class="demo">
    <Header></Header>
    <el-button type="primary" size="small" @click="messageShow">message</el-button>
    <el-button type="primary" size="small" @click="messageShowConfirm">messageConfirm</el-button>
    <el-button type="primary" size="small" @click="createWindow">createWindow</el-button>
    <el-button type="primary" size="small" @click="openFileDialog">openFileDialog</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
    name: "Demo",
    components: { Header },
    setup() {
        // 消息提示
        const messageShow = () => {
            const param = {
                type: "info",
                title: "自定义标题",
                message: "消息提示",
                detail: "xxxxxx"
            };
            window.sdk.messageShow(param);
        };
        const messageShowConfirm = () => {
            window.sdk.messageShowConfirm();
        };
        const createWindow = () => {
            window.sdk.createWindow({
                type: "",
                content: "http://www.baidu.com"
            });
        };
        const openFileDialog = () => {
            window.sdk.openFileDialog().then(res => {
                console.log(res);
            });
        };
        return {
            messageShow,
            messageShowConfirm,
            createWindow,
            openFileDialog
        };
    }
});
</script>
