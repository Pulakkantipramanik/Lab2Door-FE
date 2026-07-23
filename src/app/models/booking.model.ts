export interface BookingRequest {
  testId: number;
  slotTime: string;
  address: string;
}

export interface Booking {
  id: number;
  testName: string;
  price: number;
  slotTime: string;
  status: string;
  address: string;
}