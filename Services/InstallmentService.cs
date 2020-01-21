using Microsoft.Extensions.Hosting;
using Peohe.Db;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Peohe.Services
{
    public class InstallmentService
    {
        private readonly PeoheDbContext dbContext;
        public InstallmentService(PeoheDbContext context)
        {
            dbContext = context;
        }

        public int testeDenovo()
        {
            return 1000;
        }
    }
}