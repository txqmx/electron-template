function windowMin(data){
    window.ipcRenderer.invoke('common.windowMin', data)
}
function windowClose(data){
    window.ipcRenderer.invoke('common.windowClose', data)
}


function messageShow(data){
    window.ipcRenderer.invoke('common.messageShow', data)
}


function messageShowConfirm(data){
    window.ipcRenderer.invoke('common.messageShowConfirm', data)
}

function createWindow(data){
    window.ipcRenderer.invoke('common.createWindow', data)
}

function openFileDialog(data){
    return window.ipcRenderer.invoke('common.openFileDialog', data)
}


window.sdk = {
    windowMin,
    windowClose,
    messageShow, // 系统窗口
    messageShowConfirm, 
    createWindow,
    openFileDialog
}