import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="text-center mb-10">
        <h5 className="text-sm text-gray-400">What I Offer</h5>
        <h2 className="text-3xl text-white font-bold">Services</h2>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* Service Cards */}
        {[
          {
            title: "UI/UX Design",
            items: [
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
            ],
          },
          {
            title: "Web Development",
            items: [
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
            ],
          },
          {
            title: "Content Creation",
            items: [
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
              "Lorem ipsum dolor sit amet consectetur adipisicing.",
            ],
          },
        ].map((service, index) => (
          <article
            key={index}
            className="bg-gray-800 rounded-2xl border border-transparent hover:border-indigo-500 transition-colors"
          >
            <div className="bg-indigo-500 text-white p-6 rounded-t-2xl">
              <h3 className="text-lg font-semibold text-center">
                {service.title}
              </h3>
            </div>
            <ul className="p-6 space-y-4">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <BiCheck className="text-indigo-500 mt-1" />
                  <p className="text-gray-400 text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
