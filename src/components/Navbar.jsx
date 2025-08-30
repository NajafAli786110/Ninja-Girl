import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="absolute left-0 top-0 z-50 w-full flex items-center justify-center">
      <div className="container py-4 flex justify-between">
        <div className="w-full flex justify-between gap-14">
          {/* Left logo block */}
          <div className=" polygon-logo pl-12 pr-24 py-2">
            <Link to="/">
              <img src="/Logo.png" alt="Website Logo" className="w-[130px]" />
            </Link>
          </div>

          <div className="w-full flex items-center justify-end gap-2 polygon-bg px-8 py-4">
            <nav className="hidden md:block">
              <ul className="relative flex items-center gap-8 px-10 pl-12">
                <li>
                  <a href="#" className="text-md uppercase">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-md uppercase">
                    About Ninja Girl
                  </a>
                </li>
                <li>
                  <a href="#" className="text-md uppercase">
                    Preview
                  </a>
                </li>
                <li>
                  <a href="#" className="text-md uppercase">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="text-md uppercase">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-md uppercase">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <Link
              to="/"
              className="bg-amber-600 py-3.5 px-8 rounded-full text-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
