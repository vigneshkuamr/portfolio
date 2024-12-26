import React from "react";
import AVTR1 from "../assets/avthar.png";

import { Swiper, SwiperSlide } from "swiper/react"; // React components
import { Pagination } from "swiper/modules"; // Individual module for Pagination
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Pagination module styles



const data = [
  {
    id: 1,
    name: "Advan Hune",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR1,
  },
  {
    id: 2,
    name: "Megan Stone",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR1,
  },
  {
    id: 3,
    name: "Evan Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR1,
  },
  {
    id: 4,
    name: "Sophia Lee",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR1,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="text-center mb-10">
        <h5 className="text-sm text-gray-400">Review from clients</h5>
        <h2 className="text-3xl text-white font-bold">Testimonials</h2>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container mx-auto max-w-4xl"
      >
        {data.map(({ id, name, review, image }) => (
          <SwiperSlide
            key={id}
            className="testimonial bg-gray-800 p-8 rounded-2xl text-center"
          >
            <div className="client__avatar w-16 h-16 rounded-full overflow-hidden border-4 border-indigo-500 mx-auto mb-4">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <h5 className="client__name text-lg font-semibold text-white">{name}</h5>
            <small className="client__review text-gray-400 mt-2 block mx-auto w-4/5">
              {review}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
