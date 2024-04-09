import { Component, Input, OnInit } from '@angular/core';
import { NotificationData } from 'src/app/resources/notificationData';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  @Input() notifData: NotificationData = {} as NotificationData;
  constructor() {}

  ngOnInit(): void {}
}
