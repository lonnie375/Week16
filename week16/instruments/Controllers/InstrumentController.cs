using instruments.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace instruments.Controllers
{
    [Route("instrument")]
    [ApiController]
    public class InstrumentController : ControllerBase
    {
        // Here are our routes: 
        //
        // GET /instrument -- returns the whole list of instruments 
        // POST /instrument -- adds a new instrument to the database 
        // DELETE /instrument/{id} -- deletes the instrument by id 
        // POST /instrument/update == updates the instrument that's passed in 

        // As a review: 
        // With API controllers (as opposed to MVC controllers), the 
        // name of the method is not part of the URL path. 
        // So we can call the method whatever we want. 

        // (R)ead 
        [HttpGet]
        public List<Instrument> ReadAll()
        {
            return Instrument.ReadAll();
        }

        // (C)reate
        [HttpPost]
        public Instrument Add(Instrument inst)
        {
            return Instrument.AddInstrument(inst);
        }

        // (D)elete
        [HttpDelete]
        public string Delete (int id)
        {
             Instrument.Delete(id);
            //Returning something just so that we know it works 
            return "ok"; 
        }

        // (U)pdate
        // We can also use put if we wanted. 
        // We are using post for educational purposes 

        [HttpPost("update")]
        public string Update(Instrument inst)
        {
            Instrument.Update(inst);
            return "ok"; 
        }
    }
}
