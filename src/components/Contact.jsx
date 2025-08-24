import React from "react";
import bgVideo from "../assets/2phone.mkv";

const Contact = () => {
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen">
      {/* Left Side: Portrait Background Video */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-1/2 w-full h-full object-cover transform -translate-x-1/2 translate-y-16"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/2"></div> {/* subtle overlay */}
      </div>

      {/* Right Side: Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start bg-black/80 text-white px-8 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Explore our products, discover new experiences, and connect with us
          for more exciting updates. We’re here to make your journey amazing.
        </p>

        <div className="space-y-2 text-sm md:text-base drop-shadow-sm">
          <p>📍 Address: Dehiwala, Colombo, Srilanka</p>
          <p>📧 Email: nawaznaveed@gmail.com</p>
          <p>📞 Phone: +94 74 006 7507</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
