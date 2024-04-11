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
  @Input() visitToSave: SaveVisit = {} as SaveVisit;
  @Output() notifExported: EventEmitter<NotificationData> =
    new EventEmitter<NotificationData>();
  ngOnInit(): void {}

  triggerTraining() {
    console.log(this.visitToSave);
    this.dataExported.emit(3);
    console.log('Slide after training');
  }
  triggerNotif(notif: NotificationData) {
    this.notifExported.emit(notif);
  }
}
