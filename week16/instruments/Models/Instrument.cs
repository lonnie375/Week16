using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace instruments.Models
{
    [Table("instrument")]
    public class Instrument
    {
       
        [Key]
        public int id { get; set; }
        public string thetype { get; set; }
        public string color { get; set; }
        public int year { get; set; }

        // Static properties and methods 
        // This is where we'll add our CRUD Operations
        public static MySqlConnection DB;

        //(R)ead: Read allo rows from the table 
        public static List<Instrument> ReadAll()
        {
            return DB.GetAll<Instrument>().ToList(); 
        }

        //(C)reate: 
        public static Instrument AddInstrument(Instrument inst)
        {
            DB.Insert<Instrument>(inst); 
            return inst;

        }

        // (D)elete: 
        public static void Delete(int id)
        {
            Instrument inst = new Instrument() { id = id };
            DB.Delete<Instrument>(inst);    
        }

        // (U)pdate: 
        public static void Update(Instrument inst)
        {
            DB.Update<Instrument>(inst);
        }

    }





}
