import { Component } from '@angular/core';
import { SaveVisit } from 'src/app/resources/save-visit';
import { Visit } from 'src/app/resources/visit';
import { ApiClientService } from 'src/app/services/api-client.service';
import { getDateString } from 'src/app/services/helpers';

@Component({
  selector: 'app-visits-overview',
  templateUrl: './visits-overview.component.html',
  styleUrls: ['./visits-overview.component.css'],
})
export class VisitsOverviewComponent {
  visitsFromDB: Visit[] = [];
  tableData: Visit[] = [];
  filter = {
    fromDate: getDateString(new Date(), -7),
    toDate: getDateString(new Date(), 7),
    pageSize: 5,
    page: 1,
    searchTerm: '',
  };
  totalPages: number = 5;

  constructor(private apiClient: ApiClientService) {}

  ngOnInit() {
    this.getVisits();
  }

  getVisits() {
    console.log(this.filter);
    this.apiClient
      .getAll<Visit[]>(
        'visits?page=' +
          this.filter.page +
          '&pageSize=' +
          this.filter.pageSize +
          '&fromDate=' +
          this.filter.fromDate +
          '&toDate=' +
          this.filter.toDate
      )
      .subscribe({
        next: (visits) => {
          this.visitsFromDB = visits;
          this.handlePageChange(this.filter.page); // Update tableData after fetching new data
          this.handleSearch(); // Refresh tableData when new data is fetched
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
  //implemented not tested
  updateRent(visit: Visit,status:string)
  {
    let visitToSave ={
      name:visit.name,
      companyName:visit.companyName,
      host:visit.host,
      visitDate:visit.visitDate,
      email:visit.email,
      visitStatus:status
    };
    this.apiClient.update<SaveVisit>(visitToSave,'visits/'+ visit.id).subscribe({

      next: (visit) => {
        this.getVisits();
      },
      complete: () => {
        console.log('Visit updated');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  handlePageChange(page: number) {
    this.filter.page = page;
    this.handleSearch(); // Apply search and update tableData
  }

  handleSearch() {
    if (this.filter.searchTerm === '') {
      // If search term is empty, show all visits
      this.tableData = this.visitsFromDB;
    } else {
      // Filter visits based on search term
      this.tableData = this.visitsFromDB.filter((visit) =>
        this.matchSearchTerm(visit, this.filter.searchTerm)
      );
    }

    // Apply pagination
    const startIndex = (this.filter.page - 1) * this.filter.pageSize;
    const endIndex = startIndex + this.filter.pageSize;
    this.tableData = this.tableData.slice(startIndex, endIndex);
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
