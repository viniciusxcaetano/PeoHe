using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Peohe.Models
{
    public class Attendance
    {
        public int AttendanceId { get; set; }
        public int TypeOfPayment { get; set; } //TODO: criar enum
        public double Amount { get; set; }
        public double? AmountPaid { get; set; }
        public double Percentage { get; set; }
        public double? CardFee { get; set; }
        public int? InstallmentsAmount { get; set; }
        public int? InstallmentsPaid { get; set; }
        public string Historic { get; set; }
        public bool? Paid { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime? Deleted { get; set; }
        public Clinic Clinic { get; set; }
        public Doctor Doctor { get; set; }
    }
}