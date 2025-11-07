import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#d9d9d9] text-gray-800 rounded-tl-[25px] rounded-tr-[25px]">
      {/* Main footer content */}
      <div className="w-screen mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-3 font-roboto-condensed">
        {/* Left Section - Logo and Info */}
        <div className="flex flex-col items-center sm:items-start">
          <Image
                      src="/assets/Logo.png"
                      alt="Nextgen Solution logo"
                      width={40}
                      height={40}
                      priority
                      className="h-10 w-auto"
                    />
          <p className="text-[16px] mb-4 font-medium text-center sm:text-left">
 Building smarter futures with nextgen construction solutions. Developed by SLIIT students.
          </p>
          <div className="flex space-x-4 text-xl justify-center sm:justify-start">
            <a href="#" className="hover:text-purple-600">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-purple-600">
              <FaTiktok />
            </a>
            <a href="#" className="hover:text-purple-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-purple-600">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2 text-[16px] font-normal text-center sm:text-left">
            <li><a href="#home" className="hover:text-cyan-600">Home</a></li>
            <li><a href="#domin" className="hover:text-cyan-600">Domain</a></li>
            <li><a href="#introduction" className="hover:text-cyan-600">About Us</a></li>
          </ul>
        </div>

     {/* Documents */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-semibold mb-3">DOCUMENTS</h3>
          <ul className="space-y-2 text-[16px] font-normal text-center sm:text-left">
            <li><a href="#documents" className="hover:text-cyan-600">Documentation</a></li>
            <li><a href="#presentations" className="hover:text-cyan-600">Presentations</a></li>
          </ul>
        </div>
        {/* USEFUL LINKS  */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-semibold mb-3">USEFUL LINKS </h3>
          <ul className="space-y-2 text-[16px] font-normal text-center sm:text-left">
            <li><a href="#milestones" className="hover:text-cyan-600">Milestones</a></li>
            <li><a href="#features" className="hover:text-cyan-600">Features</a></li>
            <li><a href="#team" className="hover:text-cyan-600">Our Team</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-[16px] font-normal leading-relaxed text-center sm:text-left">
            Subscribe to our newsletter for the latest travel news, exclusive deals, 
            and inspiring stories. Get insider tips and special offers straight to 
            your inbox. Join our community and stay connected!
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t pt-4 pb-6 text-center text-sm text-gray-500 bg-gradient-to-t from-cyan-100 via-transparent to-white">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-700">Nextgen Solution</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
