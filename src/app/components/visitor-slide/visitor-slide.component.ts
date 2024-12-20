import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificationData } from 'src/app/resources/notificationData';
import { SaveVisit } from 'src/app/resources/save-visit';

@Component({
  selector: 'visitor-slide',
  templateUrl: './visitor-slide.component.html',
  styleUrls: ['./visitor-slide.component.css'],
})
export class VisitorSlideComponent implements OnInit {
  @Output() dataExported: EventEmitter<number> = new EventEmitter<number>();
  @Input() language = 'cz';
  @Input() visitToSave: SaveVisit = {} as SaveVisit;
  @Output() notifExported: EventEmitter<NotificationData> =
    new EventEmitter<NotificationData>();
  ngOnInit(): void {}

  triggerTraining() {
    console.log(this.visitToSave)
    if (
      this.visitToSave.name == null || '' ||
      this.visitToSave.email == null ||'' ||
      this.visitToSave.companyName == null ||'' ||
      this.visitToSave.host == null || ''
    ) {
      console.log('ups');
      this.triggerNotif({
        notifStatus: 'Error',
        notifText: 'Please fill in all fields!',
        notifIcon: 'bi bi-x-circle',
      });
    } else {
      this.dataExported.emit(3);
    }
  }
  triggerNotif(notif: NotificationData) {
    this.notifExported.emit(notif);
  }
}
