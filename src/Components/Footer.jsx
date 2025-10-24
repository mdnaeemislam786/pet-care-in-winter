import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated BG*/}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 -right-8 w-24 h-24 bg-cyan-300 rounded-full blur-lg opacity-30 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-white rounded-full blur-md opacity-40 animate-ping"></div>
        <div className="absolute -bottom-5 right-1/4 w-28 h-28 bg-blue-200 rounded-full blur-2xl opacity-25 animate-pulse"></div>
      </div>

      <div data-aos="fade-right" className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 transform hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <span className="text-2xl">🐾</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                WarmPaws
              </h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed text-lg">
              Providing the finest care and services for your beloved pets. We
              are committed to ensuring their health, happiness, and well-being
              with premium quality care.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-right" className="transform hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent mb-6 pb-3 border-b-2 border-cyan-500/30 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { icon: "🏠", text: "Home", path: "/" },
                { icon: "🛠️", text: "Services", path: "/services" },
                { icon: "ℹ️", text: "About Us", path: "/" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-blue-100 hover:text-cyan-300 transition-all duration-300 flex items-center group hover:translate-x-2 transform"
                  >
                    <span className="mr-3 text-lg group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-semibold group-hover:text-cyan-200">
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="slide-up" className="transform hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent mb-6 pb-3 border-b-2 border-cyan-500/30 inline-block">
              Contact Info
            </h4>
            <ul className="space-y-4">
              {[
                { icon: "📧", text: "md.abu.naeem786@gmail.com" },
                { icon: "📱", text: "+880 1829594791" },
                { icon: "🏢", text: "Dhaka, Bangladesh" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-blue-100 group"
                >
                  <span className="mr-4 text-xl group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium group-hover:text-cyan-200 transition-colors duration-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-cyan-100 text-center md:text-left mb-4 md:mb-0">
              <p className="text-lg">
                &copy; 2025 WarmPaws. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-cyan-100">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "FAQ",
              ].map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="hover:text-cyan-300 hover:scale-105 transform transition-all duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
