import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "animate.css"; 
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; 

const UserTestimonials = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="testimonials-section py-16 w-11/12 mx-auto ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-custom-darkGreen" data-aos="fade-up">
                    What Our Users Are Saying
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div
                        className="testimonial-card p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeIn"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="testimonial-icon text-4xl text-teal-500 mb-4">
                            <FaQuoteLeft />
                        </div>
                        <p className="text-lg mb-4">
                            &quot;The process was incredibly smooth, and I was able to track my visa application in real-time. The support team was also very helpful. I highly recommend it!&quot;
                        </p>
                        <div className="flex items-center justify-start">
                            <img
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt="User 1"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">John Doe</h3>
                                <p className="text-gray-600 dark:text-gray-400">Entrepreneur</p>
                            </div>
                        </div>
                        <div className="testimonial-icon text-4xl text-teal-500 mt-4">
                            <FaQuoteRight />
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div
                        className="testimonial-card p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeIn"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="testimonial-icon text-4xl text-blue-500 mb-4">
                            <FaQuoteLeft />
                        </div>
                        <p className="text-lg mb-4">
                            &quot;I was able to get my visa in record time! The website is user-friendly, and the entire application process was clear and easy to follow.&quot;
                        </p>
                        <div className="flex items-center justify-start">
                            <img
                                src="https://randomuser.me/api/portraits/women/1.jpg"
                                alt="User 2"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Jane Smith</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-bold font-bold ">Software Engineer</p>
                            </div>
                        </div>
                        <div className="testimonial-icon text-4xl text-blue-500 mt-4">
                            <FaQuoteRight />
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div
                        className="testimonial-card p-6  border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeIn"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="testimonial-icon text-4xl text-yellow-500 mb-4">
                            <FaQuoteLeft />
                        </div>
                        <p className="text-lg  mb-4">
                            &quot;I couldn&apos;t be happier with the service! The visa application process was quick, and the customer support team made everything so much easier.&quot;
                        </p>
                        <div className="flex items-center justify-start">
                            <img
                                src="https://randomuser.me/api/portraits/men/2.jpg"
                                alt="User 3"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Michael Lee</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-bold ">Business Consultant</p>
                            </div>
                        </div>
                        <div className="testimonial-icon text-4xl text-yellow-500 mt-4">
                            <FaQuoteRight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserTestimonials;
