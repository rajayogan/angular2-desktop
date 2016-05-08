var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', ()=>{
    var mainWindow = new BrowserWindow({
        width: 1280,
        height: 720
    })
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});