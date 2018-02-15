import './index.html';
import './assets/app.less';
import './vendor';

import {AppModule} from './app/app.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {enableProdMode} from '@angular/core';

// webpack DefinePlugin
declare const PRODUCTION;
declare const BUILDTIMESTAMP;

if (PRODUCTION) {
	console.log('PROD mode');
	enableProdMode();
} else {
	console.log('DEV mode');
}
console.log('Built at:', new Date(BUILDTIMESTAMP));

platformBrowserDynamic().bootstrapModule(AppModule);