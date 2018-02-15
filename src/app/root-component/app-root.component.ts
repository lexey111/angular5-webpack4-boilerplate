import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: require('./app-root.component.html'),
	styleUrls: [require('./app-root.component.less')]
})
export class AppRootComponent {
	title: String = 'Angular 5 App started';
}