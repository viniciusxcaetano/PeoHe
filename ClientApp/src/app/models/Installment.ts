import { Attendance } from "../attendance/attendance";

export class Installment {
    installmentId: string;
    amount: number;
    paid?: boolean;
    installmentNumber: number;
    dueDate: string;
    payDay?: string;
    deleted?: string;
    historic: string;
    attendance: Attendance;
    aplicationUserId: string;
}