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
}

app.whenReady().then(createWindow);