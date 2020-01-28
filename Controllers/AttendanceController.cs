using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Peohe.Db;
using Peohe.Models;
using Peohe.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using static Peohe.Models.Enum.Attendance;

namespace Peohe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendanceController : ControllerBase
    {
        private readonly PeoheDbContext dbContext;
        private readonly AttendanceService attendanceService;
        public AttendanceController(PeoheDbContext context, AttendanceService attendanceService)
        {
            dbContext = context;
            this.attendanceService = attendanceService;
        }

        [HttpGet("GetAttendance")]
        public ActionResult<Attendance> GetAttendance(Guid attendanceId)
        {
            var attendance = dbContext.Attendances
                .Where(a => a.AttendanceId == attendanceId && a.Deleted == null).FirstOrDefault();

            var installments = dbContext.Installments.Where(i => i.AttendanceId == attendanceId).ToList();

            return attendance;

            //return dbContext.Attendances.Include(a => a.Installments)
            //    .FirstOrDefault(a => a.AttendanceId == attendanceId && a.Deleted == null);
        }

        [HttpGet("GetAttendances")]
        public ActionResult<IEnumerable<Attendance>> GetAttendances()
        {
            return dbContext.Attendances.Where(a => a.Deleted == null).ToList();
        }

        [HttpGet("GetAttendancesPaid")]
        public ActionResult<IEnumerable<Attendance>> GetAttendancesPaid()
        {
            return dbContext.Attendances.Where(a => a.Paid == true && a.Deleted == null).ToList();
        }

        [HttpGet("GetAttendancesUnpaid")]
        public ActionResult<IEnumerable<Attendance>> GetAttendancesUnpaid()
        {
            return dbContext.Attendances.Where(a => a.Paid == null && a.Deleted == null).ToList();
        }

        [HttpGet("GetAttendancesByMonth")]
        public ActionResult<IEnumerable<Attendance>> GetAttendancesByMonth(int? month)
        {
            return dbContext.Attendances
                .Where(a => a.CreationDate.Month == (month.HasValue ? month : DateTime.Now.Month)
                && a.Deleted == null).ToList();
        }

        [HttpPost("CreateAttendance")]
        public ActionResult<Attendance> CreateAttendance(Attendance attendance)
        {
            //attendance.AplicationUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

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
                        AttendanceId = attendance.AttendanceId
                    };
                    installments.Add(installment);
                }
                attendance.Installments = installments;

                dbContext.Attendances.Add(attendance);
            }
            var test = attendance;
            dbContext.SaveChanges();

            return attendance;
        }
        [HttpDelete("DeleteAttendance")]
        public void DeleteAttendance(Guid attendanceId)
        {
            var attendance = dbContext.Attendances.Where(a => a.AttendanceId == attendanceId).FirstOrDefault();
            attendance.Deleted = DateTime.Now;
            dbContext.SaveChanges();
        }

        [HttpGet("DeleteAll")]
        public void DeleteAll()
        {
            var attendantes = dbContext.Attendances.Where(a => a.Deleted == null).ToList();

            foreach (var attendance in attendantes)
            {
                attendance.Deleted = DateTime.Now;
            }
            dbContext.SaveChanges();
        }
    }
}