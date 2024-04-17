import { Component, Input } from '@angular/core';
import { SaveKeyRental } from 'src/app/resources/save-keyRental';

@Component({
  selector: 'key-form',
  templateUrl: './key-form.component.html',
  styleUrl: './key-form.component.css',
})
export class KeyFormComponent {
  @Input() keyRent: SaveKeyRental = {} as SaveKeyRental;
}
