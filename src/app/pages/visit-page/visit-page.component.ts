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
  language = 'uk';
  slide = 1;
  notifData = {} as NotificationData;
  saveVisit: SaveVisit = {} as SaveVisit;

  ngOnInit(): void {}
  handleExportedData(slide: number) {
    this.slide = slide;
    if (slide === 1) {
      this.saveVisit = {} as SaveVisit;
    }
  }
  handleNotifStatus(notifData: NotificationData) {
    this.notifData = notifData;
    setTimeout(() => {
      this.notifData = { notifStatus: '', notifText: '', notifIcon: '' };
    }, 3000);
  }
  handleScan(visit: SaveVisit) {
    this.saveVisit = visit;
  }
  languageChange(language: string) {
    this.language = language;
  }
}
