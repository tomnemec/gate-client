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
  rentToSave: SaveKeyRental = {} as SaveKeyRental;
  valueDate: any;
  currentDate: Date = new Date();

  filter = {
    fromDate: getDateString(new Date(), -7),
    toDate: getDateString(new Date(), 7),
    pageSize: 5,
    page: 1,
    searchTerm: '',
  };
  totalPages: number = 5;

  showPopUp: boolean = false;

  constructor(private apiClient: ApiClientService) {}

  ngOnInit() {
    this.transformDate(this.currentDate);
    this.filter.fromDate = this.valueDate;
    this.filter.toDate = this.valueDate;
    this.getRents();
  }

  async transformDate(value: Date | null) {
    if (value != null) {
      const inputDate = new Date(value);
      const year = inputDate.getFullYear();
      const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
      const day = String(inputDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      this.valueDate = new Date(formattedDate).toLocaleDateString('fr-CA');
      value = null;
    }
  }


  getRents() {
    this.apiClient.getAll<KeyRental[]>(
      'key-rentals?page=' +
        this.filter.page +
        '&pageSize=' +
        this.filter.pageSize +
        '&fromDate=' +
        this.filter.fromDate +
        '&toDate=' +
        this.filter.toDate
    ).subscribe({
      next: (rentals) => {
        this.rentalsFromDB = rentals;
        this.handleSearch(); // Refresh tableData when new data is fetched
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  getRents2() {
    this.apiClient.getAll<KeyRental[]>('key-rentals').subscribe({
      next: (rentals) => {
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
  handlePopStatus(status: boolean) {
    this.showPopUp = status;
  }
  openDialog(rental: KeyRental, status: string) {
    this.rentToSave = {
      keyCode: rental.key.code,
      RFID: rental.rfid,
      status: status,
    };
    this.showPopUp = true;
  }
}
