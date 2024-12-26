import CTA from "./CTA";
import ME from "../assets/me.png"
import HeaderSocials from "./HeaderSocial";

const Header = () => {
  return (
    <header className="h-screen pt-28 overflow-hidden">
      <div className="container mx-auto text-center h-full relative">
        <h5 className="text-white">Hello I'm</h5>
        <h1 className="text-4xl text-white font-bold">iNext Dev</h1>
        <div className="text-light text-lg">Fullstack Developer</div>
        <CTA />
        <div className="relative mt-16 mx-auto w-56 h-72 rounded-t-full bg-gradient-to-b from-primary to-transparent overflow-hidden">
          <img src={ME} alt="ME" className="w-full h-full object-cover" />
        </div>
        <a href="#contact" className="absolute right-[-2.3rem] bottom-20 transform rotate-90 text-sm text-white font-light">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
