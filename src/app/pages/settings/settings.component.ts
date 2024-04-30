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
  safetyInstructions: string = '';
  ngOnInit() {
    this.getSettings();
  }
  getSettings() {
    this.apiClient.getAll<Settings[]>('settings').subscribe({
      next: (settings) => {
        console.log(settings);
        this.safetyInstructions = settings[0].safetyInstructions;
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
      safetyInstructions: this.safetyInstructions,
    };
    this.apiClient.update<Settings>(settingsToUpdate, 'settings').subscribe({
      next: (settings) => {
        console.log(settings);
      },
      complete: () => {
        console.log('Settings updated');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
