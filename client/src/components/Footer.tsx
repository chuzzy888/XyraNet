import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LiaRobotSolid } from "react-icons/lia";
import logo from "../assets/images/Frame 36 (1).png";

const Footer = () => {
  return (
    <div>
      <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-10 py-10 bg-[#181818] w-full">
        {/* Company Information */}
        <div className="w-full text-left">
          {/* <h1 className="text-white font-bold text-[1.5rem]">
            Luxand.cloud FaceAPI
          </h1> */}
          <img src={logo} alt="" className="h-8" />
          <p className="text-[#b6b6af] py-[1rem]">© 2024 Luxand, Inc</p>
          <p className="text-[#b6b6af]">
            451 Hungerford Dr, Suite 300, Rockville, MD, 20850 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full text-[#b6b6af] text-left sm:pl-10">
          <p className="text-md font-semibold">FaceSDK</p>
          <p className="mt-2 text-md font-semibold">FaceAPI</p>
          <p className="mt-2 text-md font-semibold">FaceAPI vs FaceSDK</p>
          <p className="mt-2 text-md font-semibold">About the company</p>
          <p className="mt-2 text-md font-semibold">Terms of Use</p>
          <p className="mt-2 text-md font-semibold">Privacy Policy</p>
          <p className="mt-2 text-md font-semibold">Cookie Policy</p>
        </div>

        {/* Contact Section */}
        <div className="w-full text-left">
          <p className="text-white text-md font-bold">(800) 471 56 36</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start text-2xl gap-4 w-full text-left sm:pl-10">
          <CiLinkedin className="text-white cursor-pointer hover:text-blue-600" />
          <FaSquareXTwitter className="text-white cursor-pointer hover:text-blue-400" />
          <LiaRobotSolid className="text-white cursor-pointer hover:text-gray-400" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
