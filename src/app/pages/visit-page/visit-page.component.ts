import { SaveVisit } from './../../resources/save-visit';
import { Component, OnInit } from '@angular/core';
import { fadeInOut, slideInOut } from 'src/app/animations/animations';
import { NotificationData } from 'src/app/resources/notificationData';

@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
  styleUrls: ['./visit-page.component.css'],
  animations: [slideInOut, fadeInOut],
})
export class VisitPageComponent implements OnInit {
  slide = 1;
  notifData = {} as NotificationData;
  saveVisit: SaveVisit = {} as SaveVisit;

  ngOnInit(): void {
    this.saveVisit = {
      name: 'John Doe',
      host: 'Jane Doe',
      visitDate: new Date(),
      visitTime: 'test',
      visitStatus: 'new',
    };
  }
  handleExportedData(slide: number) {
    this.slide = slide;
  }
  handleNotifStatus(notifData: NotificationData) {
    this.notifData = notifData;
  }
}
