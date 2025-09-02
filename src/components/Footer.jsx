import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialIcons = [
    {
      name: "facebook",
      url: "https://cdn-icons-png.flaticon.com/512/2504/2504903.png",
      link: "#",
    },
    {
      name: "twitter",
      url: "https://cdn-icons-png.flaticon.com/512/2504/2504947.png",
      link: "#",
    },
    {
      name: "instagram",
      url: "https://cdn-icons-png.flaticon.com/512/15713/15713420.png",
      link: "#",
    },
    {
      name: "linkedin",
      url: "https://cdn-icons-png.flaticon.com/512/2504/2504923.png",
      link: "#",
    },
    {
      name: "youtube",
      url: "https://cdn-icons-png.flaticon.com/512/2504/2504965.png",
      link: "#",
    },
  ];

  const footerLinks = [
    { name: "About", link: "#" },
    { name: "Preview", link: "#" },
    { name: "Download", link: "#" },
    { name: "Gallery", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <footer className="main-footer w-full flex items-center justify-center py-30 md:py-50 pb-5 px-4 md:px-0 bg-[#e63946]">
      <div className="container flex flex-col items-center justify-center gap-10 md:gap-20 z-10">
        {/* Newsletter Box */}
        <div className="newsletter-content min-w-full md:min-w-[85%] col-top flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-16 bg-[#ffffff] rounded-4xl relative ">
          <div className="w-full content flex flex-col gap-2 z-40">
            <h3 className="text-black">Subscribe For Our Newsletter</h3>
            <p className="text-lg text-black/75!">
              Connect With Us For Gaming Update.
            </p>
          </div>

          <div className="form-content w-full z-40">
            <form action="#" className="w-full flex flex-col md:flex-row items-baseline md:items-center gap-2 md:gap-0">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="emailForm-polygon p-4 rounded-lg text-white bg-black placeholder:text-white py-4 px-10 w-full text-lg focus:outline-none focus:bg-[#e63946] focus:text-white transition"
                required
              />
              <button
                type="submit"
                className="emailForm-polygon bg-black text-white px-10 py-4 rounded-lg hover:bg-[#e63946] transition cursor-pointer text-lg font-bold w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-content w-full md:w-[85%] flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
          <div className="w-full left flex flex-col gap-2">
            <img src="/Logo.png" alt="Main Logo" className="size-40" />
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              voluptates ex necessitatibus itaque incidunt. Illo aut corporis
              iusto amet obcaecati, facere omnis nisi accusamus adipisci
              repellendus, at quibusdam minima mollitia ratione.
            </p>
          </div>
          <div className="w-full social-container flex flex-col gap-4">
            <h4>Follow with us:</h4>
            <div className="social-icons flex gap-2 items-baseline">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#000000] text-white"
                >
                  <img
                    src={icon.url}
                    alt={`${icon.name} icon`}
                    className="h-6 w-6 invert-100"
                  />
                </a>
              ))}
            </div>
            <ul className="flex pt-2">
              {/* About Preview Download gallery contact */}
              {footerLinks.map((link) => (
                <li
                  key={link.name}
                  className="mr-6 text-sm border-b border-transparent hover:border-white transition ease-in-out duration-300"
                >
                  <Link
                    to={link.link}
                    className="text-sm text-white/80 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs">
              Game trademarks and copyrights are properties of their respective
              owners.{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
