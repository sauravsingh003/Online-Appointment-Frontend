function DoctorDashboard() {
  // Mock appointments
  const appointments = [
    { id: 1, patient: "John Doe", date: "2025-06-05", time: "10:00 AM" },
    { id: 2, patient: "Jane Smith", date: "2025-06-06", time: "11:30 AM" },
  ];

  return (
    <div className="container mt-4">
      <h2>Doctor Dashboard</h2>
      <h5>Upcoming Appointments</h5>
      <ul className="list-group">
        {appointments.map((appt) => (
          <li key={appt.id} className="list-group-item">
            {appt.patient} - {appt.date} at {appt.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorDashboard;
