import React from "react";
import IMG1 from "../assets/portfolio1.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 2,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 3,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 4,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 5,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 6,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="text-center mb-10">
        <h5 className="text-sm text-gray-400">My Recent Work</h5>
        <h2 className="text-3xl text-white font-bold">Portfolio</h2>
      </div>

      <div className="container mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {data.map(({ id, image, title, github, demo }) => (
          <article
            key={id}
            className="bg-gray-800 p-6 rounded-2xl border border-transparent hover:border-indigo-500 transition-all"
          >
            <div className="portfolio__item-image overflow-hidden rounded-xl">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mt-6 mb-4">
              {title}
            </h3>
            <div className="portfolio__item-cta flex gap-4">
              <a
                href={github}
                className="btn bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
