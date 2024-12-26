import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="text-center mb-10">
        <h5 className="text-sm text-gray-400">What Skills I Have</h5>
        <h2 className="text-3xl text-white font-bold">My Experiences</h2>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
        {/* Frontend Development */}
        <div className="bg-gray-800 p-8 rounded-2xl border border-transparent hover:border-indigo-500 transition-colors">
          <h3 className="text-center text-indigo-500 text-xl font-semibold mb-6">
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Frontend Skills */}
            {[
              { skill: "HTML", level: "Experienced" },
              { skill: "CSS", level: "Advanced" },
              { skill: "JavaScript", level: "Love It" },
              { skill: "Tailwind", level: "Intermediate" },
              { skill: "Bootstrap", level: "Beginner" },
              { skill: "React", level: "Senior" },
            ].map((item, index) => (
              <article
                key={index}
                className="flex items-start gap-4 bg-gray-900 p-4 rounded-lg"
              >
                <BsPatchCheckFill className="text-indigo-500 text-xl mt-1" />
                <div>
                  <h4 className="text-white text-sm font-semibold">
                    {item.skill}
                  </h4>
                  <small className="text-gray-400 text-xs">{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Backend Development */}
        <div className="bg-gray-800 p-8 rounded-2xl border border-transparent hover:border-indigo-500 transition-colors">
          <h3 className="text-center text-indigo-500 text-xl font-semibold mb-6">
            Backend Development
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Backend Skills */}
            {[
              { skill: "NodeJs", level: "Experienced" },
              { skill: "Express", level: "Advanced" },
              { skill: "Mongo", level: "Love It" },
              { skill: "Next.js", level: "Intermediate" },
              { skill: "MySQL", level: "Beginner" },
              { skill: "PHP", level: "Senior" },
            ].map((item, index) => (
              <article
                key={index}
                className="flex items-start gap-4 bg-gray-900 p-4 rounded-lg"
              >
                <BsPatchCheckFill className="text-indigo-500 text-xl mt-1" />
                <div>
                  <h4 className="text-white text-sm font-semibold">
                    {item.skill}
                  </h4>
                  <small className="text-gray-400 text-xs">{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
