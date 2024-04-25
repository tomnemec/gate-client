import { Component } from '@angular/core';
import { KeyRental } from 'src/app/resources/keyRental';
import { SaveKeyRental } from 'src/app/resources/save-keyRental';
import { ApiClientService } from 'src/app/services/api-client.service';
import { getDateString } from 'src/app/services/helpers';

@Component({
  selector: 'app-key-rentals-overview',
  templateUrl: './key-rentals-overview.component.html',
  styleUrl: './key-rentals-overview.component.css',
})
export class KeyRentalsOverviewComponent {
  rentalsFromDB: KeyRental[] = [];
  tableData: KeyRental[] = [];
  filter = {
    fromDate: getDateString(new Date(), -7),
    toDate: getDateString(new Date(), 7),
    pageSize: 5,
    page: 1,
    searchTerm: '',
  };
  totalPages: number = 5;

  showPopup = false;

  constructor(private apiClient: ApiClientService) {}

  ngOnInit() {
    this.getRents();
  }
  getRents() {
    this.apiClient.getAll<KeyRental[]>('key-rentals').subscribe({
      next: (rentals) => {
        console.log(rentals);
        this.rentalsFromDB = rentals;
        this.handleSearch(); // Refresh tableData when new data is fetched
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  handleSearch() {
    if (this.filter.searchTerm === '') {
      // If search term is empty, show all visits
      this.tableData = this.rentalsFromDB;
    } else {
      // Filter visits based on search term
      this.tableData = this.rentalsFromDB.filter((rental) =>
        this.matchSearchTerm(rental, this.filter.searchTerm)
      );
    }
  }
  matchSearchTerm(visit: KeyRental, searchTerm: string): boolean {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    return (
      visit.key.code.toLowerCase().includes(normalizedSearchTerm) ||
      visit.key.room.toLowerCase().includes(normalizedSearchTerm) ||
      visit.rfid.toLowerCase().includes(normalizedSearchTerm)
    );
  }
  updateRent(rent: KeyRental, status: string) {
    let rentToSave = {
      keyCode: rent.key.code,
      RFID: rent.rfid,
      status: status,
    };
    console.log(rent);
    console.log(rentToSave);
    this.apiClient.update<SaveKeyRental>(rentToSave, 'key-rentals').subscribe({
      next: (visit) => {
        this.getRents();
      },
      complete: () => {
        console.log('Rent updated');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
