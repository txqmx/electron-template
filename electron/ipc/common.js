const {dialog} = require('electron');



exports.messageShow = function (arg) {
  return dialog.showMessageBox({
    type: 'info', // "none", "info", "error", "question" 或者 "warning"
    title: '自定义标题-message',
    message: '自定义消息内容',
    detail: '其它的额外信息'
  })
}