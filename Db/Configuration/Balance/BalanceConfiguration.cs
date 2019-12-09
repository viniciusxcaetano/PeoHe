﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Peohe.Models.Balances;

namespace Peohe.Db.Configuration.Balances
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