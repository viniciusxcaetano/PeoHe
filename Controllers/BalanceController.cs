using Microsoft.AspNetCore.Mvc;
using Peohe.Db;
using Peohe.Models.Balances;
using Peohe.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Peohe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BalanceController : ControllerBase
    {
        private readonly PeoheDbContext dbContext;
        private readonly BalanceService balanceService;

        public BalanceController(PeoheDbContext context, BalanceService balanceService)
        {
            dbContext = context;
            this.balanceService = balanceService;
        }
        [HttpGet("teste")]
        public ActionResult<int> Teste()
        {

            return balanceService.testeDenovo();
        }
    }
}
