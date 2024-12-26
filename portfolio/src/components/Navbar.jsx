import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Navbar = () => {
  const [active, setActive] = useState("#");

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 p-3 bg-black bg-opacity-30 backdrop-blur-md rounded-full z-10">
      <a
        onClick={() => setActive("#")}
        className={`${
          active === "#" ? "bg-primary text-bg" : "text-light"
        } p-3 rounded-full hover:bg-black hover:bg-opacity-30 transition-colors`}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActive("#about")}
        className={`${
          active === "#about" ? "bg-primary text-bg" : "text-light"
        } p-3 rounded-full hover:bg-black hover:bg-opacity-30 transition-colors`}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActive("#experience")}
        className={`${
          active === "#experience" ? "bg-primary text-bg" : "text-light"
        } p-3 rounded-full hover:bg-black hover:bg-opacity-30 transition-colors`}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActive("#services")}
        className={`${
          active === "#services" ? "bg-primary text-bg" : "text-light"
        } p-3 rounded-full hover:bg-black hover:bg-opacity-30 transition-colors`}
        href="#services"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => setActive("#contact")}
        className={`${
          active === "#contact" ? "bg-primary text-bg" : "text-light"
        } p-3 rounded-full hover:bg-black hover:bg-opacity-30 transition-colors`}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
