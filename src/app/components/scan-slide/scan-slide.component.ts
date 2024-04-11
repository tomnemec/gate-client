import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { SaveVisit } from 'src/app/resources/save-visit';

@Component({
  selector: 'scan-slide',
  templateUrl: './scan-slide.component.html',
  styleUrls: ['./scan-slide.component.css'],
})
export class ScanSlideComponent implements OnInit {
  @Output() dataExported: EventEmitter<number> = new EventEmitter<number>();
  @Output() scanVisit: EventEmitter<SaveVisit> = new EventEmitter<SaveVisit>();
  @ViewChild('hiddenInput') hiddenInput: ElementRef | undefined;

  visitToSave: SaveVisit = {} as SaveVisit;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Lock the focus on the hidden input field after the view is initialized
    if (this.hiddenInput) {
      this.hiddenInput.nativeElement.focus();
    }

    // Add event listener to capture keydown events globally
    document.addEventListener('keydown', this.handleGlobalKeyDown.bind(this));
  }

  ngOnDestroy(): void {
    // Remove the event listener when the component is destroyed to prevent memory leaks
    document.removeEventListener(
      'keydown',
      this.handleGlobalKeyDown.bind(this)
    );
  }

  handleGlobalKeyDown(event: KeyboardEvent): void {
    // Check if the focus is not on the hidden input element
    if (document.activeElement !== this.hiddenInput?.nativeElement) {
      // Set the focus back to the hidden input element
      this.hiddenInput?.nativeElement.focus();
    }
  }

  handleScan(input: string): void {
    const valuesArray = JSON.parse(input);
    this.visitToSave = {
      name: valuesArray[0],
      email: valuesArray[1],
      companyName: valuesArray[2],
      host: valuesArray[3],
      visitDate: new Date(),
      visitStatus: 'Active',
    };

    this.scanVisit.emit(this.visitToSave);
    this.nextSlide();
  }

  nextSlide(): void {
    this.dataExported.emit(2);
  }
}
