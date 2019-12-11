using System;
using System.Collections.Generic;

namespace Peohe.Models
{
    public class Clinic
    {
        public int ClinicId { get; set; }
        public string Name { get; set; }
        public ICollection<Balance> Balances { get; set; }
        public double Percentage { get; set; }
        public ICollection<ClinicDoctor> ClinicDoctors { get; set; }
        public ICollection<Attendance> Attendances { get; set; }
        public DateTime? Deleted { get; set; }
    }
}