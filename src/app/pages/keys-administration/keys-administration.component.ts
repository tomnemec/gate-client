import { Component } from '@angular/core';
import { Key } from 'src/app/resources/key';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-keys-administration',
  templateUrl: './keys-administration.component.html',
  styleUrl: './keys-administration.component.css',
})
export class KeysAdministrationComponent {
  keys: Key[] = [];
  keyToSave: Key = {
    code: '444444',
    room: 'Jídelna',
  };
  filter = {
    searchTerm: '',
  };
  constructor(private apiClient: ApiClientService) {}
  ngOnInit(): void {
    this.getKeys();
  }

  getKeys() {
    this.apiClient.getAll<Key[]>('keys').subscribe({
      next: (keys) => {
        this.keys = keys;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  createKeyRecord() {
    console.log('trigger');
    this.apiClient.create<Key>(this.keyToSave, 'keys').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.getKeys();
      },
    });
  }
}
