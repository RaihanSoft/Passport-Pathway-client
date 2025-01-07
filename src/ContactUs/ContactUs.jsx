
import { motion } from "framer-motion";

const ContactUs = () => {
    return (
        <section className="relative bg-gradient-to-bl from-black via-gray-900 to-blue-900 text-white py-20 px-6 md:px-20">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <motion.div
                    className="absolute w-80 h-80 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30"
                    animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
                <motion.div
                    className="absolute w-96 h-96 bg-gradient-to-tr from-yellow-400 to-red-400 rounded-full blur-3xl opacity-20 top-10 right-10"
                    animate={{ x: [50, 0, -50, 50], y: [50, -50, 0, 50] }}
                    transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Get in Touch with <span className="text-yellow-400"> Visa Navigator</span>
                </motion.h2>
                <motion.p
                    className="text-lg md:text-xl text-gray-300 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Have questions or need help with your visa application? Reach out to us, and we’ll guide you every step of the way.
                </motion.p>

                {/* Contact Form */}
                <motion.div
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <form className="grid grid-cols-1 gap-6">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-300 text-sm mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full bg-gray-800 text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-800 text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-gray-300 text-sm mb-2" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Write your message here"
                                className="w-full bg-gray-800 text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;
