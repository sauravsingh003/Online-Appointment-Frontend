function PatientDashboard() {
  // Mock doctor data
  const doctors = [
    { id: 1, name: "Dr. Smith", specialization: "Cardiologist" },
    { id: 2, name: "Dr. Khan", specialization: "Dermatologist" },
  ];

  return (
    <div className="container mt-4">
      <h2>Patient Dashboard</h2>
      <h5>Available Doctors</h5>
      <ul className="list-group">
        {doctors.map((doc) => (
          <li key={doc.id} className="list-group-item">
            {doc.name} - {doc.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientDashboard;
