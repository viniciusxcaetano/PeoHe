
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Peohe.Models
{
    public class ClinicDoctor
    {
        public Guid DoctorId { get; set; }
        public Doctor Doctor { get; set; }
        public int ClinicId { get; set; }
        public Clinic Clinic { get; set; }
    }
}