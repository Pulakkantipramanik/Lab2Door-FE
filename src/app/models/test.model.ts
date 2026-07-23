export interface Test {
  id: number;
  name: string;
  description: string;
  price: number;
  sampleType: string;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
}