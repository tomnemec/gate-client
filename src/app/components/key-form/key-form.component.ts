import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotificationData } from 'src/app/resources/notificationData';
import { SaveKeyRental } from 'src/app/resources/save-keyRental';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'key-form',
  templateUrl: './key-form.component.html',
  styleUrl: './key-form.component.css',
})
export class KeyFormComponent {
  @Input() keyRent: SaveKeyRental = {} as SaveKeyRental;
  @Output() dataExported: EventEmitter<NotificationData> =
    new EventEmitter<NotificationData>();
  @Output() slideExported: EventEmitter<number> = new EventEmitter<number>();
  @Input() language: string = ''; 

  constructor(private apiClinet: ApiClientService) {}
  createRent() {
    this.keyRent.status = 'Rented';
    this.apiClinet
      .create<SaveKeyRental>(this.keyRent, 'key-rentals')
      .subscribe({
        next: (data) => {
         
        },
        error: (err) => {
          console.log(err);
          this.triggerNotif({
            notifStatus: 'Error',
            notifText: err.error || 'Rent registration failed!',
            notifIcon: 'bi bi-x-circle',
          });
        },
        complete: () => {
          this.triggerNotif({
            notifStatus: 'Completed',
            notifText: 'Rent registered successfully!',
            notifIcon: 'bi bi-check-circle',
          });
          this.slideExported.emit(1);
        },
      });
  }
  triggerNotif(notif: NotificationData) {
    this.dataExported.emit(notif);
  }
}
