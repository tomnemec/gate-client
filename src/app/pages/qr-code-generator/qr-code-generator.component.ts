import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { fadeInOut } from 'src/app/animations/animations';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css'],
  animations: [fadeInOut],
})
export class QrCodeGeneratorComponent implements OnInit {
  visitToSave: any = {
    name: '',
    email: '',
    companyName: '',
    host: '',
  };
  url: SafeUrl = '';

  ngOnInit(): void {}
  onCodeChange(url: SafeUrl) {
    this.url = url;
  }
}
