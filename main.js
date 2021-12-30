// Modules to control application life and create native browser window
const {app, BrowserWindow,protocol, BrowserView} = require('electron')
const path = require('path')
const setup = require('./electron/setup')
const config = require('./electron/config.js')

// main window
global.MAIN_WINDOW = null

// 按照模块
setup()

async function initialize(){
  app.whenReady().then(() => {
    createWindow()
    
    // 自定义file协议
    protocol.registerFileProtocol('atom', (request, callback) => {
      const url = request.url.substr(7)
      callback(decodeURI(path.normalize(url)))
    })
  
    app.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })
}

async function createWindow () {
  // Create the browser window.
  const winOptions = config.windowsOption
  MAIN_WINDOW = new BrowserWindow(winOptions)

  // and load the index.html of the app.
  // MAIN_WINDOW.loadFile('example/index.html')
  MAIN_WINDOW.loadURL('http://localhost:8080')

  // Open the DevTools.
  MAIN_WINDOW.webContents.openDevTools()

  return MAIN_WINDOW
}

async function startServer(){

}

initialize()