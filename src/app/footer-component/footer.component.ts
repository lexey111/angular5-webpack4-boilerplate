import {Component} from '@angular/core';

@Component({
	selector: 'footer-component',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.less']
})
export class FooterComponent {
	title: String = 'Angular 5 app started';
}