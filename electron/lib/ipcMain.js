const { ipcMain } = require('electron')
const {windowMin, windowClose,messageShow, messageShowConfirm, createWindow, openFileDialog} = require('../ipc/common')



exports.setup = () => {
    ipcMain.handle('common.windowClose', async (event, param) => {
        return await windowClose(event, 'common.windowClose', param)
    })
    ipcMain.handle('common.windowMin', async (event, param) => {
        return await windowMin(event, 'common.windowMin', param)
    })
    ipcMain.handle('common.messageShow', async (event, param) => {
        return await messageShow(event, 'common.messageShow', param)
    })
    ipcMain.handle('common.messageShowConfirm', async (event, param) => {
        return await messageShowConfirm(event, 'common.messageShowConfirm', param)
    })
    ipcMain.handle('common.createWindow', async (event, param) => {
        return await createWindow(event, 'common.createWindow', param)
    })

    ipcMain.handle('common.openFileDialog', async (event, param) => {
        return await openFileDialog(event, 'common.openFileDialog', param)
    })


}