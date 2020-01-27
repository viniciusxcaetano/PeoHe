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

        [HttpGet("GetClinic")]
        public ActionResult<Clinic> GetClinic(Guid clinicId)
        {
            return dbContext.Clinics.Where(c => c.ClinicId == clinicId && c.Deleted == null).FirstOrDefault();
        }

        [HttpGet("GetClinics")]
        public ActionResult<IEnumerable<Clinic>> GetClinics(string name)
        {
            List<Clinic> clinics;

            if (name != null)
                clinics = dbContext.Clinics.Where(c => c.Name.Contains(name) && c.Deleted == null).ToList();
            else
                clinics = dbContext.Clinics.Where(c => c.Deleted == null).ToList();

            return clinics;
        }

        [HttpPost("CreateClinic")]
        public ActionResult<Clinic> CreateClinic(Clinic clinic)
        {
            dbContext.Clinics.Add(clinic);
            dbContext.SaveChanges();

            return clinic;
        }

        [HttpPost("UpdateClinic")]
        public ActionResult<Clinic> UpdateClinic(Clinic clinic)
        {
            var test = dbContext.Clinics.Update(clinic);
            dbContext.SaveChanges();

            return clinic;
        }

        [HttpDelete("DeleteClinic")]
        public ActionResult<Clinic> DeleteClinic(Guid clinicId)
        {
            var clinic = dbContext.Clinics.Where(c => c.ClinicId == clinicId).FirstOrDefault();
            clinic.Deleted = DateTime.Now;

            dbContext.SaveChanges();
            return clinic;
        }
    }
}