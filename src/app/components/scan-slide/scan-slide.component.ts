import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'scan-slide',
  templateUrl: './scan-slide.component.html',
  styleUrls: ['./scan-slide.component.css'],
})
export class ScanSlideComponent implements OnInit {
  @Output() dataExported: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('hiddenInput') hiddenInput: ElementRef | undefined;
  scannedData: any;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // Lock the focus on the hidden input field after the view is initialized
    if (this.hiddenInput) {
      this.hiddenInput.nativeElement.focus();
    }
  }
  nextSlide() {
    this.dataExported.emit(2);
  }
}
