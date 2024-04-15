import { Component } from '@angular/core';
import { Visit } from 'src/app/resources/visit';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-visits-overview',
  templateUrl: './visits-overview.component.html',
  styleUrls: ['./visits-overview.component.css'],
})
export class VisitsOverviewComponent {
  visitsFromDB: Visit[] = [];
  tableData: Visit[] = [];
  filter = {
    fromDate: new Date(),
    toDate: new Date(),
    pageSize: 5,
    page: 1,
  };
  totalPages: number = 5;

  constructor(private apiClient: ApiClientService) {}

  ngOnInit() {
    this.getVisits();
  }

  getVisits() {
    this.apiClient
      .getAll<Visit[]>(
        'visits?page=' + this.filter.page + '&pageSize=' + this.filter.pageSize
      )
      .subscribe({
        next: (visits) => {
          this.visitsFromDB = visits;
          this.handlePageChange(this.filter.page); // Update tableData after fetching new data
          this.handleSearch(''); // Refresh tableData when new data is fetched
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  handlePageChange(page: number) {
    this.filter.page = page;
    const startIndex = (page - 1) * this.filter.pageSize;
    const endIndex = startIndex + this.filter.pageSize;
    this.tableData = this.visitsFromDB.slice(startIndex, endIndex);
  }

  handleSearch(searchTerm: string) {
    this.filter.page = 1;
    if (searchTerm === '') {
      // If search term is empty, show all visits
      this.totalPages = Math.ceil(
        this.visitsFromDB.length / this.filter.pageSize
      );
      this.tableData = this.visitsFromDB.slice(0, this.filter.pageSize);
    } else {
      // Filter visits based on search term

      this.tableData = this.visitsFromDB.filter((visit) =>
        this.matchSearchTerm(visit, searchTerm)
      );
    }
  }

  // Helper function to check if a visit matches the search term
  matchSearchTerm(visit: Visit, searchTerm: string): boolean {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    return (
      visit.name.toLowerCase().includes(normalizedSearchTerm) ||
      visit.companyName.toLowerCase().includes(normalizedSearchTerm) ||
      visit.host.toLowerCase().includes(normalizedSearchTerm) ||
      visit.email.toLowerCase().includes(normalizedSearchTerm)
    );
  }
}
