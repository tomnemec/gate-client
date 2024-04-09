import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'scan-slide',
  templateUrl: './scan-slide.component.html',
  styleUrls: ['./scan-slide.component.css'],
})
export class ScanSlideComponent implements OnInit {
  @Output() dataExported: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  triggerScan() {
    this.dataExported.emit(2);
    console.log('Slide after triggerScan');
  }
}
