import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  @Input() slide: number = 1;


  constructor() {}

  ngOnInit(): void {}
}
