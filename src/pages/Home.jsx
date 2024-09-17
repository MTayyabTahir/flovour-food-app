import React from "react";
import Navbar from "../Componets/Navbar";
import Catagorymenu from "../Componets/Catagorymenu";
import Fooditems from "../Componets/Fooditems";
import Cart from "../Componets/Cart";
import Upperheader from "../Componets/Upperheader";
import Slider from "../Componets/Slider";
import ServiceSection from "../Componets/ServicesSection";
import ContactUs from "../Componets/Contactus";

function Home() {
  return (
    <>
      <Upperheader />
      <Slider />
      <Navbar />
      <Catagorymenu />
      <Fooditems />
      <Cart />
      <ServiceSection />
      <ContactUs />
    </>
  );
}

export default Home;
