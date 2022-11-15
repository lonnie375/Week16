using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PracticeController : ControllerBase
    {
        //This just uses the path without adding anything on to it. 
        // You can view this in swagger. 
        [HttpGet]
        public string index()
        {
            return "Hello"; 
        }
        //We have created a route named "number" that will activate this method. 
        //We have more congtrol over the path now. 
        // The path will be /api/practice/number
        [HttpGet("number")]
        public int test1()
        {
            return 50;
        }

        // This path will be
        // /api/practice/stuff 
        [HttpGet("stuff")]
        public Stuff test2()
        {
            return new Stuff() { Height = 20, word = "Hello", YesNo = true }; 
        }

        [HttpGet("list")]
        public List<Stuff> test3()
        {
            List<Stuff> result = new List<Stuff>();
            result.Add(new Stuff() { Height = 50, word = "Another", YesNo = false });
            result.Add(new Stuff() { Height = 5, word = "Greetings", YesNo = true });
            result.Add(new Stuff() { Height = 100, word = "Earthing", YesNo = true });

            return result;
        }

        [HttpPost("double")]
        public int test4(int id)
        {
            return 2 * id;
        }

        [HttpPost("process")]
        public Stuff test5(Stuff stuff)
        {
            stuff.Height = stuff.Height * 2;
            stuff.YesNo = !stuff.YesNo;
            stuff.word = "Hello " + stuff.word;

            return stuff; 
        }

        [HttpPost]
        public string test6(Stuff stuff)
        {
            return $"{stuff.word} saved."; 
        }
    }

    // Outisde the class PracticeController, but still inside the namespace...

    public class Stuff
    {
        public int Height { get; set; }
        public string word { get; set; }
        public bool YesNo { get; set; }

    }
}
