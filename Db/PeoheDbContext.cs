using Microsoft.EntityFrameworkCore;
using Peohe.Db.Configuration.Attendances;
using Peohe.Db.Configuration.Balances;
using Peohe.Db.Configuration.Clinics;
using Peohe.Db.Configuration.Doctors;
using Peohe.Db.Configuration.Users;

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
            modelBuilder.ApplyConfiguration(new BalanceConfiguration());
            modelBuilder.ApplyConfiguration(new ClinicConfiguration());
            modelBuilder.ApplyConfiguration(new DoctorConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
        }
    }
}