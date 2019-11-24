const { app, BrowserWindow } = require('electron');

/**@type {BrowserWindow} */
let browserWindow = null;

app.on('ready', () => {
  browserWindow = new BrowserWindow({ show: false });
  browserWindow.loadURL('http://localhost:3000');
  browserWindow.on('ready-to-show', () => {
    browserWindow.show();
  });
});
