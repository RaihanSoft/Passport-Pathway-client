import { useEffect, useState, useContext } from 'react';
import { Context } from '../Provider/Provider';
import Swal from 'sweetalert2';

const VisaApplications = () => {
  const [applications, setApplications] = useState([]);
  const { user} = useContext(Context);







  // Fetch applications for the logged-in user
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/my-visa-applications?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setApplications(data))
        .catch((err) => console.error('Error fetching applications:', err));
    }
  }, [user]);

  // Handle application cancellation
  const handleCancel = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this application!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cancel-application/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message) {
              setApplications(applications.filter((app) => app._id !== id));
              Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
            }
          })
          .catch(() => Swal.fire('Error', 'Failed to cancel the application', 'error'));
      }
    });
  };


  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Visa Applications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {applications.map((app) => (
          <div key={app._id} className="bg-white shadow-md rounded-lg p-5">
            <img
              src={app.countryImage}
              alt={app.country}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{app.country}</h2>
            <p>Visa Type: {app.visaType}</p>
            <p>Processing Time: {app.processingTime}</p>
            <p>Fee: ${app.fee}</p>
            <p>Validity: {app.validity} months</p>
            <p>Application Method: {app.applicationMethod}</p>
            <p>Applied Date: {app.appliedDate}</p>
            <p>Applicant: {app.firstName} {app.lastName}</p>
            <p>Email: {app.email}</p>
            <button
              onClick={() => handleCancel(app._id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaApplications;
