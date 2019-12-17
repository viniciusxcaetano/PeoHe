using Microsoft.EntityFrameworkCore;
using Peohe.Db.Configuration;

namespace Peohe.Db
{
    public class PeoheDbContext : BaseDbContext
    {
        public PeoheDbContext(DbContextOptions<PeoheDbContext> options) : base(options)
        {
            base.Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AttendanceConfiguration());
            modelBuilder.ApplyConfiguration(new ClinicConfiguration());
            modelBuilder.ApplyConfiguration(new ClinicDoctorConfiguration());
            modelBuilder.ApplyConfiguration(new DoctorConfiguration());
            modelBuilder.ApplyConfiguration(new InstallmentConfiguration());
        }
    }
}