using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Peohe.Models;

namespace Peohe.Db.Configuration
{
    public class BalanceConfiguration : IEntityTypeConfiguration<Balance>
    {
        public void Configure(EntityTypeBuilder<Balance> builder)
        {
            //Table
            builder.ToTable("Balance");

            //Key
            builder.HasKey(balance => balance.BalanceId);

            //Identity
            builder.Property(balance => balance.BalanceId).IsRequired().UseIdentityColumn();

            //Fields
            builder.Property(balance => balance.Paid);
            builder.Property(balance => balance.ToReceive);
        }
    }
}