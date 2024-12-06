import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestVisas = () => {
    const [visas, setVisas] = useState([]);

    // Fetch latest visas from the server
    useEffect(() => {
        const fetchLatestVisas = async () => {
            try {
                const response = await fetch('https://assignment-ten-server-iota-tan.vercel.app/all-visas');
                const data = await response.json();
                // Sort by the latest added and get the first 6 visas
                setVisas(data.slice(0, 6));
            } catch (error) {
                console.error("Error fetching latest visas:", error);
            }
        };

        fetchLatestVisas();
    }, []);

    return (
        <section className="w-11/12 mx-auto my-12">
            <h2 className="text-3xl font-bold text-center mb-8">Latest Visas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visas.map((visa) => (
                    <div
                        key={visa._id}
                        className="bg-white border rounded-lg shadow-lg p-4 flex flex-col justify-between"
                    >
                        <img
                            src={visa.countryImage}
                            alt={visa.countryName}
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <div className="mt-4 space-y-2">
                            <h3 className="text-xl font-semibold text-gray-800">
                                {visa.countryName}
                            </h3>
                            <p className="text-gray-600">
                                <strong>Visa Type:</strong> {visa.visaType}
                            </p>
                            <p className="text-gray-600">
                                <strong>Processing Time:</strong> {visa.processingTime}
                            </p>
                            <p className="text-gray-600">
                                <strong>Fee:</strong> ${visa.fee}
                            </p>
                            <p className="text-gray-600">
                                <strong>Validity:</strong> {visa.validity}
                            </p>
                            <p className="text-gray-600">
                                <strong>Application Method:</strong> {visa.applicationMethod}
                            </p>
                        </div>
                        <Link
                            to={`/visa-details/${visa._id}`}
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-md"
                        >
                            See Details
                        </Link>
                    </div>
                ))}
            </div>

            {/* See All Visas Button */}
            <div className="mt-12 text-center">
                <Link to="/AllVisas">
                    <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
                        See All Visas
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default LatestVisas;
