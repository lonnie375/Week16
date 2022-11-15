using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace BusinessV2API.Models
{
    [Table("department")]
    public class Department
    {
        // Our key is a string here. 
        // Since it's not autoincrement, we use ExplicitKey 
        //
        [ExplicitKey]
        public string id { get; set; }
        public string name { get; set; }
        public string location { get; set; }

        public static MySqlConnection DB;

        //
        // CRUD Operations
        // These are static methods 
        // THis part handles just the database operations.
        // // So don't think about controllers, URLS's, routes, and paths. 
        //

        // (R)ead all 
        public static List<Department> GetAll()
        {
            return DB.GetAll<Department>().ToList();
        }

        // (R)ead one 
        public static Department Get(string id)
        {
            return DB.Get<Department>(id);
        }
        // (C)reate 
        public static Department Create(Department empl)
        {
            DB.Insert(empl);
            return empl;
        }
        // (D)elete
        public static void Delete(string id)
        {
            Department employee = new Department() { id = id };
            DB.Delete(employee);
        }
        // (U)pdate
        public static void Update(Department emp)
        {
            DB.Update(emp);
        }
    }
}
