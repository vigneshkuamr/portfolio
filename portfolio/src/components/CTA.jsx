import CV from "../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="mt-10 flex gap-5 justify-center">
      <a className="btn bg-primary text-white px-6 py-3 rounded-full" href={CV} download>
        Download CV
      </a>
      <a className="btn bg-primary text-white px-6 py-3 rounded-full" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
