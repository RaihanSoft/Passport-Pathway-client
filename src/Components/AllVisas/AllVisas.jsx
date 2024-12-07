import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllVisas = () => {
  const [visas, setVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [visaType, setVisaType] = useState('All'); // State for dropdown filter
  const navigate = useNavigate();

  // Fetch visas from the server
  useEffect(() => {
    fetch('https://assignment-ten-server-iota-tan.vercel.app/all-visa')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Debug fetched data
        setVisas(data);
        setFilteredVisas(data); // Initialize filtered visas
      })
      .catch((err) => console.error('Error fetching visas:', err));
  }, []);

  // Handle filter functionality
  const handleVisaTypeChange = (type) => {
    setVisaType(type);

    // Use a case-insensitive comparison for filtering
    if (type === 'All') {
      setFilteredVisas(visas);
    } else {
      setFilteredVisas(
        visas.filter((visa) =>
          visa.visaType.toLowerCase() === type.toLowerCase()
        )
      );
    }
  };

  // Handle "See Details" button click
  const handleSeeDetails = (id) => {
    navigate(`/visa-details/${id}`);
  };

  return (
    <div className="p-8 w-11/12 mx-auto ">
      <h1 className="text-3xl font-bold text-center mb-8">All Visas</h1>

      {/* Dropdown Menu for Visa Type Filtering */}
      <div className="mb-6 flex justify-center">
        <select
          value={visaType}
          onChange={(e) => handleVisaTypeChange(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-gray-700"
        >
          <option value="All">All Visa Types</option>
          <option value="Tourist Visa">Tourist Visa</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Official Visa">Official Visa</option>
        </select>
      </div>

      {/* Visa Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredVisas.length > 0 ? (
          filteredVisas.map((visa) => (
            <div
              key={visa._id}
              className="bg-white shadow-xl rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{visa.countryName}</h2>
              <p className="text-gray-600">Visa Type: {visa.visaType}</p>
              <p className="text-gray-600">Fee: ${visa.fee} USD</p>
              <p className="text-gray-600">Validity: {visa.validity} months</p>
              <button
                onClick={() => handleSeeDetails(visa._id)}
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all"
              >
                See Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Loading ....</p>
        )}
      </div>
    </div>
  );
};

export default AllVisas;
