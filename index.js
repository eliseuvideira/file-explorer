const { app, BrowserWindow, ipcMain } = require('electron');

/**@type {BrowserWindow} */
let browserWindow = null;

app.on('ready', () => {
  browserWindow = new BrowserWindow({
    show: false,
    webPreferences: { nodeIntegration: true },
  });
  browserWindow.loadURL('http://localhost:3000');
  browserWindow.on('ready-to-show', () => {
    browserWindow.show();
  });
});

ipcMain.on('close', () => {
  const win = BrowserWindow.getFocusedWindow();
  win.close();
});

ipcMain.on('minimize', () => {
  const win = BrowserWindow.getFocusedWindow();
  win.minimize();
});

ipcMain.on('maximize', () => {
  const win = BrowserWindow.getFocusedWindow();
  win.maximize();
});

ipcMain.on('restore', () => {
  const win = BrowserWindow.getFocusedWindow();
  win.restore();
});
