import React from 'react';

const MissionVision = () => {
  return (
    <div>
      {/* Mission & Vision Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-x-16 lg:gap-y-16">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-blue-600 mb-6 sm:mb-8">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Diksha Foundation offers holistic education to children from socially and economically 
                marginalized communities in India. Since 2010, our movement has been towards creating 
                <span className="font-bold text-blue-600"> "transformative learning spaces for children"</span>. 
                We believe education is a journey of self-discovery, self-love and self-esteem - a process 
                of change from within that transforms habits, worldviews, and one's relationships and 
                responsibilities towards the community.
              </p>
            </div>
            
            {/* Vision */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-blue-600 mb-6 sm:mb-8">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Our idea of education is not confined to mere literacy alone. We focus on the holistic 
                education of the child by looking at the social, creative and moral development of each 
                student. The three R's – <span className="font-bold text-blue-600">Relationship, 
                Responsibility and Reverence for all life</span> are taken into consideration while 
                imparting education. We envision creating an inclusive space where children can explore 
                their potential and pursue their dreams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section with Background Image */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/mission.jpg')`
          }}
        />
        
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8">
              Help us transform lives through education
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium mb-8 sm:mb-12 leading-relaxed">
              Every child deserves quality education and the opportunity to reach their full potential.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://dikshafoundation.org/donate/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base lg:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                DONATE NOW
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-yellow-400 rounded-full opacity-30 animate-ping"></div>
      </div>
    </div>
  );
};

export default MissionVision;