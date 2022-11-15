using BusinessV2API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusinessV2API.Controllers
{
    [Route("department")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        //Lets change the base route to explicitly "employee 
        //[Route("api/[controller]")]
 
            // Remember, these are not static methods!

            // (R)ead all 
            [HttpGet]
            public List<Department> GetAll()
            {
                return Department.GetAll(); 
            }

            // (R)ead One
            [HttpGet("{id}")]
            public Department Get(string id)
            {
                return Department.Get(id); 
            }

            // (C)reate 
            [HttpPost]
            public Department Save(Department dept)
            {
                return Department.Create(dept); 
            }

            // (D)elete
            [HttpDelete]
            public string Delete(string id)
            {
                Department.Delete(id); 
                return ("ok");
            }

            // (U)pdate
            [HttpPut]
            public string Update(Department dept)
            {
                Department.Update(dept); 
                return "Ok";
            }
        }
}
