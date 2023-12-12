import React from "react";
import EmailIcon from "../../assets/svg/EmailIcon";
import FacebookIcon from "../../assets/svg/FacebookIcon";
import LinkedinIcon from "../../assets/svg/LinkedinIcon";
import LocationIcon from "../../assets/svg/LocationIcon";
import Logo from "../../assets/svg/logo";
import PhoneIcon from "../../assets/svg/PhoneIcon";
import TwitterIcon from "../../assets/svg/TwiiterIcon";
import Text from "./Text";

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
    <footer className="bg-white pt-10 flex flex-col gap-4">
      <div className="flex justify-between px-20">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center ">
          <Logo />
          <Text variant="text-2xl" weight="bold">
            MindHeal
          </Text>
        </div>

        <div className="flex gap-2 items-center">
          <EmailIcon />
          <Text className="hover:text-blue-500" noLink={false}>
          hello@menheal.com
          </Text>
        </div>

        <div className="flex gap-2 items-center hover:text-blue-500">
          <PhoneIcon/>
          <Text className="hover:text-blue-500" noLink={false}>
          +91 91813 23 2309
          </Text>
        </div>

        <div className="flex gap-2 items-center">
          <LocationIcon/>
          <Text className="hover:text-blue-500" noLink={false}>
          Somewhere in the World
          </Text>
        </div>
      </div>

      <div className="flex gap-32">
        <div className="flex flex-col gap-2">
          <Text weight="semibold" noLink={false} className="hover:text-blue-500">Home</Text>
          <Text className="text-gray-500 hover:text-blue-500" noLink={false}>Benefits</Text>
          <Text className="text-gray-500 hover:text-blue-500" noLink={false}>Our Doctors</Text>
          <Text className="text-gray-500 hover:text-blue-500" noLink={false}>Our Testimonials</Text>
          <Text className="text-gray-500 hover:text-blue-500" noLink={false}>Our FAQ</Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text weight="semibold" noLink={false} className="hover:text-blue-500">About Us</Text>
          <Text className="text-gray-500 hover:text-blue-500" noLink={false}>Company</Text>
          <Text className="text-gray-500 hover:text-blue-500" noLink={false}>Archivements</Text>
          <Text className="text-gray-500 hover:text-blue-500" noLink={false}>Our Goal</Text>
        </div>

        <div className="flex flex-col gap-2">
          <Text weight="semibold" noLink={false} className="hover:text-blue-500">Home</Text>
          <div className="flex gap-3">
          <FacebookIcon/>
          <TwitterIcon/>
          <LinkedinIcon />
          </div>
        </div>
       
      </div>
      </div>

      <div className="flex justify-center w-full text-center border-t py-4 text-gray-500">
          <p>2023 RMIT. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
