using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Peohe.Models;

namespace Peohe.Db.Configuration
{
    public class ClinicConfiguration : IEntityTypeConfiguration<Clinic>
    {
        public void Configure(EntityTypeBuilder<Clinic> builder)
        {
            //Table
            builder.ToTable("Clinic");

            //Key
            builder.HasKey(clinic => clinic.ClinicId);

            //Identity
            builder.Property(clinic => clinic.ClinicId).IsRequired().UseIdentityColumn();

            //Fields
            builder.Property(clinic => clinic.Name).IsRequired();
            builder.Property(clinic => clinic.Percentage);
            builder.Property(clinic => clinic.Deleted);
        }
    }
}