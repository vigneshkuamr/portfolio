import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import ME from "../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="text-center mb-10">
        <h5 className="text-sm text-gray-400">Get To Know</h5>
        <h2 className="text-3xl text-white font-bold">About Me</h2>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        {/* About Image */}
        <div className="relative mx-auto md:mx-0 w-3/4 md:w-full aspect-square rounded-2xl bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex items-center justify-center">
          <div className="overflow-hidden rounded-2xl transform rotate-6 transition-transform hover:rotate-0">
            <img src={ME} alt="About Me" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* About Content */}
        <div>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Experience Card */}
            <article className="bg-gray-800 p-6 rounded-xl text-center border border-transparent hover:border-indigo-500 transition-colors">
              <BsAwardFill className="text-indigo-500 text-2xl mb-3" />
              <h5 className="text-white text-sm font-semibold">Experience</h5>
              <small className="text-gray-400 text-xs">3+ Years Working</small>
            </article>

            {/* Clients Card */}
            <article className="bg-gray-800 p-6 rounded-xl text-center border border-transparent hover:border-indigo-500 transition-colors">
              <FiUsers className="text-indigo-500 text-2xl mb-3" />
              <h5 className="text-white text-sm font-semibold">Clients</h5>
              <small className="text-gray-400 text-xs">200+ WorldWide</small>
            </article>

            {/* Projects Card */}
            <article className="bg-gray-800 p-6 rounded-xl text-center border border-transparent hover:border-indigo-500 transition-colors">
              <FaProjectDiagram className="text-indigo-500 text-2xl mb-3" />
              <h5 className="text-white text-sm font-semibold">Projects</h5>
              <small className="text-gray-400 text-xs">80+ Completed Projects</small>
            </article>
          </div>

          {/* About Text */}
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum
            recusandae sint ipsam est inventore alias dolorem ducimus voluptatem ipsa quidem
            expedita dolorum porro error ex amet officia, facilis assumenda!
          </p>

          <a href="#contact" className="btn bg-indigo-500 text-white px-8 py-3 rounded-md hover:bg-indigo-600 transition-colors">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
