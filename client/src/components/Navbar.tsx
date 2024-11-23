import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/Frame 36 (1).png";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="sticky top-0 z-50 bg-white shadow md:shadow-none">
      <Layout>
        <div className="flex justify-between items-center p-5  text-black">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <img src={logo} alt="Xyra Logo" className="w-40" />
            </Link>
          </div>

          {/* Links and Button (Desktop View) */}
          <div className="hidden md:flex gap-5 items-center font-josefin text-lg">
            <Link to={"/"}>
              <p className="cursor-pointer text-blue-500 hover:text-blue-400">
                Home
              </p>
            </Link>
            <p className="cursor-wait ">About</p>
            <p className="cursor-wait">Contact Us</p>

            <button
              onClick={toggleModal}
              className=" text-lg text-blue-400 underline decoration-blue-500 decoration-2 underline-offset-4 hover:text-blue-600 hover:decoration-blue-700 transition duration-200"
            >
              Request API
            </button>
          </div>
          <div className="lg:flex gap-3 items-center  hidden">
            <button className="border px-3 border-blue-300 border-2 p-1  font-josefin">
              sign up
            </button>
            <button className="bg-[#02A9EA] px-4 text-white rounded p-1 font-josefin">
              sign in
            </button>
          </div>

          {/* Hamburger Icon (Mobile View) */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-white font-josefin text-2xl gap-10 z-50">
            <p onClick={toggleMenu} className="cursor-pointer text-blue-500">
              Home
            </p>
            <p
              onClick={toggleMenu}
              className="cursor-pointer hover:text-gray-300"
            >
              About
            </p>
            <p
              className="top-0 absolute right-2 p-5 cursor-pointer text-3xl text-red-800"
              onClick={toggleMenu}
            >
              <CgClose />
            </p>
            <p
              onClick={toggleMenu}
              className="cursor-pointer hover:text-gray-300"
            >
              Contact
            </p>
            <button
              onClick={() => {
                toggleModal();
                toggleMenu();
              }}
              className=""
            >
              API
            </button>
          </div>
        )}

        {/* Request API Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full relative mx-5 md:mx-0">
              <div className="flex justify-end ">
                <img src={logo} alt="" className="h-5 " />
              </div>

              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700">
                    Purpose of API Use
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your purpose"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
}
