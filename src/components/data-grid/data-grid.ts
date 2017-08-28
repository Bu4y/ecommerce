import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'data-grid',
  templateUrl: 'data-grid.html'
})
export class DataGridComponent {
  @Input() dataGrids: any;
  @Output()
  shopid: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  openPageShop(data) {
    this.shopid.emit(data._id);
  }

}
