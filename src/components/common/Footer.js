import React from "react";
import Logo from "../../assets/svg/logo";
import EmailIcon from "../../assets/svg/EmailIcon";
import PhoneIcon from "../../assets/svg/PhoneIcon";
import LocationIcon from "../../assets/svg/LocationIcon";
import FacebookIcon from "../../assets/svg/FacebookIcon";
import TwitterIcon from "../../assets/svg/TwiiterIcon";
import LinkedinIcon from "../../assets/svg/LinkedinIcon";

const Footer = () => {
  //Function to open application
  const openEmail = () => {
    window.location.href = "mailto:example@example.com";
  };

  const openPhone = () => {
    window.location.href = "tel:+8412345678";
  };

  const openLocation = () => {
    window.open("https://www.google.com/maps?q=Somewhere+in+the+world");
  };
  return (
    <footer className="py-8">
      <div className="container  justify-between mx-auto md:ml-[40px] flex md:flex-wrap lg:flex-nowrap">
        {/* Column 1 */}
        <div className="w-full md:w-1/2  lg:w-1/4  lg:ml-[80px] lg:mr-[200px]">
          <h3 className="font-bold mb-7">
            <Logo />
          </h3>
          <ul>
            <li
              className="flex items-center mb-3 hover:text-blue-500 cursor-pointer"
              onClick={openEmail}
            >
              <EmailIcon />
              <p className="pl-2 hover:text-blue-500 cursor-pointer">
                example@example.com
              </p>
            </li>
            <li
              className="flex items-center mb-3 hover:text-blue-500 cursor-pointer"
              onClick={openPhone}
            >
              <PhoneIcon />
              <p className="pl-2 hover:text-blue-500 cursor-pointer">
                +84 12345678
              </p>
            </li>
            <li
              className="flex items-center mb-3 hover:text-blue-500 cursor-pointer"
              onClick={openLocation}
            >
              <LocationIcon />
              <p className="pl-2 hover:text-blue-500 cursor-pointer">
                Somewhere in the world
              </p>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/2 lg:w-1/4 mr-[24px]">
          <h3 className="font-bold lg:mb-7 lg:mt-3 md:mb-7 sm:mb-3">Home</h3>
          <ul className="space-y-2 ">
            <li className="mb-2 hover:text-blue-500 cursor-pointer">
              Benefits
            </li>
            <li className="mb-2 hover:text-blue-500 cursor-pointer">
              Our Doctors
            </li>
            <li className="mb-2 hover:text-blue-500 cursor-pointer">
              Our Testimonials
            </li>
            <li className="mb-2 hover:text-blue-500 cursor-pointer">Our FAQ</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full md:w-1/2 lg:w-1/4 mr-[24px]">
          <h3 className="font-bold lg:mb-7 lg:mt-3 md:mb-7 sm:mb-3">
            About Us
          </h3>
          <ul className="space-y-2 ">
            <li className="hover:text-blue-500 cursor-pointer">Company</li>
            <li className="hover:text-blue-500 cursor-pointer">Achievement</li>
            <li className="hover:text-blue-500 cursor-pointer">Our Goals</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="w-full md:w-1/2 lg:w-1/4 mr-[80px]">
          <h3 className="font-bold lg:mb-7 lg:mt-3 md:mb-7 sm:mb-3">
            Social Media
          </h3>
          <ul className="flex">
            <li className="mr-2">
              <FacebookIcon />
            </li>
            <li className="mr-2">
              <TwitterIcon />
            </li>
            <li>
              <i className="fab fa-linkedin"></i> <LinkedinIcon />
            </li>
          </ul>
        </div>
        
      </div>
      <div className="flex justify-center w-full mt-4 text-center border-t pt-4 text-gray-500">
          <p>2023 RMIT. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
