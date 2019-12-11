namespace Peohe.Models
{
    public class Balance
    {
        public int BalanceId { get; set; }
        public double Paid { get; set; }
        public double ToReceive { get; set; }
        public Clinic Clinic { get; set; }
        public Doctor Doctor { get; set; }
    }
}