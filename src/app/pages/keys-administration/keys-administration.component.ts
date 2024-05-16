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
  keyForAction: Key = {} as Key;
  dialogAction: string = '';
  apiEndpoint: string = '';
  keyToSave: Key = {
    code: '',
    room: '',
  };
  showPopUp = false;
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
  openDialog(key: Key, action: string) {
    this.dialogAction = action;
    if (action === 'delete') {
      this.keyForAction = key;
      this.apiEndpoint = 'keys' + '/' + key.code;
    } else if (action === 'update') {
      this.keyForAction = this.keyToSave;
      this.apiEndpoint = 'keys';
    }
    this.showPopUp = true;
  }
  createKeyRecord() {
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
  updateKeyRecord() {
    this.apiClient.update<Key>(this.keyToSave, 'keys').subscribe({
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
  deleteKeyRecord(keyCode: string) {
    this.apiClient.delete(`keys/${keyCode}`).subscribe({
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
  handlePopStatus(status: boolean) {
    this.showPopUp = status;
  }
}
