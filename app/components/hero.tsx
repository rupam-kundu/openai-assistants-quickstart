import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full text-center md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mt-20 mb-16">BioMedAI</h1>
          <p className="text-lg font-bold md:text-3xl text-blue-400 my-20">
            We are building an AI agent for Biomedicine startups to help them with their journey to success.
          </p>
          <p className="text-lg font-bold md:text-3xl text-blue-400 mt-20">
            Ask a question and get an answer from our AI agent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
