const { app, BrowserWindow, shell } = require("electron");
const path = require("path");
const isDev = process.env.NODE_ENV === "development";

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: "漫画 Manga Translator",
    backgroundColor: "#0e0e0e",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false, // needed for fetch() to external APIs from file://
    },
    icon: path.join(__dirname, "../public/icon.png"),
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#161616",
      symbolColor: "#d4a017",
      height: 40,
    },
  });

  // Open external links in browser, not Electron
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  if (isDev) {
    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
