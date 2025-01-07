import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white py-20 px-6 md:px-20">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <motion.div
                    className="absolute w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"
                    animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
                <motion.div
                    className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full blur-3xl opacity-20"
                    animate={{ x: [50, 0, -50, 50], y: [50, 100, 0, -50] }}
                    transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold tracking-wide mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to <span className="text-yellow-400"> Visa Navigator</span>
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl font-light text-gray-300 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Your trusted companion for navigating the complexities of visa applications, ensuring a seamless and stress-free process.
                </motion.p>

                {/* Features Section */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
                    }}
                >
                    {[
                        { title: "Visa Requirement Checker", icon: "🌍" },
                        { title: "Online Visa Application", icon: "📋" },
                        { title: "Real-time Tracking", icon: "⏱️" },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-yellow-400">{feature.title}</h3>
                            <p className="text-sm text-gray-300">
                                {`Learn more about how ${feature.title.toLowerCase()} makes your journey easier.`}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
                <motion.div
                    className="w-12 h-12 bg-yellow-400 rounded-full animate-bounce"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
