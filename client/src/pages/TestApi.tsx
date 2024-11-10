import { Link } from "react-router-dom";
import faceImage from "../assets/images/gp.png";
import tfaceImage from "../assets/images/ct.png";
import wfaceImage from "../assets/images/wt.png";
import Header from "../components/Header";
import ComingSoonModal from "../components/ComingSoonModal";
import { useState } from "react";
import { MdDoubleArrow } from "react-icons/md";

export default function TestApi() {
  const [isComingSoonOpen, setComingSoonOpen] = useState(true);

  const toggleComingSoon = () => {
    setComingSoonOpen(!isComingSoonOpen);
  };
  return (
    <div>
      <Header />
      {/* 1ST API FEATURE */}
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
            <h2 className="text-4xl font-extrabold text-gray-100 font-josefin">
              Age Detector
            </h2>
            <p className="text-[#ffd166]">
              Upload or take a photo and get instant age estimates with our
              smart age-detection app, designed to be fun, fast, and incredibly
              easy to use. Whether you’re curious about how young you look, want
              to challenge friends to see who appears the youngest, or simply
              want a quick and entertaining way to pass the time, our app
              provides accurate and engaging age estimates in seconds. Give it a
              try and uncover a new perspective on how you’re seen!
            </p>
            <Link to={"/test/age-detectorApi"}>
              <button className="mt-8 px-10 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-200 transform hover:scale-105">
                Try For Free Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2ND API FEATURE */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#faedcd] to-[#457b9d]">
        <div className="max-w-6xl mx-auto flex gap-5 flex-col lg:flex-row items-center justify-between">
          {/* Left side - Image */}

          <div className="w-full lg:w-1/2 space-y-5 lg:pl-12 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-gray-100 font-josefin">
              Content Detector(NSFW)
            </h2>
            <p className="">
              Our app helps you swiftly detect and filter out inappropriate or
              sensitive content, ensuring only suitable material reaches your
              users. Whether you're managing social media, an educational
              platform, or business communications, our advanced technology
              offers reliable protection. With real-time scanning and analysis,
              it identifies and blocks harmful content before it becomes an
              issue, keeping your platform safe, professional, and engaging.
              Discover how our solution can improve content quality and safety
              for your community today.
            </p>

            <Link to={"/test/NSFW-Api"}>
              <button className="mt-8 px-10 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-200 transform hover:scale-105">
                Try For Free Now
              </button>
            </Link>
          </div>
          {/* Right side - Text and Features */}

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <img
              src={tfaceImage}
              alt="Face detection"
              className="w-80 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* 3rd API FEATURE */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0F1923] to-[#457b9d]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <img
              src={wfaceImage}
              alt="Face detection"
              className="w-80 h-auto rounded-lg  transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right side - Text and Features */}
          <div className="w-full lg:w-1/2 space-y-5 lg:pl-12 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-gray-100 font-josefin">
              Content Moderation
            </h2>
            <p className="text-[#ffafcc]">
              Our app combines powerful Content Moderation API with intelligent
              Behavioral Analysis to protect and enhance your platform. Detect
              inappropriate, offensive, or harmful content automatically, and
              get insights into user behavior patterns for proactive
              intervention. Whether you’re running a social media site, an
              educational platform, or a business forum, our solution helps you
              safeguard your community with precision and ease.
            </p>
            <Link to={"/test/Content-ModerateApi"}>
              <button className="mt-8 px-10 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-200 transform hover:scale-105">
                Try For Free Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center m-5">
        {/* Button to toggle the Coming Soon modal */}
        <button
          onClick={toggleComingSoon}
          className="btn rounded-full bg-green-500 text-white p-5"
        >
          <MdDoubleArrow />
        </button>
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={isComingSoonOpen} onClose={toggleComingSoon} />
    </div>
  );
}
