import {
  Mail,
  MapPin,
  Phone,
  Bath,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Social media links aur icons ka array banaya taaki har ek par sahi link kaam kare
  const socialLinks = [
    { Icon: FaFacebookF, url: "#" }, // Apni Facebook profile ka link '#' ki jagah daal dena
    { Icon: FaInstagram, url: "https://www.instagram.com/imperialbathsolution?igsh=ZWE4YXprNGF1YzNu&utm_source=ig_contact_invite" },
    { Icon: FaLinkedinIn, url: "#" } // Apni LinkedIn profile ka link '#' ki jagah daal dena
  ];

  return (
    <footer className="bg-[#0f172a] text-white">

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            {/* <div className="bg-yellow-400 p-3 rounded-full text-black"> */}
              {/* <Bath size={22} /> */}
               <img src="/src/assets/imperial_logo.png" alt="Imperial Logo" className="h-20 w-15 object-contain"/>
            {/* </div> */}
            <h1 className="text-2xl font-bold">Imperial</h1>
          </Link>

          <p className="mt-4 text-sm text-gray-400 leading-6">
            Premium Jacuzzi bathtubs, spa planning, and luxury bathroom concepts
            for homes, villas, hotels, and resorts.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer flex items-center justify-center"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400">Products</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-yellow-400 cursor-pointer">Jacuzzi Bathtubs</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
            {/* <li className="hover:text-yellow-400 cursor-pointer">FAQ</li> */}
            <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-4 text-gray-400 text-sm">
            <div className="flex gap-3 items-start">
              <MapPin size={18} className="text-yellow-400" />
              <span>
                Hanuman Tikri, Ward No. 24
                Shiv Bihar Colony 2
                Near Greenwich School, Tiwari Chowk
                Deoghar, Jharkhand – 814112
                India
              </span>
            </div>

            <div className="flex gap-3 items-center">
              <Phone size={18} className="text-yellow-400" />
              <span>+91 62019 862459</span>
            </div>

            <div className="flex gap-3 items-center">
              <Mail size={18} className="text-yellow-400" />
              <span>imperialbathsolution@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-5 text-sm text-gray-500">
        © 2026 Imperial Luxury Bathtubs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;