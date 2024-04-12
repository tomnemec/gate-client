export interface PaginatedResponse<T> {
  data: T[];
  totalItems: number;
  totalPages: number;
  pageSize: number;
}
