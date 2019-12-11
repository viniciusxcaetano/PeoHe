using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Peohe.Models
{
    public class ClinicDoctor
    {
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }
        public int ClinicId { get; set; }
        public Clinic Clinic { get; set; }
    }
}