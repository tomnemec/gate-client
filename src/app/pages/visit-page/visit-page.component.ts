import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
  styleUrls: ['./visit-page.component.css'],
})
export class VisitPageComponent implements OnInit {
  slide = 1;

  constructor() {}

  ngOnInit(): void {}
  triggerScan() {
    console.log('triggerScan');
    this.slide = 2;
  }
  triggerTraining() {
    console.log('triggerTraining');
    this.slide = 3;
  }
}
