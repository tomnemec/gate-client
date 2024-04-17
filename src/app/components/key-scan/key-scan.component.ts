import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'key-scan',
  templateUrl: './key-scan.component.html',
  styleUrl: './key-scan.component.css',
})
export class KeyScanComponent {
  @ViewChild('hiddenInput') hiddenInput: ElementRef | undefined;
  @Input() title: string = '';
  @Input() imgName: string = '';
  @Output() scanKey: EventEmitter<string> = new EventEmitter<string>();
  @Output() dataExported: EventEmitter<number> = new EventEmitter<number>();

  keyCode: string = '';

  ngAfterViewInit(): void {
    // Lock the focus on the hidden input field after the view is initialized
    if (this.hiddenInput) {
      this.hiddenInput.nativeElement.focus();
    }

    // Add event listener to capture keydown events globally
    document.addEventListener('keydown', this.handleGlobalKeyDown.bind(this));
  }
  handleGlobalKeyDown(event: KeyboardEvent): void {
    // Check if the focus is not on the hidden input element
    if (document.activeElement !== this.hiddenInput?.nativeElement) {
      // Set the focus back to the hidden input element
      this.hiddenInput?.nativeElement.focus();
    }
  }

  handleScan(input: string): void {
    this.scanKey.emit(input);
    this.nextSlide();
  }

  nextSlide(): void {
    if (this.title === 'Key') this.dataExported.emit(2);
    if (this.title === 'RFID') this.dataExported.emit(3);
  }
}
