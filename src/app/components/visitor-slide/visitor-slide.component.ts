import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'visitor-slide',
  templateUrl: './visitor-slide.component.html',
  styleUrls: ['./visitor-slide.component.css'],
})
export class VisitorSlideComponent implements OnInit {
  @Output() dataExported: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}

  triggerTraining() {
    this.dataExported.emit(3);
    console.log('Slide after training');
  }
}
