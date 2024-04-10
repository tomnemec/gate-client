import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css'],
})
export class QrCodeGeneratorComponent implements OnInit {
  myAngularxQrCode: string = '';
  constructor() {
    this.myAngularxQrCode = 'Karel De Grote Hogeschool';
  }

  ngOnInit(): void {}
}
