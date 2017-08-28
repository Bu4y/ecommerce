import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {
  @Input() listdata: any;

  text: string;

  constructor() {
    console.log('Hello ListComponent Component');
    this.text = 'Hello World';
  }

}
