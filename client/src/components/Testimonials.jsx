import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "The best gym experience I've ever had. World-class equipment and trainers.",
    name: "Rohan Sharma",
    image: "/src/Images/Testomony1.jpeg"
  },
  {
    quote: "I’ve never felt more motivated. ASCE Gym changed my routine and my mindset.",
    name: "Arun Verma",
    image: "src/Images/Testomony2.jpg"
  },
  {
    quote: "Friendly staff, clean environment, and real results. Highly recommended!",
    name: "Akash Mehta",
    image: "src/Images/Testomony3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-800 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        What Our Members Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-700 shadow-2xs rounded-xl p-8 flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-gray-300 mb-4"
                />
                <p className="text-lg italic text-white mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-white text-md">— {testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
