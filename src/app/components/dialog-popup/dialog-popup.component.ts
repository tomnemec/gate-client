import { SaveKeyRental } from 'src/app/resources/save-keyRental';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrl: './dialog-popup.component.css',
})
export class DialogPopupComponent {
  @Output() popStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() saveKeyRental: SaveKeyRental = {} as SaveKeyRental;

  constructor(private apiClient: ApiClientService) {}
  ngOnInit() {
    console.log(this.saveKeyRental);
  }
  closePopup() {
    this.popStatus.emit(false);
  }
  updateRent() {
    this.apiClient
      .update<SaveKeyRental>(this.saveKeyRental, 'key-rentals')
      .subscribe({
        next: (visit) => {},
        complete: () => {
          console.log('Rent updated');
          this.popStatus.emit(false);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
