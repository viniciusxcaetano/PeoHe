import { TypeOfPayment } from "../core/enum";

export class Attendance {
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