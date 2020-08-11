namespace Peohe.Models.Enum
{
    public class Attendance
    {
        public enum Status
        {
            Aberto,
            Pago,
            Vencido,

        }
        public enum TypeOfPayment
        {
            Debito,
            Credito,
            Convenio
        }
    }
}