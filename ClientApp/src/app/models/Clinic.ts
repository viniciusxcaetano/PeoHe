import { Attendance } from "../attendance/attendance";
import { ClinicDoctor } from "./ClinicDoctor";

export class Clinic{
    clinicId: string;
    name: string;
    percentage: number;
    clinicDoctors: ClinicDoctor[];
    attendances: Attendance[];
    deleted?: string;
    aplicationUserId: string;
}