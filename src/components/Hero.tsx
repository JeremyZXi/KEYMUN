import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Keystone Model United Nation
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">

          </p>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                November 7-9, 2025  @Keystone Academy, Beijing
            </h3>
            {/*<a
            href="#upcoming-events"
            className="bg-[#20273a] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#9e0a3b] transition duration-300"
          >
            Explore Events
          </a>*/}
        </div>
      </div>
    </div>
  );
};

export default Hero;