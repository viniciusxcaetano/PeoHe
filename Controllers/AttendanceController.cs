using Microsoft.AspNetCore.Mvc;
using Peohe.Db;
using Peohe.Models;
using Peohe.Services;
using System;
using System.Collections.Generic;
using System.Linq;
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