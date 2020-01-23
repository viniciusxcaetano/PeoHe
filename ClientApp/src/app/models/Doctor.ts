import { Attendance } from "../attendance/attendance";
import { ClinicDoctor } from "./ClinicDoctor";


export class Doctor {
    doctorId: string;
    name: string;
    cpf: number;
    professionalRegistration?: number;
    phoneNumber?: number;
    attendances: Attendance[];
    clinicDoctors: ClinicDoctor[];
    deleted?: string;
    aplicationUserId: string;
}