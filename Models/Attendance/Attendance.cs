using Peohe.Models.Clinics;
using Peohe.Models.Doctors;

namespace Peohe.Models.Attendances
{
    public class Attendance
    {
        public int AttendanceId { get; set; }
        public double Price { get; set; }
        public int Portion { get; set; }
        public string Historic { get; set; }
        public Clinic Clinic { get; set; }
        public Doctor Doctor { get; set; }
    }
}
