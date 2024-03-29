import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function NavBar() {
  return (
    <div className="bg-bgColor px-5 py-5">
      <div className="h-20 w-100 bg-white rounded-xl flex flex-row justify-between items-center px-14 py-auto ">
        {/* Brand Logo and Link */}
        <div className="flex flex-row items-center gap-x-12">
          <Link to={"/"}>
            <button>
              <img
                src={require("../../assets/images/Logo-3.png")}
                alt="Brand Logo"
              />
            </button>
          </Link>
          {/* Links */}
          <div className="flex flex-row gap-6">
            <Link to={"/"}>
              <button className="btn btn-ghost">Home</button>
            </Link>
            <Link to={"/videocall"}>
              <button className="btn btn-ghost">Doctors</button>
            </Link>
            <Link to={"/therapist/appointments"}>
              <button className="btn btn-ghost">About Us</button>
            </Link>
            <button className="btn btn-ghost">Pricing</button>
            <button className="btn btn-ghost">Contact</button>
          </div>
        </div>
        {/* Sign Up, Login Button */}
        <div>
          <Link to={"/signup"}>
            <button className="btn mr-5">Sign Up</button>
          </Link>
          <Link to={"/signin"}>
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
