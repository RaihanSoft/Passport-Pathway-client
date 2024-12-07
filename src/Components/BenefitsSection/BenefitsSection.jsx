import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "animate.css";
import { FaRegClock, FaRegMoneyBillAlt, FaRegUserCircle, FaPlaneDeparture, FaShieldAlt, FaHeadset } from "react-icons/fa"; // Importing unique icons

const BenefitsSection = () => {
    // Initialize AOS for scroll animations
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="benefits-section py-16 text-center w-11/12 mx-auto ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-custom-darkGreen" data-aos="fade-up">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Benefit 1 */}
                    <div
                        className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500 animate__animated animate__fadeIn"
                        data-aos="fade-up"
                    >
                        <div className="text-4xl mb-4 text-red-500">
                            <FaPlaneDeparture />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Easy Visa Application</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Apply for your visa easily and quickly with a streamlined process.
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div
                        className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500 animate__animated animate__fadeIn"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="text-4xl mb-4 text-blue-500">
                            <FaShieldAlt />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Secure and Confidential</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Your personal data is safe and securely stored with end-to-end encryption.
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div
                        className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500 animate__animated animate__fadeIn"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="text-4xl mb-4 text-yellow-500">
                            <FaRegClock />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Fast Approval</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Get your visa approval quickly with minimal processing time.
                        </p>
                    </div>

                    {/* Benefit 4 */}
                    <div
                        className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500 animate__animated animate__fadeIn"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="text-4xl mb-4 text-green-500">
                            <FaHeadset />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">24/7 Customer Support</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Our team is always available to assist you with any visa-related queries.
                        </p>
                    </div>

                    {/* Benefit 5 */}
                    <div
                        className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500 animate__animated animate__fadeIn"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="text-4xl mb-4 text-purple-500">
                            <FaRegUserCircle />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Personalized Services</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Enjoy tailored services designed to meet your specific visa requirements.
                        </p>
                    </div>

                    {/* Benefit 6 */}
                    <div
                        className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500 animate__animated animate__fadeIn"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <div className="text-4xl mb-4 text-teal-500">
                            <FaRegMoneyBillAlt />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Affordable Fees</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            We offer competitive visa application fees with no hidden charges.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
