

function messageShow(data){
    window.ipcRenderer.invoke('common.messageShow', data)
}


window.sdk = {
    messageShow, // 系统窗口
}