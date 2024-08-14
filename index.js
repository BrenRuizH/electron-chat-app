const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile("index.html");

    win.webContents.on('did-finish-load', () => {
        console.log('did-finish-load');
        win.webContents.send('data-from-server', { 'key':'value' });
    });

    ipcMain.on('data-from-web', (event, data) => {
        console.log("msg from web", data);
    });
}

app.whenReady().then(createWindow);