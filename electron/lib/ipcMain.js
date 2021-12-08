const { ipcMain } = require('electron')
const {messageShow} = require('../ipc/common')



exports.setup = () => {
    ipcMain.handle('common.messageShow', async (event, param) => {
        return await messageShow(event, 'common.messageShow', param)
    })

}