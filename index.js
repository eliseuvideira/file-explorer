const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');

/**@type {BrowserWindow} */
let browserWindow = null;

app.on('ready', () => {
  browserWindow = new BrowserWindow({
    show: false,
    webPreferences: { nodeIntegration: true },
    frame: false,
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

const readDir = async (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};

const readStats = async (item) => {
  return new Promise((resolve, reject) => {
    fs.stat(item, (err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    });
  });
};

const getItem = async (dir, name) => {
  const childItem = path.join(dir, name);
  const stats = await readStats(childItem);
  return {
    name,
    path: childItem,
    stats,
  };
};

const getChildItens = async (dir) => {
  const content = await readDir(dir);
  const childItens = await Promise.all(
    content.map((item) => getItem(dir, item)),
  );
  return childItens;
};

const isRoot = (dir) => {
  const { root } = path.parse(dir);
  return root === dir;
};

const getDirectories = async (dir) => {
  const childItens = await getChildItens(dir);
  const directories = childItens.filter((item) => !item.stats.isFile());
  if (!isRoot(dir)) {
    directories.unshift({ name: '..', path: path.resolve(dir, '..') });
  }
  return directories;
};

const getFiles = async (dir) => {
  const childItens = await getChildItens(dir);
  return childItens.filter((item) => item.stats.isFile());
};

ipcMain.on('GET /directories', async (event, path) => {
  const directories = await getDirectories(path);
  browserWindow.send('GET /directories', directories);
});

ipcMain.on('GET /current-path', () => {
  const currentPath = process.cwd();
  browserWindow.send('GET /current-path', currentPath);
});

ipcMain.on('GET /files', async (event, path) => {
  const files = await getFiles(path);
  browserWindow.send('GET /files', files);
});
