import heroImage from "../assets/images/wr.png";
import {
  FaDatabase,
  FaCode,
  FaBolt,
  FaDollarSign,
  FaChartLine,
  FaRocket,
  FaShieldAlt,
  FaSmile,
} from "react-icons/fa";
import str from "../assets/images/str.png";
import g2BestSupport from "../assets/images/t1.png";
import g2EasyToDoBusiness from "../assets/images/t2.png";
import g2HighPerformer from "../assets/images/t3.png";
import sourceForgeLoveUs from "../assets/images/t4.png";
import slashdotLoveUs from "../assets/images/t5.png";
import faceImage from "../assets/images/wed.jpeg";
import universalLogo from "../assets/images/partners (1).png";
import samsungLogo from "../assets/images/partners.png";
import pgLogo from "../assets/images/image 126.png";
import lgLogo from "../assets/images/image 127.png";
import vsLogo from "../assets/images/logowhite.png";

import { FaClock, FaEye, FaUserShield } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Hero() {
  return (
    <div>
      <Layout>
        <section className="py-8 px-4  text-black ">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between relative ">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left max-w-lg space-y-5 z-10">
              <h1 className="text-2xl md:text-5xl font- leading-tight font-josefin">
                Empowering a Safer Digital World with{" "}
                <span className="text-yellow-400">XyraNet</span>
              </h1>
              <p className="text-lg md:text-xl font-lato text-gray-800">
                XyraNet's AI-driven tools provide proactive protection against
                inappropriate content, cyberbullying, and online
                threats—ensuring a safe online experience for all.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                <img src={str} alt="" className="h-12" />
              </div>
            </div>

            {/* Right side - Hero image with decorative graphic */}
            <div className="mt-10 lg:mt-0 relative">
              {/* Decorative Circle Background */}
              {/* <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-300/20 rounded-full blur-lg" />
              <div className="absolute top-0 -right-8 w-32 h-32 bg-green-400/20 rounded-full blur-lg" /> */}
              {/* Hero Image */}
              <img
                src={heroImage}
                alt="SafeNet hero"
                className="w-full max-w-md rounded-xl shadow-lg z-10"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="md:text-5xl text-xl font-bold text-gray-800 mb-12 font-josefin">
              Trusted by Customers
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* Each logo image */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-200 transform hover:scale-105">
                <img
                  src={g2BestSupport}
                  alt="Best Support 2024"
                  className="h-20 w-auto"
                />
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-200 transform hover:scale-105">
                <img
                  src={g2HighPerformer}
                  alt="High Performer 2024"
                  className="h-20 w-auto"
                />
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-200 transform hover:scale-105">
                <img
                  src={sourceForgeLoveUs}
                  alt="Customers Love Us SourceForge"
                  className="h-20 w-auto"
                />
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-200 transform hover:scale-105">
                <img
                  src={slashdotLoveUs}
                  alt="Users Love Us Slashdot"
                  className="h-20 w-auto"
                />
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-200 transform hover:scale-105">
                <img
                  src={g2EasyToDoBusiness}
                  alt="Easiest to Do Business With 2024"
                  className="h-20 w-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-gradient-to-r from-[#a8dadc] to-[#457b9d]">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <img
                src={faceImage}
                alt="Face detection"
                className="w-80 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right side - Text and Features */}
            <div className="w-full lg:w-1/2 space-y-5 lg:pl-12 text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-gray-100">
                API Features
              </h2>
              <ul className="text-lg text-gray-200 space-y-4">
                <li className="flex items-center space-x-3">
                  <FaSmile className="text-white text-2xl" />
                  <span>Face Recognition</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaUserShield className="text-white text-2xl" />
                  <span>Age Detection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaEye className="text-white text-2xl" />
                  <span>Content Detection (NSFW)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaShieldAlt className="text-white text-2xl" />
                  <span>Content Moderation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaChartLine className="text-white text-2xl" />
                  <span>Behavioral Analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaClock className="text-white text-2xl" />
                  <span>Real-Time Monitoring</span>
                </li>
              </ul>
              <Link to={"/test"}>
                <button className="mt-8 px-10 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-200 transform hover:scale-105">
                  Try out demo
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-20 px-6 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 tracking-wide font-josefin">
              Our Customers
            </h2>
          </div>
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-10">
            <img
              src={universalLogo}
              alt="Universal"
              className="h-16 object-contain opacity-90 hover:opacity-100 transition duration-300"
            />
            <img
              src={samsungLogo}
              alt="Samsung"
              className="h-16 object-contain opacity-90 hover:opacity-100 transition duration-300"
            />
            <img
              src={pgLogo}
              alt="P&G"
              className="h-16 object-contain opacity-90 hover:opacity-100 transition duration-300"
            />
            <img
              src={lgLogo}
              alt="LG"
              className="h-16 object-contain opacity-90 hover:opacity-100 transition duration-300"
            />
            <img
              src={vsLogo}
              alt="LG"
              className="h-16 object-contain transition duration-300 bg-green-900 px-4 rounded-full"
            />
          </div>
        </section>
        <section className="py-20 px-8 bg-gray-100">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="md:text-4xl text-xl font-extrabold text-gray-900 mb-4 font-josefin">
              Free AI-Powered Face Recognition API
            </h2>
            <p className="text-lg text-gray-700">
              Xyranet provides cloud-based API for different use cases such as
              facial recognition, face detection, face verification, liveness
              detection, and much more. Why choose Luxand.cloud facial
              recognition API?
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaDatabase className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Secure Cloud Storage
              </h3>
              <p className="text-gray-600">
                Ideal if you need a face database for different devices or
                services. We don't store photos, only neural network templates,
                ensuring safe usage.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaCode className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Supported Programming Languages
              </h3>
              <p className="text-gray-600">
                Our API supports multiple programming languages, with code
                examples you can easily copy and paste into your project.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaBolt className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                High Performance
              </h3>
              <p className="text-gray-600">
                Our high-performance cloud servers ensure rapid response times,
                with face recognition processing in as little as 60ms.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaDollarSign className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                More Cost-Effective
              </h3>
              <p className="text-gray-600">
                Starting at just $19/month for 1000 requests, Luxand.cloud
                offers one of the most affordable solutions on the market.
              </p>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaChartLine className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Highly Scalable Solution
              </h3>
              <p className="text-gray-600">
                Our cloud-based infrastructure scales with your needs, ideal for
                processing large volumes of photos.
              </p>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaRocket className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Turnkey Solution
              </h3>
              <p className="text-gray-600">
                With pre-implemented use cases, our API is simple to integrate,
                providing quick and reliable results.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
