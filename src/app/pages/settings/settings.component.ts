import { Component } from '@angular/core';
import { Settings } from 'src/app/resources/settings';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  constructor(private apiClient: ApiClientService) {}
  safetyInstructionsCZ: string = '';
  safetyInstructionsEN: string = '';
  status: string = '';
  ngOnInit() {
    this.getSettings();
  }
  getSettings() {
    this.apiClient.getAll<Settings[]>('settings').subscribe({
      next: (settings) => {
        console.log(settings);
        this.safetyInstructionsCZ = settings[0].safetyInstructionsCZ;
        this.safetyInstructionsEN = settings[0].safetyInstructionsEN;
      },
      complete: () => {
        console.log('Settings fetched');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  updateSettings() {
    let settingsToUpdate: Settings = {
      id: 1,
      safetyInstructionsCZ: this.safetyInstructionsCZ,
      safetyInstructionsEN: this.safetyInstructionsEN,
    };
    this.apiClient.update<Settings>(settingsToUpdate, 'settings').subscribe({
      next: (settings) => {
        console.log(settings);
      },
      complete: () => {
        console.log('Settings updated');
        this.status = 'complete';
        setTimeout(() => {
          this.status = '';
        }, 3000);
      },
      error: (error) => {
        console.error(error);
        this.status = 'error';
      },
    });
  }
}
