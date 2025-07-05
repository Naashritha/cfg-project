import React, { useEffect, useState } from 'react';

// Mock useInView hook for demonstration
const useInView = ({ threshold }) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, inView];
};

const PROJECTS = [
  { 
    title: 'KHEL BIHTA CENTER', 
    description: 'Knowledge Hub for Education & Learning serving 250+ children', 
    color: 'from-blue-500 to-blue-700', 
    icon: '🏫',
    details: 'Holistic education with ICT skills & health consultation'
  },
  { 
    title: 'KHEL PATNA CENTER', 
    description: 'Urban learning center providing quality education', 
    color: 'from-green-500 to-green-700', 
    icon: '📚',
    details: 'Alternative education with peer learning approach'
  },
  { 
    title: 'ENGLISH ACCESS PROGRAM', 
    description: 'Micro-scholarship program for English learning', 
    color: 'from-purple-500 to-purple-700', 
    icon: '🗣️',
    details: 'Building communication skills & global opportunities'
  },
  { 
    title: 'MY LIFE MERE FAISLEY', 
    description: 'Life skills program preventing child marriage', 
    color: 'from-pink-500 to-pink-700', 
    icon: '💪',
    details: 'Empowering adolescents with decision-making skills'
  },
  { 
    title: 'BAL SANSAD', 
    description: 'Children\'s parliament fostering democracy', 
    color: 'from-indigo-500 to-indigo-700', 
    icon: '🏛️',
    details: 'Democratic participation above gender & caste'
  },
  { 
    title: 'PROJECT ALIVE', 
    description: 'Community development & awareness initiative', 
    color: 'from-orange-500 to-orange-700', 
    icon: '🌱',
    details: 'Building responsible global citizens'
  },
  { 
    title: 'JAGRIK PROJECT', 
    description: 'Youth collective for social change (2018-2020)', 
    color: 'from-teal-500 to-teal-700', 
    icon: '👥',
    details: 'Empowering Bihar youth for community development'
  },
  { 
    title: 'SUSTAINABLE URBANIZATION', 
    description: 'Inclusive urban development in Patna', 
    color: 'from-red-500 to-red-700', 
    icon: '🏙️',
    details: 'Creating sustainable & inclusive communities'
  },
];

const SDGSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);

  return (
    <section ref={ref} className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900 mb-4 lg:mb-6">
            Our Projects & Initiatives
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 lg:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4">
            Diksha Foundation runs multiple projects focusing on holistic education, life skills, 
            and community development. Each initiative aims to create transformative learning spaces 
            for children from marginalized communities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-20">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className={`
                bg-gradient-to-br ${project.color} rounded-2xl lg:rounded-3xl 
                flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8
                aspect-square shadow-xl transition-all duration-500 ease-out
                transform backdrop-blur-sm border border-white/20
                ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
                hover:scale-105 hover:shadow-2xl hover:rotate-1 cursor-pointer group
                relative overflow-hidden
              `}
              style={{ transitionDelay: show ? `${i * 150}ms` : '0ms' }}
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
              
              <div className="text-center w-full relative z-10">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 lg:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-white text-xs sm:text-sm lg:text-base font-bold leading-tight mb-2 lg:mb-3 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm leading-tight mb-3 lg:mb-4 font-medium">
                  {project.description}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-white/80 text-xs sm:text-sm italic leading-tight bg-black/20 rounded-lg p-2 lg:p-3 backdrop-blur-sm">
                    {project.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Stats Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl lg:rounded-[2rem] shadow-2xl p-6 sm:p-8 lg:p-12 border border-white/50 mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 mb-8 lg:mb-12">
            Our Impact
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[
              { number: "250+", label: "Children Served at KHEL Bihta", color: "text-blue-600", bgColor: "bg-blue-100" },
              { number: "15+", label: "Years of Experience", color: "text-green-600", bgColor: "bg-green-100" },
              { number: "8", label: "Active Projects", color: "text-purple-600", bgColor: "bg-purple-100" },
              { number: "100%", label: "Holistic Approach", color: "text-orange-600", bgColor: "bg-orange-100" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`${stat.bgColor} rounded-2xl lg:rounded-3xl p-4 lg:p-6 mb-3 lg:mb-4 transition-transform duration-300 group-hover:scale-105`}>
                  <div className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium leading-tight px-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Call to Action */}
        <div className="text-center">
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto">
            Support our projects and help us expand transformative education to more children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <a 
              href="https://dikshafoundation.org/donate/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 lg:px-12 py-3 lg:py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-base lg:text-lg min-w-[200px]"
            >
              <span className="mr-2">💝</span>
              Donate Now
            </a>
            <a 
              href="https://dikshafoundation.org/our-projects/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-bold px-8 lg:px-12 py-3 lg:py-4 rounded-full border-2 border-blue-600 hover:border-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-base lg:text-lg min-w-[200px]"
            >
              <span className="mr-2">🔍</span>
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;