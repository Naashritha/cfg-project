import React, { useState, useEffect } from 'react';

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const partners = [
    { name: 'Jaipuria Institute of Management', logo: '/samurai.jpg' },
    { name: 'Christ University(deemed)', logo: '/samurai.jpg' },
    { name: 'AMITY University', logo: '/samurai.jpg' },
    { name: 'Bennett University', logo: '/samurai.jpg' },
    { name: 'Humans Of Volunteering', logo: '/samurai.jpg' },
    { name: 'Annapurna Finance', logo: '/samurai.jpg' },
    { name: 'Delhi Metro (DMRC)', logo: '/samurai.jpg' },
    { name: 'Ministry of Labour & Employment (G.O.I.)', logo: '/samurai.jpg' },
    { name: 'BDO India', logo: '/samurai.jpg' },
    { name: 'NIRDPR', logo: '/samurai.jpg' },
    { name: 'Vrikshit Foundation', logo: '/samurai.jpg' },
    { name: 'Samcatalyzer', logo: '/samurai.jpg' },
    { name: 'SEHGAL Foundation', logo: '/samurai.jpg' },
    { name: 'Daan Utsav', logo: '/samurai.jpg' },
    { name: 'Umeed Foundation', logo: '/samurai.jpg' },
    { name: 'JAYPEE Institute of Information Technology', logo: '/samurai.jpg' },
    { name: 'Bhumi Org', logo: '/samurai.jpg' },
  ];

  const partnersPerSlide = 5;
  const totalSlides = Math.ceil(partners.length / partnersPerSlide);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const getCurrentPartners = () => {
    const start = currentSlide * partnersPerSlide;
    return partners.slice(start, start + partnersPerSlide);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="bg-gray-50">
      {/* Partners Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <h2 className="text-center text-4xl font-bold leading-tight text-gray-700 mb-16">
            Our Amazing Partners
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Partners Grid */}
            <div className="mx-auto max-w-6xl px-12">
              <div className="grid grid-cols-5 gap-8 items-center">
                {getCurrentPartners().map((partner, index) => (
                  <div 
                    key={`${currentSlide}-${index}`}
                    className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  >
                    {/* Logo Container */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Partner Name */}
                    <h3 className="text-sm font-medium text-gray-700 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {partner.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;