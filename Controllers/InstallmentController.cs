using Microsoft.AspNetCore.Mvc;
using Peohe.Db;
using Peohe.Models;
using Peohe.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Peohe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstallmentController : ControllerBase
    {
        private readonly PeoheDbContext dbContext;
        private readonly InstallmentService balanceService;

        public InstallmentController(PeoheDbContext context, InstallmentService balanceService)
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
