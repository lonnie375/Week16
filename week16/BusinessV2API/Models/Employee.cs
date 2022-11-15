using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace BusinessV2API.Models
{
    [Table("employee")]
    public class Employee
    {
        [Key]
        public int id { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string department { get; set; }
        public DateTime hiredate { get; set; }

        public static MySqlConnection DB;

        //
        // CRUD Operations
        // These are static methods 
        // THis part handles just the database operations.
        // // So don't think about controllers, URLS's, routes, and paths. 
        //

        // (R)ead all 
        public static List<Employee> GetAll()
        {
            return DB.GetAll<Employee>().ToList();
        }

        // (R)ead one 
        public static Employee Get(int id)
        {
            return DB.Get<Employee>(id); 
        }
        // (C)reate 
        public static Employee Create(Employee empl)
        {
            DB.Insert(empl); 
            return empl;    
        }
        // (D)elete
        public static void Delete(int id)
        {
            Employee employee = new Employee() { id = id};
            DB.Delete(employee);
        }
        // (U)pdate
        public static void Update(Employee emp)
        {
            DB.Update(emp); 
        }
    }
}
