<template>
  <div class="demo">
    <Header></Header>
    <div>
        <h3>基本操作</h3>
        <el-button type="primary" size="small" @click="messageShow">message</el-button>
        <el-button type="primary" size="small" @click="messageShowConfirm">messageConfirm</el-button>
        <el-button type="primary" size="small" @click="createWindow">createWindow</el-button>
    </div>
    <div>
        <h3>上传文件</h3>
        <el-button type="primary" size="small" @click="openFileDialog">openFileDialog</el-button>
        <el-upload
            ref="upload"
            style="display: inline-block; margin: 0 15px"
            :show-file-list="false"
            :auto-upload="false"
            :on-change="handleChange"
        >
            <el-button size="small" type="primary">select file</el-button>
        </el-upload>
    </div>
   
    
    <div>
        <h4>本地视频播放</h4>
        <el-button type="primary" size="small" @click="playStart">play</el-button>
        {{filePath}}<br>
        <video v-if="playUrl" style="width:500px; margin-top: 10px" :src="playUrl" controls></video>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
    name: "Demo",
    components: { Header },
    setup() {
        const state = reactive({
            filePath: '',
            playUrl: ''
        })
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
                console.log(res)
                let filePaths = res.filePaths
                state.filePath = 'atom://' + filePaths[0]
                
            });
        };
        const playStart = () => {
            state.playUrl = state.playUrl ? '' : state.filePath
        }
        const handleChange = (file, fileList) => {
            // const reader = new FileReader();
            let url = URL.createObjectURL(file.raw)
            state.filePath = url
            // console.log(file, fileList, url, reader)
        }
        return {
            ...toRefs(state),
            messageShow,
            messageShowConfirm,
            createWindow,
            openFileDialog,
            playStart,
            handleChange
        };
    }
});
</script>
