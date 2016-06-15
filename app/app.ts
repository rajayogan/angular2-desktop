
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

import {remote, ipcRenderer} from 'electron';

let {dialog} = remote;

@Component({
    selector: 'myapp',
    template: '<h1>Angular 2 app inside a desktop app</h1>'
})

export class AppComponent {
    
    constructor() {
        var menu = remote.Menu.buildFromTemplate([{
            label: 'Raja',
            submenu: [
                {
                    label: 'open',
                    click: function(){
                      dialog.showOpenDialog((cb) => {
                          
                      })  
                    }
                },
                {
                    label: 'opencustom',
                    click: function(){
                      ipcRenderer.send('open-custom');
                          let notification = new Notification('Customdialog', {
                              body: 'This is a custom window created by us'
                          })
                        
                    }
                }
            ]
        }])
        remote.Menu.setApplicationMenu(menu);
    }
    
}

bootstrap(AppComponent);

