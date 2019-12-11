using System;
using System.Collections.Generic;

namespace Peohe.Models
{
    public class Doctor
    {
        public int DoctorId { get; set; }
        public string Name { get; set; }
        public int Cpf { get; set; }
        public int ProfessionalRegistration { get; set; }
        public int PhoneNumber { get; set; }
        public int BalanceId { get; set; }
        public Balance Balance { get; set; }
        public ICollection<ClinicDoctor> ClinicDoctors { get; set; }
        public DateTime? Deleted { get; set; }
    }
}