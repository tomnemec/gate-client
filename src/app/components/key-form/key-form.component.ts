import { Router } from '@angular/router';
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

  constructor(private apiClinet: ApiClientService, private router: Router) {}
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
            notifText: err.error || 'Zápůjčka neúspěšná!',
            notifIcon: 'bi bi-x-circle',
          });
        },
        complete: () => {
          this.triggerNotif({
            notifStatus: 'Hotovo',
            notifText: 'Zápůjčka byla úspěšná',
            notifIcon: 'bi bi-check-circle',
          });
          this.slideExported.emit(1);
          window.setTimeout(() => {this.router.navigate(['/']);
          }, 3000);
        },
      });
  }
  triggerNotif(notif: NotificationData) {
    this.dataExported.emit(notif);
  }
}
