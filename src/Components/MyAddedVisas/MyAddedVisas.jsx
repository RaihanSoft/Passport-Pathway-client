import { useEffect, useState } from "react";


const MyAddedVisas = () => {
  const [visas, setVisas] = useState([]);
  const [editingVisa, setEditingVisa] = useState(null);



  // Fetch visas
  useEffect(() => {
    fetch(`http://localhost:5000/add-visa`)
      .then((res) => res.json())
      .then((data) => setVisas(data))
      .catch((err) => console.error("Error fetching visas:", err));
  }, []);

  const handleDelete = (visaId) => {


    fetch(`http://localhost:5000/delete-visa/${visaId}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => {
        const Neweresult = visas.filter((visa) => visaId != visa._id)
        setVisas(Neweresult)

      })


  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/update-visa/${editingVisa._id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingVisa), // Send the updated visa data
      });

      const data = await response.json();

      if (data.message === 'Visa updated successfully') {
        // Update the state without needing to reload
        const updatedVisas = visas.map(visa =>
          visa._id === editingVisa._id ? { ...visa, ...editingVisa } : visa
        );
        setVisas(updatedVisas);

        alert("Visa updated successfully!");
        setEditingVisa(null); // Close the modal
      } else {
        alert("No changes made or visa not found.");
      }
    } catch (err) {
      console.error("Error updating visa:", err);
      alert("An error occurred while updating the visa.");
    }
  };




  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Added Visas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div key={visa._id} className="bg-white shadow-md rounded-lg p-5">
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{visa.countryName}</h2>
            <p>Visa Type: {visa.visaType}</p>
            <p>Processing Time: {visa.processingTime}</p>
            <p>Fee: ${visa.fee}</p>
            <p>Validity: {visa.validity}</p>
            <p>Application Method: {visa.applicationMethod}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setEditingVisa(visa)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                Update
              </button>
              <button
                onClick={() => handleDelete(visa._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Update */}
      {editingVisa && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-bold mb-4">Update Visa</h2>
            <form onSubmit={handleUpdateSubmit}>
              <input
                type="text"
                name="countryName"
                value={editingVisa.countryName || ""}
                onChange={(e) =>
                  setEditingVisa({ ...editingVisa, countryName: e.target.value })
                }
                className="border border-gray-300 rounded-md w-full p-2 mb-4"
              />
              <input
                type="text"
                name="visaType"
                value={editingVisa.visaType || ""}
                onChange={(e) =>
                  setEditingVisa({ ...editingVisa, visaType: e.target.value })
                }
                className="border border-gray-300 rounded-md w-full p-2 mb-4"
              />
              <input
                type="text"
                name="processingTime"
                value={editingVisa.processingTime || ""}
                onChange={(e) =>
                  setEditingVisa({ ...editingVisa, processingTime: e.target.value })
                }
                className="border border-gray-300 rounded-md w-full p-2 mb-4"
              />
              <input
                type="text"
                name="fee"
                value={editingVisa.fee || ""}
                onChange={(e) =>
                  setEditingVisa({ ...editingVisa, fee: e.target.value })
                }
                className="border border-gray-300 rounded-md w-full p-2 mb-4"
              />
              <input
                type="text"
                name="validity"
                value={editingVisa.validity || ""}
                onChange={(e) =>
                  setEditingVisa({ ...editingVisa, validity: e.target.value })
                }
                className="border border-gray-300 rounded-md w-full p-2 mb-4"
              />
              <input
                type="text"
                name="applicationMethod"
                value={editingVisa.applicationMethod || ""}
                onChange={(e) =>
                  setEditingVisa({ ...editingVisa, applicationMethod: e.target.value })
                }
                className="border border-gray-300 rounded-md w-full p-2 mb-4"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
              <button
                onClick={() => setEditingVisa(null)}
                className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;
