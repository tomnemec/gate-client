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
  @Input() action: string = '';

  constructor(private apiClient: ApiClientService) {}
  ngOnInit() {
    console.log(this.objectForAction);
  }
  closePopup() {
    this.popStatus.emit(false);
  }
  performAction() {
    if (this.action === 'update') {
      this.udpateObject();
    } else if (this.action === 'delete') {
      this.deleteObject();
    }
  }
  udpateObject() {
    this.apiClient
      .update<Object>(this.objectForAction, this.apiEndpoint)
      .subscribe({
        next: (visit) => {},
        complete: () => {
          this.popStatus.emit(false);
          window.location.reload();
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  //test delete if by id or how?
  deleteObject() {
    this.apiClient.delete(this.apiEndpoint).subscribe({
      next: (r) => {},
      complete: () => {
        this.popStatus.emit(false);
        window.location.reload();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
