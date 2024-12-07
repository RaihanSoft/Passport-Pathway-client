import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Function to get the visa type button color
    const getVisaTypeColor = (type) => {
        switch (type) {
            case 'Tourist':
                return 'bg-green-500 hover:bg-green-600';
            case 'Business':
                return 'bg-blue-500 hover:bg-blue-600';
            case 'Student':
                return 'bg-yellow-500 hover:bg-yellow-600';
            default:
                return 'bg-gray-500 hover:bg-gray-600';
        }
    };

    return (
        <section className="w-11/12 mx-auto my-12 ">
            <h2 className="text-3xl font-bold text-center mb-8 text-custom-darkGreen">
                Latest Visas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visas.map((visa) => (
                    <div
                        key={visa._id}
                        className=" border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col justify-between transition transform hover:scale-105"
                        data-aos="fade-up"
                    >
                        <img
                            src={visa.countryImage}
                            alt={visa.countryName}
                            className="w-full h-60 object-cover rounded-t-lg "
                        />
                        <div className="mt-4 space-y-2">
                            <h3 className="text-xl font-bold">
                                {visa.countryName}
                            </h3>
                            <p className="">
                                <strong>Visa Type:</strong> {visa.visaType}
                            </p>
                            <p className="">
                                <strong>Processing Time:</strong> {visa.processingTime}
                            </p>
                            <p className="">
                                <strong>Fee:</strong> ${visa.fee} USD
                            </p>
                            <p className="">
                                <strong>Validity:</strong> {visa.validity} months
                            </p>
                            <p className="">
                                <strong>Application Method:</strong> {visa.applicationMethod}
                            </p>
                        </div>
                        <Link
                            to={`/visa-details/${visa._id}`}
                            className={`mt-4 text-white text-center py-2 px-4 rounded-full ${getVisaTypeColor(visa.visaType)}`}
                        >
                            See Details
                        </Link>
                    </div>
                ))}
            </div>

            {/* See All Visas Button */}
            <div className="mt-12 text-center">
                <Link to="/AllVisas">
                    <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                        See All Visas
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default LatestVisas;
