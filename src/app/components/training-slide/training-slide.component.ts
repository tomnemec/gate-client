import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificationData } from 'src/app/resources/notificationData';
import { SaveVisit } from 'src/app/resources/save-visit';
import { Settings } from 'src/app/resources/settings';
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
  @Output() slideExported: EventEmitter<number> = new EventEmitter<number>();

  triggerFadeout = false;
  safetyInstructions: string = '';

  constructor(private apiClient: ApiClientService) {}

  ngOnInit(): void {
    this.getSettings();
  }

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
        this.slideExported.emit(1);
      },
    });
  }

  triggerNotif(notif: NotificationData) {
    this.dataExported.emit(notif);
    this.triggerFadeout = true;
  }
  getSettings() {
    this.apiClient.getAll<Settings[]>('settings').subscribe({
      next: (settings) => {
        this.safetyInstructions = settings[0].safetyInstructions;
      },
      complete: () => {
        console.log('Settings fetched');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
