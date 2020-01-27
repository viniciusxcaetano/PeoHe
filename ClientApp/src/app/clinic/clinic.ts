import { ClinicDoctor } from "../models/ClinicDoctor";
import { Attendance } from "../attendance/attendance";

export class Clinic {
  clinicId: string;
  name: string;
  percentage: number;
  clinicDoctors: ClinicDoctor[];
  attendances: Attendance[];
  deleted: string;
  aplicationUserId: string;
}
