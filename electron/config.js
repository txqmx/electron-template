
const path = require('path')

const config = {
    windowsOption: {
        width: 980,
        height: 650,
        minWidth: 800,
        minHeight: 650,
        webPreferences: {
          //webSecurity: false,
          contextIsolation: false, // 设置此项为false后，才可在渲染进程中使用electron api
          nodeIntegration: true,
          // enableRemoteModule: true, 
          preload: path.join(__dirname, '../preload.js')
        },
        frame: true,
        //titleBarStyle: 'hidden'
      },
}

module.exports = config