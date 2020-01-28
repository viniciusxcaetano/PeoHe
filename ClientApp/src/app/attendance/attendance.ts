import { TypeOfPayment } from "../models/enum/Attendance";
import { Clinic } from "../models/Clinic";
import { Doctor } from "../models/Doctor";
import { Installment } from "../models/Installment";

export class Attendance {
  attendanceId: string;
  typeOfPayment: TypeOfPayment;
  amount: number;
  amountPaid?: number;
  percentage: number;
  cardFee?: number;
  installmentsAmount?: number;
  installmentsPaid?: number;
  historic: string;
  paid?: boolean;
  creationDate: string;
  payDay?: string;
  deleted?: string;
  installments?: Installment[];
  clinicId: string;
  clinic: Clinic;
  doctor?: Doctor;
  aplicationUserId: string;
}

//mudar depois clinic,doctor nao pode ser vazio, installments nao sei