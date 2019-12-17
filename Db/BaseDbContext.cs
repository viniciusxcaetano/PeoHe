using Microsoft.EntityFrameworkCore;
using Peohe.Models;

namespace Peohe.Db
{
    public class BaseDbContext : DbContext
    {
        public BaseDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<Clinic> Clinics { get; set; }
        public DbSet<ClinicDoctor> ClinicDoctors { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Installment> Installments { get; set; }
    }
}