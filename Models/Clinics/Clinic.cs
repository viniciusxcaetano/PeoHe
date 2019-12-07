using Peohe.Models.Balances;
using System.Collections.Generic;

namespace Peohe.Models.Clinics
{
    public class Clinic
    {
        public int ClinicId { get; set; }
        public string Name { get; set; }
        public ICollection<Balance> Balances { get; set; }
    }
}
