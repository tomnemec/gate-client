import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeInOut, slideInOut } from 'src/app/animations/animations';
import { NotificationData } from 'src/app/resources/notificationData';
import { SaveKeyRental } from 'src/app/resources/save-keyRental';
import { getText } from 'src/app/services/text-service';
@Component({
  selector: 'key-rental',
  templateUrl: './key-rental.component.html',
  styleUrl: './key-rental.component.css',
  animations: [slideInOut, fadeInOut],
})
export class KeyRentalComponent {
  slide = 1;
  notifData = {} as NotificationData;
  keyRentToSave = {} as SaveKeyRental;
  language: string = 'cz';
  titulek: string="";

  getText = getText;

  handleExportedData(slide: number) {
    this.slide = slide;
    
  }
  handleScan(code: string) {
    if (this.slide === 1) {
      this.keyRentToSave.keyCode = code;
    }
    if (this.slide === 2) {
      this.keyRentToSave.RFID = code;
    }
  }
  languageChange(language: string) {
    this.language = language;
  }
  handleNotifStatus(notifData: NotificationData) {
    this.notifData = notifData;
    setTimeout(() => {
      this.notifData = { notifStatus: '', notifText: '', notifIcon: '' };
    }, 3000);
  }
}
