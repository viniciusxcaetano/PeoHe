using Peohe.Models.Clinics;
using Peohe.Models.Doctors;

namespace Peohe.Models.Balances
{
    public class Balance
    {
        public int BalanceId { get; set; }
        public double ToReceive { get; set; }
        public double Paid { get; set; }
        public Clinic Clinic { get; set; }
        public Doctor Doctor { get; set; }
    }
}

