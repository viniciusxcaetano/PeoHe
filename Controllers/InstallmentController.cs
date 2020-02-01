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

        public InstallmentController(PeoheDbContext context, InstallmentService installmentService)
        {
            dbContext = context;
            this.installmentService = installmentService;
        }

        [HttpGet("GetInstallment")]
        public ActionResult<Installment> GetInstallment(Guid installmentId)
        {
            return dbContext.Installments
                .FirstOrDefault(i => i.InstallmentId == installmentId && i.Deleted == null);
        }

        [HttpGet("GetInstallmentsByAttendanceId")]
        public ActionResult<IEnumerable<Installment>> GetInstallmentsByAttendanceId(Guid attendanceId)
        {
            return dbContext.Installments
                .Where(i => i.AttendanceId == attendanceId && i.Deleted == null).ToList();
        }

        [HttpGet("GetInstallmentsExpired")]
        public ActionResult<IEnumerable<Installment>> GetInstallmentsExpired()
        {
            return dbContext.Installments
                .Where(i => i.DueDate > DateTime.Now)
                .Where(i => i.Paid == null && i.Deleted == null)
                .ToList();
        }
    }
}