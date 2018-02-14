import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRootComponent} from './root-component/app-root.component';
import {FooterComponent} from './footer-component/footer.component';

@NgModule({
	declarations: [AppRootComponent, FooterComponent],
	imports: [BrowserModule, HttpClientModule, AngularSvgIconModule],
	bootstrap: [AppRootComponent]
})
export class AppModule {
}