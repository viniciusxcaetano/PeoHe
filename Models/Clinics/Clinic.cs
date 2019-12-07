using Peohe.Models.Balances;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Peohe.Models.Clinics
{
    public class Clinic
    {
        public int ClinicId { get; set; }
        public ICollection<Balance> Balances { get; set; }
    }
}
