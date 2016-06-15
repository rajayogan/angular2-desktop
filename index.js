var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;


app.on('ready', ()=>{
    var mainWindow = new BrowserWindow({
        width: 1280,
        height: 720
    })
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
    
        var secondWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false
    })
    secondWindow.loadURL('file://' + __dirname + '/app/second.html');
    
    ipc.on('open-custom' ,() => {
        secondWindow.show();
    })
    
});