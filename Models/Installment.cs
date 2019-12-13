﻿using System;

namespace Peohe.Models
{
    public class Installment
    {
        public int InstallmentId { get; set; }
        public double Amount { get; set; }
        public bool? Paid { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime? PayDay { get; set; }
        public DateTime? Deleted { get; set; }
        public string Historic { get; set; }
        public Attendance Attendance { get; set; }
    }
}