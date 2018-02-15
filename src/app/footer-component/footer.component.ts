import {Component} from '@angular/core';

@Component({
	selector: 'footer-component',
	templateUrl: require('./footer.component.html'),
	styleUrls: [require('./footer.component.less')]
})
export class FooterComponent {
	title: String = 'Angular 5 app started';
}