import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() language = 'cz';
  @Output() dataExported: EventEmitter<NotificationData> =
    new EventEmitter<NotificationData>();
  @Output() slideExported: EventEmitter<number> = new EventEmitter<number>();

  triggerFadeout = false;
  safetyInstructions: Settings = {} as Settings;

  constructor(private apiClient: ApiClientService, private router: Router) {}

  ngOnInit(): void {
    this.getSettings();
  }

  createVisit() {
    this.visitToSave.visitStatus="New";
    this.apiClient.create<SaveVisit>(this.visitToSave, 'visits').subscribe({
      next: (response) => {
      },
      error: (error) => {
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
        this.safetyInstructions = settings[0];
      },
      complete: () => {
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
