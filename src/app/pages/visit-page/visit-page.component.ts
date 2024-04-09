import { SaveVisit } from './../../resources/save-visit';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NotificationData } from 'src/app/resources/notificationData';

@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
  styleUrls: ['./visit-page.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate(
          '300ms 300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0%)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'translateX(-100%)' })
        ),
      ]),
    ]),
  ],
})
export class VisitPageComponent implements OnInit {
  slide = 1;
  notifData = {} as NotificationData;
  saveVisit: SaveVisit = {} as SaveVisit;

  ngOnInit(): void {
    console.log(this.slide);
  }
  handleExportedData(slide: number) {
    this.slide = slide;
  }
  handleNotifStatus(notifData: NotificationData) {
    this.notifData = notifData;
  }
}
