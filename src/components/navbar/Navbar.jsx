import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const navItem = [
    { name: "Home" },
    { name: "about" },
    { name: "Project" },
    { name: "Blog" },
    { name: "Contact" },
  ];
  return (
    <nav className="bg-teal-500 p-3">
      <div className="container m-auto w-full h-full p-3 flex bg-teal-600 rounded-2xl">
        <div className="w-56 h-full ">logo</div>
        <div className="h-full  flex-1 flex justify-center">
          {/* {navItem.map((index, item) => ( */}
          <li className="py-2 px-5 text-xl text-white list-none">Home</li>
          <li className="py-2 px-5 text-xl text-white list-none">About</li>
          <li className="py-2 px-5 text-xl text-white list-none">Project</li>
          <li className="py-2 px-5 text-xl text-white list-none">Blog</li>
          <li className="py-2 px-5 text-xl text-white list-none">Contact</li>
          {/* ))} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
