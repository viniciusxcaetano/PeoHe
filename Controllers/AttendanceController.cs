using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Peohe.Db;
using Peohe.Models;
using Peohe.Services;
using System;
using System.Threading.Tasks;

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
        public async Task<ActionResult<Attendance>> GetAttendance(int attendanceId)
        {
            return await dbContext.Attendances.Include(a => a.Installments)
                .FirstOrDefaultAsync(a => a.AttendanceId == attendanceId);
        }

        [HttpPost("CreateAttendance")]
        public ActionResult<int> CreateAttendance(Attendance attendance)
        {
            try
            {
                attendanceService.CreateAttendance(attendance);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}