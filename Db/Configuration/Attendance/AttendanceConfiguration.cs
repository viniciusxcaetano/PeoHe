using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Peohe.Models.Attendances;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Peohe.Db.Configuration.Attendances
{
    public class AttendanceConfiguration : IEntityTypeConfiguration<Attendance>
    {
        public void Configure(EntityTypeBuilder<Attendance> builder)
        {
            //Table
            builder.ToTable("Attendance");

            //Key
            builder.HasKey(attendance => attendance.AttendanceId);

            //Identity
            builder.Property(attendance => attendance.AttendanceId).IsRequired().UseIdentityColumn();

            //Fields
            builder.Property(attendance => attendance.Portion);
            builder.Property(attendance => attendance.Price).IsRequired();
            builder.Property(attendance => attendance.Historic);
        }
    }
}