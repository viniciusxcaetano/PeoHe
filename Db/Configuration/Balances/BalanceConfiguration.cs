using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
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

        }
    }
}
