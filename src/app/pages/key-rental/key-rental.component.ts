import { Component } from '@angular/core';
import { fadeInOut, slideInOut } from 'src/app/animations/animations';
import { NotificationData } from 'src/app/resources/notificationData';

@Component({
  selector: 'key-rental',
  templateUrl: './key-rental.component.html',
  styleUrl: './key-rental.component.css',
  animations: [slideInOut, fadeInOut],
})
export class KeyRentalComponent {
  slide = 1;
  notifData = {} as NotificationData;
  keyCode: string = '';

  handleExportedData(slide: number) {
    this.slide = slide;
  }
  handleScan(code: string) {
    this.keyCode = code;
    console.log(this.keyCode);
  }
}
