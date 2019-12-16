using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Peohe.Db;
using Peohe.Models;
using Peohe.Services;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Peohe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstallmentController : ControllerBase
    {
        private readonly PeoheDbContext dbContext;
        private readonly InstallmentService installmentService;

        public InstallmentController(PeoheDbContext context, InstallmentService balanceService)
        {
            dbContext = context;
            this.installmentService = balanceService;
        }

        [HttpGet("GetInstallment")]
        public ActionResult<Installment> GetInstallment(Guid installmentId)
        {
            return dbContext.Installments.Include(i => i.Attendance)
                .FirstOrDefault(i => i.InstallmentId == installmentId && i.Deleted == null);
        }

        [HttpGet("GetInstallmentsByAttendance")]
        public ActionResult<IEnumerable<Installment>> GetInstallments(Guid attendanceId)
        {
            return dbContext.Installments.Include(i => i.Attendance)
                .Where(i => i.Attendance.AttendanceId == attendanceId && i.Deleted == null).ToList();
        }

        [HttpGet("GetInstallmentsExpired")]
        public ActionResult<IEnumerable<Installment>> GetInstallmentsExpired()
        {
            return dbContext.Installments
                .Where(i => i.DueDate > DateTime.Parse(DateTime.Now.ToString("MM/dd/yyyy HH:mm:ss")))
                .Where(i => i.Paid == null && i.Deleted == null)
                .ToList();
        }
    }
}