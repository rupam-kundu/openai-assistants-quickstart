import React from 'react';
import Login from "../login";

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full text-center md:pr-8">
          <h1 className="text-4xl md:text-5xl font-['Kinto Sans'] font-bold text-blue-900 mt-20 mb-16">BioInvestAI</h1>
          <p className="text-3xl font-bold md:text-3xl text-blue-700 my-10">
            Accelerate Your Biopharma Investments with AI-Powered Due Diligence
          </p>
          <p className="text-2xl font-bold text-blue-600 mt-10 mb-16">
            BioInvestAI is Your Intelligent Assistant for Rapid Preliminary Analysis of Early-Stage Biopharma Startups
          </p>
          <Login />
        </div>
      </div>
    </section>
  );
};

export default Hero;
