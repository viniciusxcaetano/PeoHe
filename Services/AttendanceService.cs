using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Peohe.Db;
using Peohe.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Peohe.Services
{
    public class AttendanceService : IHostedService, IDisposable
    {
        private readonly IServiceScopeFactory _scopeFactory;

        public AttendanceService(IServiceScopeFactory scopeFactory)
        {
            _scopeFactory = scopeFactory;
        }
        public void CreateAttendance(Attendance attendance)
        {
            using (var dbContext = _scopeFactory.CreateScope().ServiceProvider.GetRequiredService<PeoheDbContext>())
            {
                var test = dbContext.Add<Attendance>(attendance);
            }
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
