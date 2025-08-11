
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>

     <footer className="bg-orange-500 text-white  shadow-lg  ">
      <div className="container mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        
        {/* NGO Info */}
        <div>
          <h2 className="text-3xl font-bold mb-3 italic font-serif">Hopens</h2>
          <p className="text-lg md:text-[21px] lg:text-[19px] leading-relaxed">
            We are dedicated to supporting homeless people by providing shelter,
            food, and hope for a better future. Your help can change lives.
          </p>
        </div>

        {/* Contact Info */}
        <div className="md:ml-15">
          <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
          <p className="flex items-center md:text-[22px] mb-2 hover:text-orange-700 transition">
            <FaEnvelope className="mr-2" /> hopens@email.com
          </p>
          <p className="flex items-center md:text-[17px] hover:text-orange-700 transition">
            <FaPhone className="mr-2" /> +91 9876543210
          </p>
        </div>

        {/* Social Links */}
        <div className="md:ml-15">
          <h3 className="text-2xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-700 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-orange-700 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-orange-700 transition">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="bg-orange-600 text-center py-3 ">
        <p className="text-[16px]">
          © {new Date().getFullYear()} Hopens. All Rights Reserved.
        </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
