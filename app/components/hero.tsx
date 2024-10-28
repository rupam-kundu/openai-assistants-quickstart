import React from 'react';
import Login from "../login";

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full text-center md:pr-8">
          <h1 className="text-4xl md:text-5xl font-['Kinto Sans'] font-bold text-blue-900 mt-20 mb-16">BioMed Copilot</h1>
          <p className="text-lg font-bold md:text-3xl text-blue-400 my-20">
            We are building an AI agent for early-stage biomedicine startups to help them on their journey to success.
          </p>
          <Login />
        </div>
      </div>
    </section>
  );
};

export default Hero;
