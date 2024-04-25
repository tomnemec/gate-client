import { ApiClientService } from './../../services/api-client.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrl: './dialog-popup.component.css',
})
export class DialogPopupComponent {
  @Output() popStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() objectForAction: Object = {} as Object;
  @Input() apiEndpoint: string = '';

  constructor(private apiClient: ApiClientService) {}
  ngOnInit() {
    console.log(this.objectForAction);
  }
  closePopup() {
    this.popStatus.emit(false);
  }
  performAction() {
    this.apiClient
      .update<Object>(this.objectForAction, this.apiEndpoint)
      .subscribe({
        next: (visit) => {},
        complete: () => {
          console.log('Record updated');
          this.popStatus.emit(false);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
