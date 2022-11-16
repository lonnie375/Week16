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
        public APIResponse Delete(string id)
        {
            Department.Delete(id);
            return new APIResponse() { status = "ok" };  // i.e. we are returning this string:     { "status": "ok" } That's one way.
        }

        // (U)pdate
        [HttpPut]
        public APIResponse Update(Department dep)
        {
            // Here we'll also return { "status": "ok" } but as an actual object, an "anonymous" object with no class to belong to.
            // Jeff kind of botched this; instead oc creating anonymous objects, we really should create a class.
            // We only want to send back a list or an object from our API. So it will go back as 
            // either [] or {}. Technically that was too hackish. 
            // So we created an actual class called API Response 
            Department.Update(dep);
            //    return new { status = "ok" };
            //
            return new APIResponse() { status = "ok" }; 
        }

    }
}
