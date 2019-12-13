using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Peohe.Models;

namespace Peohe.Db.Configuration
{
    public class InstallmentConfiguration : IEntityTypeConfiguration<Installment>
    {
        public void Configure(EntityTypeBuilder<Installment> builder)
        {
            //Table
            builder.ToTable("Balance");

            //Key
            builder.HasKey(installment => installment.InstallmentId);

            //Identity
            builder.Property(installment => installment.InstallmentId).IsRequired().UseIdentityColumn();

            //Fields
            builder.Property(installment => installment.Paid);
        }
    }
}