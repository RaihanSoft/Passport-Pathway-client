import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Context } from '../Provider/Provider'; // Adjust based on your auth setup
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisaDetails = () => {
  const { id } = useParams();
  const { user, visa, setVisa } = useContext(Context); // Use logged-in user context
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`https://assignment-ten-server-iota-tan.vercel.app/visa-details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched visa details:', data); // Log the fetched data
        setVisa(data);
      })
      .catch((err) => console.error('Error fetching visa details:', err));

    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      once: true,
    });
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
      countryName: visa.countryName,
      visaType: visa.visaType,
      processingTime: visa.processingTime,
      requiredDocuments: visa.requiredDocuments,
      description: visa.description,
      ageRestriction: visa.ageRestriction,
      validity: visa.validity,
      applicationMethod: visa.applicationMethod,
    };

    fetch('https://assignment-ten-server-iota-tan.vercel.app/apply-visa', {
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
    <div className="p-8 flex items-center justify-center gap-4  bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      {!visa.countryName ? (
        <div>Loading...</div>
      ) : (
        <>


          {visa.countryImage && (
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full max-w-lg h-96 object-cover rounded-xl shadow-2xl mb-6"
              data-aos="zoom-in"
            />
          )}

          <div className="text-lg space-y-2 text-gray-700 mb-8">
          <h1 className="text-4xl font-extrabold mb-6 text-blue-800 text-center" data-aos="fade-up">
            {visa.countryName}
          </h1>
            <p data-aos="fade-up">
              <strong>Visa Type:</strong> {visa.visaType || 'N/A'}
            </p>
            <p data-aos="fade-up">
              <strong>Processing Time:</strong> {visa.processingTime || 'N/A'} 
            </p>            
            <p data-aos="fade-up">
              <strong>ageRestriction:</strong> {visa.ageRestriction || 'N/A'} 
            </p>
            <p data-aos="fade-up">
              <strong>Required Documents:</strong> {visa.requiredDocuments?.join(', ') || 'N/A'}
            </p>
            <p data-aos="fade-up">
              <strong>Fee:</strong> ${visa.fee || 'N/A'} USD
            </p>
            <p data-aos="fade-up">
              <strong>Description:</strong> {visa.description || 'N/A'} 
            </p>
            <p data-aos="fade-up">
              <strong>Validity:</strong> {visa.validity || 'N/A'} months
            </p>
            <p data-aos="fade-up">
              <strong>Application Method:</strong> {visa.applicationMethod || 'N/A'}
            </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            data-aos="fade-up"
            >
            Apply for Visa
          </button>
            </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center" data-aos="fade-up">
              <div className="bg-white text-black p-8 rounded-lg shadow-2xl max-w-lg w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">Visa Application</h2>
                <form onSubmit={handleApply}>
                  <div className="space-y-4">
                    <label className="block mb-4">
                      <span>Email:</span>
                      <input
                        type="email"
                        value={user.email}
                        readOnly
                        className="w-full p-3 border rounded-lg"
                      />
                    </label>
                    <label className="block mb-4">
                      <span>First Name:</span>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full p-3 border rounded-lg"
                      />
                    </label>
                    <label className="block mb-4">
                      <span>Last Name:</span>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full p-3 border rounded-lg"
                      />
                    </label>
                    <label className="block mb-4">
                      <span>Applied Date:</span>
                      <input
                        type="text"
                        value={new Date().toLocaleDateString()}
                        readOnly
                        className="w-full p-3 border rounded-lg"
                      />
                    </label>
                    <label className="block mb-4">
                      <span>Fee:</span>
                      <input
                        type="text"
                        value={`$${visa.fee}`}
                        readOnly
                        className="w-full p-3 border rounded-lg"
                      />
                    </label>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                    >
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
