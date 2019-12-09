using Peohe.Models.Attendances;
using Peohe.Models.Balances;
using Peohe.Models.Doctors;
using System.Collections.Generic;

namespace Peohe.Models.Clinics
{
    public class Clinic
    {
        public int ClinicId { get; set; }
        public string Name { get; set; }
        public ICollection<Balance> Balances { get; set; }
        public double Percentage { get; set; }
        public ICollection<Doctor> Doctors { get; set; }
        public ICollection<Attendance> Attendances { get; set; }
    }
}