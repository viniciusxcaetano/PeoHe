import { TypeOfPayment } from "../enum";

export class Attendance {
  id: number;
  from: string;
  to: string;
  date: Date;

  attendanceId: string;
  typeOfPayment: TypeOfPayment;
  amount: number;
  amountPaid: number;
  percentage: number;
  cardFee: number;
  installmentsAmount: number;
  installmentsPaid: number;
  historic: string;
  paid: boolean;
  creationDate: Date;
  payday: Date;
  deleted: Date;
}