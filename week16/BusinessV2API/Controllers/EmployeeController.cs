using BusinessV2API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusinessV2API.Controllers
{
    //Lets change the base route to explicitly "employee 
    //[Route("api/[controller]")]
    [Route("employee")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        // Remember, these are not static methods!

        // (R)ead all 
        [HttpGet]
        public List<Employee> GetAll()
        {
            return Employee.GetAll();
        }

        // (R)ead One
        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            return Employee.Get(id);    
        }

        // (C)reate 
        [HttpPost]
        public Employee Save(Employee emp)
        {
            return Employee.Create(emp);
        }

        // (D)elete
        [HttpDelete]
        public string Delete(int id)
        {
            Employee.Delete(id);
            return ("ok");
        }

        // (U)pdate
        [HttpPut]
        public string Update(Employee emp)
        {
            Employee.Update(emp);
            return "Ok";
        }
    }
}
