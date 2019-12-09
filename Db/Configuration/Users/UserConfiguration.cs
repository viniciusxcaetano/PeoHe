using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Peohe.Models.Users;

namespace Peohe.Db.Configuration.Users
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            //Table
            builder.ToTable("User");

            //Key
            builder.HasKey(user => user.UserId);

            //Identity
            builder.Property(user => user.UserId).IsRequired().UseIdentityColumn();

            //Fields
            builder.Property(user => user.Name);
            builder.Property(user => user.Login);
            builder.Property(user => user.Deleted);
            builder.Property(user => user.Password);
        }
    }
}