import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  return (
    <section
      className="bg-gradient-to-r from-green-100 to-green-200 py-20"
      id="contact"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-green-800 mb-12">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-green-600 mb-12">
          We'd love to hear from you! Whether it's a question, a suggestion, or
          a comment, feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-1 text-center mb-16">
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
            <FaPhoneAlt size={40} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Call Us
            </h3>
            <p className="text-green-600">+92 312 345 6789</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
            <FaEnvelope size={40} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Email Us
            </h3>
            <p className="text-green-600">info@flavouerfood.com</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
            <FaMapMarkerAlt size={40} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Visit Us
            </h3>
            <p className="text-green-600">123 Food Street, Islamabad</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 rounded-lg shadow-lg mx-auto w-full lg:w-2/3">
          <h3 className="text-2xl font-semibold text-green-700 mb-8">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full p-4 h-40 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-green-500 text-white rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-green-700 text-center mb-8">
            Our Location
          </h3>
          <div className="w-full h-64 bg-green-300 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.8731194137465!2d-122.08424978469262!3d37.42206597982652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbbf8f8fbbfbb%3A0xf8bbf8fbb!2sGoogleplex!5e0!3m2!1sen!2sus!4v1590922821796!5m2!1sen!2sus"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Flavouer Food Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
