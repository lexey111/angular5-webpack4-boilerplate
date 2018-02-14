import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRootComponent} from './root-component/app-root.component';

@NgModule({
	declarations: [AppRootComponent],
	imports: [BrowserModule],
	bootstrap: [AppRootComponent]
})
export class AppModule {
}