///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
    selector: 'myapp',
    template: '<h1>Angular 2 app inside a desktop app</h1>'
})

export class AppComponent {}

bootstrap(AppComponent);

