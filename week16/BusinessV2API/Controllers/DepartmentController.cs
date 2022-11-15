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
        [HttpDelete("{id}")]
        public string Delete(string id)
        {
            Department.Delete(id);
            return "{ \"status\": \"ok\" }";   // i.e. we are returning this string:     { "status": "ok" } That's one way.
        }

        // (U)pdate
        [HttpPut]
        public Object Update(Department dep)
        {
            // Here we'll also return { "status": "ok" } but as an actual object, an "anonymous" object with no class to belong to.
            Department.Update(dep);
            return new { status = "ok" };
        }

    }
}
