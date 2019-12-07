using Microsoft.EntityFrameworkCore;
using Peohe.Db.Configuration.Balances;

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
            modelBuilder.ApplyConfiguration(new BalanceConfiguration());
        }
    }
}