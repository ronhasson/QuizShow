const {
    app,
    BrowserWindow
} = require('electron');

let mainWindow;

function createWindow() {

    mainWindow = new BrowserWindow({
        width: 580,
        height: 610,
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    //mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    if (process.platform !== 'darwin') {
        mainWindow.webContents.send('closeServer');
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});