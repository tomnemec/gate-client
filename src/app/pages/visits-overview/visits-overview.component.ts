import { Component } from '@angular/core';
import { Visit } from 'src/app/resources/visit';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-visits-overview',
  templateUrl: './visits-overview.component.html',
  styleUrl: './visits-overview.component.css',
})
export class VisitsOverviewComponent {
  visitsFromDB: Visit[] = [];
  tableData: Visit[] = [];

  constructor(private apiClient: ApiClientService) {}

  ngOnInit() {
    this.getVisits();
  }
  getVisits() {
    this.apiClient.getAll<Visit[]>('visits').subscribe({
      next: (visits) => {
        this.visitsFromDB = visits;
        this.handleSearch('');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  handleSearch(searchTerm: string) {
    console.log(searchTerm);
    if (searchTerm === '') {
      this.tableData = this.visitsFromDB;
      return;
    } else {
      this.tableData = this.visitsFromDB.filter((visit) => {
        return (
          visit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          visit.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          visit.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
          visit.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }
  }
}
