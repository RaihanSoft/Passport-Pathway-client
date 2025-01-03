import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { Context } from "../Provider/Provider"; // Assuming you have a context for user authentication

const AddVisa = () => {
  const { user } = useContext(Context); // Get logged-in user info (email)
  const [visaData, setVisaData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "Tourist visa",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];

  // Fetching visas added by the logged-in user
  useEffect(() => {
    const fetchUserVisas = async () => {
      if (!user?.email) return;

      const response = await fetch(`https://assignment-ten-server-iota-tan.vercel.app/get-visas?email=${user.email}`);
      if (response.ok) {
        const visas = await response.json();
        console.log("User visas:", visas); // Handle the data (e.g., display in UI)
      } else {
        console.error("Failed to fetch visas");
      }
    };

    if (user?.email) {
      fetchUserVisas();
    }
  }, [user?.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisaData({ ...visaData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setVisaData((prevState) => ({
      ...prevState,
      requiredDocuments: checked
        ? [...prevState.requiredDocuments, value]
        : prevState.requiredDocuments.filter((doc) => doc !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.email) {
      Swal.fire({
        title: "Error!",
        text: "User is not logged in.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const response = await fetch('https://assignment-ten-server-iota-tan.vercel.app/add-visa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...visaData,
          userEmail: user.email, // Pass the user's email along with the visa data
        }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Visa added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to add visa.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "Could not connect to the server.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
<div  className="bg-gradient-to-br from-[#2c1f56] via-[#1a1241] to-[#0d0b26] p-5 " >
  <form
    className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6"
    onSubmit={handleSubmit}
  >
    {/* Country Image */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Country Image URL</label>
      <input
        type="url"
        name="countryImage"
        value={visaData.countryImage}
        onChange={handleChange}
        placeholder="Enter image URL from imgbb"
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  
    {/* Country Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Country Name</label>
      <input
        type="text"
        name="countryName"
        value={visaData.countryName}
        onChange={handleChange}
        placeholder="Enter country name"
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  
    {/* Visa Type */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Visa Type</label>
      <select
        name="visaType"
        value={visaData.visaType}
        onChange={handleChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
      >
        <option value="Tourist visa">Tourist Visa</option>
        <option value="Student visa">Student Visa</option>
        <option value="Official visa">Official Visa</option>
      </select>
    </div>
  
    {/* Processing Time */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Processing Time</label>
      <input
        type="text"
        name="processingTime"
        value={visaData.processingTime}
        onChange={handleChange}
        placeholder="e.g., 7-10 business days"
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  
    {/* Required Documents */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Required Documents</label>
      {documentOptions.map((doc, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            value={doc}
            checked={visaData.requiredDocuments.includes(doc)}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label className="ml-2 text-sm text-gray-700">{doc}</label>
        </div>
      ))}
    </div>
  
    {/* Description */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        name="description"
        value={visaData.description}
        onChange={handleChange}
        rows="4"
        placeholder="Provide detailed description of the visa"
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  
    {/* Age Restriction */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Age Restriction</label>
      <input
        type="number"
        name="ageRestriction"
        value={visaData.ageRestriction}
        onChange={handleChange}
        placeholder="e.g., 18"
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  
    {/* Fee */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Fee</label>
      <input
        type="number"
        name="fee"
        value={visaData.fee}
        onChange={handleChange}
        placeholder="Visa fee in USD"
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  
    {/* Validity */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Validity</label>
      <input
        type="text"
        name="validity"
        value={visaData.validity}
        onChange={handleChange}
        placeholder="e.g., 1 year"
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  
    {/* Application Method */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Application Method</label>
      <input
        type="text"
        name="applicationMethod"
        value={visaData.applicationMethod}
        onChange={handleChange}
        placeholder="e.g., online or at the embassy"
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  
    {/* Add Visa Button */}
    <div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-500"
      >
        Add Visa
      </button>
    </div>
  </form>
</div>

  );
};

export default AddVisa;
