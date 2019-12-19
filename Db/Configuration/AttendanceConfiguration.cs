using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Peohe.Models;
using System;
using static Peohe.Models.Enum.Attendance;

namespace Peohe.Db.Configuration
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
            builder.Property(attendance => attendance.AttendanceId).HasDefaultValue(Guid.NewGuid());

            //Fields
            builder.Property(attendance => attendance.TypeOfPayment);
            builder.Property(attendance => attendance.Amount);
            builder.Property(attendance => attendance.AmountPaid);
            builder.Property(attendance => attendance.Percentage);
            builder.Property(attendance => attendance.InstallmentsAmount);
            builder.Property(attendance => attendance.InstallmentsPaid);
            builder.Property(attendance => attendance.Historic);
            builder.Property(attendance => attendance.CreationDate);
            builder.Property(attendance => attendance.PayDay);
            builder.Property(attendance => attendance.Deleted);
            builder.Property(attendance => attendance.Historic);
            builder.Property(attendance => attendance.Paid);
            builder.Property(attendance => attendance.CardFee);
            builder.Property(attendance => attendance.UserId);

            //Enum
            builder.Property(attendance => attendance.TypeOfPayment)
                .HasConversion(tp => tp.ToString(), tp => (TypeOfPayment)Enum.Parse(typeof(TypeOfPayment), tp));
        }
    }
}