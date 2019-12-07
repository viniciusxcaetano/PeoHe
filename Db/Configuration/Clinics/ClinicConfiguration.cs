using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Peohe.Models.Clinics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Peohe.Db.Configuration.Clinics
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
        }
    }
}
