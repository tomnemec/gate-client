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

  constructor(private apiClient: ApiClientService) {}

  ngOnInit(): void {}

  createVisit() {
    this.triggerNotif({
      notifStatus: 'success',
      notifText: 'Visit created successfully!',
    });
  }

  triggerNotif(notif: NotificationData) {
    this.dataExported.emit(notif);
  }
}
