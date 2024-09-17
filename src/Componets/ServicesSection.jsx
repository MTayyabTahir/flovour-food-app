import React, { useEffect, useRef } from "react";
import { FaTruck, FaUtensils, FaConciergeBell } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ServiceSection() {
  const serviceRef = useRef(null);

  const services = [
    {
      icon: <FaTruck size={40} className="text-green-500" />,
      title: "Fast Delivery",
      description:
        "Get your favorite dishes delivered to your doorstep quickly and fresh!",
    },
    {
      icon: <FaUtensils size={40} className="text-green-500" />,
      title: "Exclusive Recipes",
      description:
        "Discover our chef’s secret recipes and cook delicious meals at home.",
    },
    {
      icon: <FaConciergeBell size={40} className="text-green-500" />,
      title: "Catering Services",
      description:
        "Let us cater your events with a variety of gourmet dishes to impress your guests.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      serviceRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="py-20 bg-green-50" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-8">Our Services</h2>
        <p className="text-lg text-green-600 mb-12">
          At Flavouer Food, we bring you the best in culinary experiences, from
          delivery to catering.
        </p>

        <div
          className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          ref={serviceRef}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="mb-6 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-4 group-hover:text-green-600">
                {service.title}
              </h3>
              <p className="text-green-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
