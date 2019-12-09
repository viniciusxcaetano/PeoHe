using Peohe.Models.Attendances;
using Peohe.Models.Balances;
using Peohe.Models.Clinics;
using System.Collections.Generic;

namespace Peohe.Models.Doctors
{
    public class Doctor
    {
        public int DoctorId { get; set; }
        public string Name { get; set; }
        public int Cpf { get; set; }
        public int ProfessionalRegistration { get; set; }
        public int PhoneNumber { get; set; }
        public Balance Balance { get; set; }
        public ICollection<Clinic> Clinics { get; set; }
        public ICollection<Attendance> Attendances { get; set; }
    }
}
