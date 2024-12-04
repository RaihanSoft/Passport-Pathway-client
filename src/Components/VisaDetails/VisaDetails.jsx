import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Context } from '../Provider/Provider'; // Adjust based on your auth setup

const VisaDetails = () => {
  const { id } = useParams();
  const { user, visa, setVisa } = useContext(Context); // Use logged-in user context
  // const [visa, setVisa] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/visa-details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched visa details:', data); // Log the fetched data
        setVisa(data);
      })
      .catch((err) => console.error('Error fetching visa details:', err));
  }, [id]);

  const handleApply = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const application = {
      email: user.email,
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      appliedDate: new Date().toLocaleDateString(),
      fee: visa.fee,
      countryImage: visa.countryImage,
      countryName:visa.countryName,
      visaType:visa.visaType,
      processingTime:visa.processingTime,
      requiredDocuments:visa.requiredDocuments,
      description:visa.description,
      ageRestriction:visa.ageRestriction,
      validity:visa.validity,
      applicationMethod:visa.applicationMethod

    };

    fetch('http://localhost:5000/apply-visa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire('Success', 'Application submitted successfully!', 'success');
        setIsModalOpen(false);
      })
      .catch(() => Swal.fire('Error', 'Failed to apply for visa', 'error'));
  };

  return (
    <div className="p-8">
      {!visa.countryName ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">{visa.countryName}</h1>

          {visa.countryImage && (
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full max-w-md h-64 object-cover rounded-lg mb-4"
            />
          )}

          <p>Visa Type: {visa.visaType || 'N/A'}</p>
          <p>Processing Time: {visa.processingTime || 'N/A'} days</p>
          <p>Required Documents: {visa.requiredDocuments?.join(', ') || 'N/A'}</p>
          <p>Fee: ${visa.fee || 'N/A'}</p>
          <p>Description: {visa.description || 'N/A'}</p>
          <p>Validity: {visa.validity || 'N/A'} months</p>
          <p>Application Method: {visa.applicationMethod || 'N/A'}</p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Apply for Visa
          </button>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Visa Application</h2>
                <form onSubmit={handleApply}>
                  <label className="block mb-2">
                    Email:
                    <input
                      type="email"
                      value={user.email}
                      readOnly
                      className="w-full p-2 border rounded"
                    />
                  </label>
                  <label className="block mb-2">
                    First Name:
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full p-2 border rounded"
                    />
                  </label>
                  <label className="block mb-2">
                    Last Name:
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full p-2 border rounded"
                    />
                  </label>
                  <label className="block mb-2">
                    Applied Date:
                    <input
                      type="text"
                      value={new Date().toLocaleDateString()}
                      readOnly
                      className="w-full p-2 border rounded"
                    />
                  </label>
                  <label className="block mb-2">
                    Fee:
                    <input
                      type="text"
                      value={`$${visa.fee}`}
                      readOnly
                      className="w-full p-2 border rounded"
                    />
                  </label>
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                      Apply
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VisaDetails;
