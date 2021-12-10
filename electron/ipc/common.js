const {dialog, BrowserWindow} = require('electron');



exports.windowMin = function(event, channel, arg){
  global.MAIN_WINDOW.minimize()
}
exports.windowClose = function(event, channel, arg){
  global.MAIN_WINDOW.close()
}

exports.messageShow = function (event, channel, arg) {
  // arg = {
  //   type: 'info', // "none", "info", "error", "question" 或者 "warning"
  //   title: '自定义标题-message',
  //   message: '自定义消息内容',
  //   detail: '其它的额外信息'
  // }
  return dialog.showMessageBox(arg)
}

exports.messageShowConfirm = function(event,channel, arg){
  arg = {
    type: 'info',
    title: '自定义标题-message',
    message: '自定义消息内容',
    detail: '其它的额外信息',
    cancelId: 1, // 用于取消对话框的按钮的索引
    defaultId: 0, // 设置默认选中的按钮
    buttons: ['确认', '取消'], // 按钮及索引
  }
  return dialog.showMessageBox(arg)
}

/**
 * 打开新窗口
 */

exports.createWindow = function (event,channel, arg){
  let content = null;
  if (arg.type == 'html') {
    content = path.join('file://', app.getAppPath(), arg.content)
  } else {
    content = arg.content;
  }

  let winObj = new BrowserWindow({
    x: 10,
    y: 10,
    width: 980, 
    height: 650 
  })
  winObj.loadURL(content);

  return winObj.id
}

/**
 * 打开文件窗口
 */

exports.openFileDialog = function (event, channel, arg){
  arg =  {
    properties: ['openFile', 'openDirectory']
  }
  return dialog.showOpenDialog(arg)
}
