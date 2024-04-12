import { Component, Input } from '@angular/core';

@Component({
  selector: 'paginator',

  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 5;
  @Input() handlePageChange: Function = () => {};

  totalPagesArray: number[] = [];

  ngOnChanges(changes: any): void {
    console.log(changes);
    if (changes.totalPages.currentValue) {
      this.totalPagesArray = Array(this.totalPages)
        .fill(0)
        .map((x, i) => i + 1);
    }
  }
}
