import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'data-scroll-x',
  templateUrl: 'data-scroll-x.html'
})
export class DataScrollXComponent {

  @Input() dataListX: any;
  @Output()
  productid: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  openPageProductDetail(data) {
    this.productid.emit(data._id);
  }

}
