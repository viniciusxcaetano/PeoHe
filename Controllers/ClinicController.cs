using Microsoft.AspNetCore.Mvc;
using Peohe.Db;
using Peohe.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;

namespace Peohe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicController : ControllerBase
    {
        private readonly PeoheDbContext dbContext;

        public ClinicController(PeoheDbContext context)
        {
            dbContext = context;
        }

        [HttpGet("GetClinic")]
        public ActionResult<Clinic> GetClinic(Guid clinicId)
        {
            return dbContext.Clinics.FirstOrDefault(c => c.ClinicId == clinicId && c.Deleted == null);
        }

        [HttpPost("CreateClinic")]
        public ActionResult<int> CreateClinic(Clinic clinic)
        {
            //clinic.AplicationUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            try
            {
                dbContext.Clinics.Add(clinic);
                dbContext.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}