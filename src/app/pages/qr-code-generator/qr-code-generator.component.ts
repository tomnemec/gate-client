import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css'],
})
export class QrCodeGeneratorComponent implements OnInit {
  visitToSave: any = {
    name: 'Mickey Mouse',
    email: 'test@gmail.com',
    companyName: 'Disney',
    host: 'Donald Duck',
  };

  constructor() {}

  ngOnInit(): void {}
  downloadQRCode() {}
}
