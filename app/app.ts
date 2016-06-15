
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
    selector: 'myapp',
    template: '<h1>Angular 2 app inside a desktop app</h1>'
})

export class AppComponent {}

bootstrap(AppComponent);

