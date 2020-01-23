using Microsoft.AspNetCore.Mvc;
using Peohe.Db;
using Peohe.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Peohe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicController : ControllerBase
    {
        private readonly PeoheDbContext dbContext;

        public ClinicController(PeoheDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet("GetClinics")]
        public ActionResult<IEnumerable<Clinic>> GetClinics()
        {
            return dbContext.Clinics.Where(c => c.Deleted == null).ToList();
        }
        [HttpPost("CreateClinic")]
        public ActionResult<Clinic> CreateClinic(Clinic clinic)
        {
            dbContext.Clinics.Add(clinic);
            dbContext.SaveChanges();

            return clinic;
        }
    }
}
