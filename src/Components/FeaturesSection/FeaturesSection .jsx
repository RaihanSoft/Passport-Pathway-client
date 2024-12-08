import { Typewriter } from "react-simple-typewriter";
import { Fade, Slide } from "react-awesome-reveal";

const FeaturesSection = () => {
  return (
    <section className="features-section py-16 w-11/12 mx-auto text-center">
      {/* Heading */}
      <Fade direction="down" duration={1200}>
        <h2 className="text-3xl md:text-4xl font-bold text-custom-darkGreen mb-6">
          <Typewriter
            words={["Explore Amazing Features", "Visa Application Made Easy", "Experience Secure Services"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </Fade>
      <p className="text-gray-600 mb-10 dark:text-gray-400">
        Discover how <span className="text-custom-primary">Sunflower VISA Navigator</span> can simplify your visa journey.
      </p>

      {/* Lottie Animation */}
      <Slide direction="up" duration={1000}>
        <div className="w-72 mx-auto mb-8">
        </div>
      </Slide>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div
          className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500"
          data-tip="Apply for visas easily online"
        >
          <div className="text-4xl mb-4 text-custom-primary">
            🌍
          </div>
          <h3 className="text-xl font-semibold mb-2">Global Access</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with visa opportunities for countries worldwide.
          </p>
        </div>

        {/* Feature 2 */}
        <div
          className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500"
          data-tip="Track your application status in real time"
        >
          <div className="text-4xl mb-4 text-custom-darkGreen">
            📈
          </div>
          <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Stay updated with live tracking of your application status.
          </p>
        </div>

        {/* Feature 3 */}
        <div
          className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500"
          data-tip="Your data is safe and encrypted"
        >
          <div className="text-4xl mb-4 text-custom-secondary">
            🔒
          </div>
          <h3 className="text-xl font-semibold mb-2">Data Security</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Enjoy secure services with top-notch encryption standards.
          </p>
        </div>

        {/* Feature 4 */}
        <div
          className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500"
          data-tip="Get 24/7 support for all queries"
        >
          <div className="text-4xl mb-4 text-custom-accent">
            🎧
          </div>
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Reach out anytime for assistance with your visa needs.
          </p>
        </div>

        {/* Feature 5 */}
        <div
          className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500"
          data-tip="Personalized visa guidance for you"
        >
          <div className="text-4xl mb-4 text-custom-darkBlue">
            🤝
          </div>
          <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Get expert advice tailored to your visa requirements.
          </p>
        </div>

        {/* Feature 6 */}
        <div
          className="border-2 p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500"
          data-tip="Fast approvals with minimal paperwork"
        >
          <div className="text-4xl mb-4 text-custom-yellow">
            🚀
          </div>
          <h3 className="text-xl font-semibold mb-2">Quick Approvals</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Simplify your journey with fast and efficient approvals.
          </p>
        </div>
      </div>

      {/* React Tooltip */}
    </section>
  );
};

export default FeaturesSection;
