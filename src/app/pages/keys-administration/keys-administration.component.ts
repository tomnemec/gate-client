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
}
