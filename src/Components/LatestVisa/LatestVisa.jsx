import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "animate.css"; // Import animate.css
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // AOS CSS

const LatestVisas = () => {
    const [visas, setVisas] = useState([]);
    const [animationData, setAnimationData] = useState(null);

    // Initialize AOS animations
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Fetch latest visas
    useEffect(() => {
        const fetchLatestVisas = async () => {
            try {
                const response = await fetch(
                    "https://assignment-ten-server-iota-tan.vercel.app/all-visas"
                );
                const data = await response.json();
                setVisas(data.slice(0, 6));
            } catch (error) {
                console.error("Error fetching latest visas:", error);
            }
        };
        fetchLatestVisas();
    }, []);

    // Fetch Lottie animation
    useEffect(() => {
        const fetchAnimation = async () => {
            try {
                const response = await fetch(
                    "https://assets6.lottiefiles.com/packages/lf20_tll0j4bb.json"
                );
                const data = await response.json();
                setAnimationData(data);
            } catch (error) {
                console.error("Error fetching Lottie animation:", error);
            }
        };
        fetchAnimation();
    }, []);

    return (
        <section className="w-11/12 mx-auto my-12">
            {/* Animated Heading */}
            <div data-aos="fade-down">
                <h2 className="text-5xl font-bold text-center mb-8 text-custom-darkGreen">
                    <Typewriter
                        words={["Latest Visas", "Explore Opportunities"]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h2>
            </div>

            {/* Lottie Animation */}
            {animationData && (
                <div className="flex justify-center mb-12" data-aos="fade-up">
                    <Lottie animationData={animationData} loop className="w-64 h-64" />
                </div>
            )}

            {/* Visa Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {visas.map((visa) => (
                    <div
                        key={visa._id}
                        className="bg-gradient-to-b from-gray-700 via-gray-800 to-black border border-gray-500 rounded-3xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out hover:bg-gradient-to-t from-gray-700 via-gray-900 to-black"
                        data-aos="fade-up"
                    >
                        {/* Visa Image */}
                        <div className="w-full h-50 overflow-hidden ">
                            <img
                                src={visa.countryImage}
                                alt={visa.countryName}
                                className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
                            />
                        </div>

                        {/* Visa Details */}
                        <div className="p-6 space-y-4 text-white">
                            <h3 className="text-3xl font-bold text-custom-lightGreen">{visa.countryName}</h3>
                            <ul className="space-y-2 text-lg">
                                <li><strong>Visa Type:</strong> {visa.visaType}</li>
                                <li><strong>Processing Time:</strong> {visa.processingTime}</li>
                                <li><strong>Fee:</strong> ${visa.fee}</li>
                                <li><strong>Validity:</strong> {visa.validity}</li>
                                <li><strong>Application Method:</strong> {visa.applicationMethod}</li>
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="p-4">
                            <Link
                                to={`/visa-details/${visa._id}`}
                                className="block bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 rounded-full w-full hover:from-orange-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* See All Visas Button */}
            <div className="mt-16 text-center" data-aos="fade-up">
                <Link to="/AllVisas">
                    <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xl font-semibold rounded-full shadow-xl hover:from-orange-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105">
                        See All Visas
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default LatestVisas;
