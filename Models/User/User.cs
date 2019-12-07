using System;

namespace Peohe.Models.Users
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public DateTime? Deleted { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
