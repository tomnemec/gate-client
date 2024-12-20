import { Key } from './key';

export interface KeyRental {
  rfid: string;
  key: Key;
  status: string;
  startRentDate: Date;
  endRentDate:Date;
}
