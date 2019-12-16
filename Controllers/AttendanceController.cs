﻿using Microsoft.AspNetCore.Mvc;
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
            return dbContext.Attendances.Include(a => a.Installments)
                .FirstOrDefault(a => a.AttendanceId == attendanceId && a.Deleted == null);
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