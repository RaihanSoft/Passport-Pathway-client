import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllVisas = () => {
  const [visas, setVisas] = useState([]);
  const navigate = useNavigate();

  // Fetch visas from the server
  useEffect(() => {
    fetch('http://localhost:5000/all-visa') // Updated endpoint
      .then((res) => res.json())
      .then((data) => setVisas(data))
      .catch((err) => console.error('Error fetching visas:', err));
  }, []);
  

  // Handle "See Details" button click
  const handleSeeDetails = (id) => {
    navigate(`/visa-details/${id}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Visas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visas.map((visa) => (
          <div key={visa._id} className="bg-white shadow-md rounded-lg p-5">
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{visa.countryName}</h2>
            <p className="text-gray-600">Visa Type: {visa.visaType}</p>
            <p className="text-gray-600">Fee: ${visa.fee}</p>
            <p className="text-gray-600">Validity: {visa.validity} months</p>
            <button
              onClick={() => handleSeeDetails(visa._id)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
