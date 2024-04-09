import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificationData } from 'src/app/resources/notificationData';
import { SaveVisit } from 'src/app/resources/save-visit';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'training-slide',
  templateUrl: './training-slide.component.html',
  styleUrls: ['./training-slide.component.css'],
})
export class TrainingSlideComponent implements OnInit {
  @Input() visitToSave: SaveVisit = {} as SaveVisit;
  @Output() dataExported: EventEmitter<NotificationData> =
    new EventEmitter<NotificationData>();

  triggerFadeout = false;

  constructor(private apiClient: ApiClientService) {}

  ngOnInit(): void {}

  createVisit() {
    this.apiClient.create<SaveVisit>(this.visitToSave, 'visits').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
        console.log(error.error.message);
        this.triggerNotif({
          notifStatus: 'Error',
          notifText: 'Visit registration failed!',
          notifIcon: 'bi bi-x-circle',
        });
      },
      complete: () => {
        this.triggerNotif({
          notifStatus: 'Welcome',
          notifText: 'Visit registered successfully!',
          notifIcon: 'bi bi-check-circle',
        });
      },
    });
  }

  triggerNotif(notif: NotificationData) {
    this.dataExported.emit(notif);
    this.triggerFadeout = true;
    setTimeout(() => {
      this.triggerFadeout = false;
      this.dataExported.emit({ notifStatus: '', notifText: '', notifIcon: '' });
    }, 3000);
  }
}
