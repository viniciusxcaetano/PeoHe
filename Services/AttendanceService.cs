using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Peohe.Db;
using Peohe.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using static Peohe.Models.Enum.Attendance;

namespace Peohe.Services
{
    public class AttendanceService
    {
        public void CreateAttendance(PeoheDbContext dbContext, Attendance attendance)
        {
            attendance.CreationDate = DateTime.Now;

            if (attendance.TypeOfPayment == TypeOfPayment.CreditCard)
            {
                List<Installment> installments = new List<Installment>();
                double amount = attendance.Amount / attendance.InstallmentsAmount.Value;
                DateTime dueDate = DateTime.Now;

                for (int i = 0; i < attendance.InstallmentsAmount; i++)
                {
                    dueDate = dueDate.AddMonths(1);

                    Installment installment = new Installment()
                    {
                        InstallmentNumber = i + 1,
                        Amount = amount,
                        DueDate = dueDate,
                        Attendance = new Attendance { AttendanceId = attendance.AttendanceId }
                    };
                    installments.Add(installment);
                }
                attendance.Installments = installments;
            }
            dbContext.Attendances.Add(attendance);
            dbContext.SaveChanges();
        }
    }
}