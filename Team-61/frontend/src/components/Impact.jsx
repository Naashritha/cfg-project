import React, { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

const Impact = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [counters, setCounters] = useState({
    students: 0,
    trainingBeneficiaries: 0,
    otherBeneficiaries: 0,
    yearsEstablished: 0
  });

  const finalValues = {
    students: 500,
    trainingBeneficiaries: 1200,
    otherBeneficiaries: 800,
    yearsEstablished: 14
  };

  useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 2500;
    const steps = 80;
    const increment = duration / steps;
    let current = { ...counters };
    function animate() {
      let updated = {
        students: Math.min(current.students + Math.ceil(finalValues.students / steps), finalValues.students),
        trainingBeneficiaries: Math.min(current.trainingBeneficiaries + Math.ceil(finalValues.trainingBeneficiaries / steps), finalValues.trainingBeneficiaries),
        otherBeneficiaries: Math.min(current.otherBeneficiaries + Math.ceil(finalValues.otherBeneficiaries / steps), finalValues.otherBeneficiaries),
        yearsEstablished: Math.min(current.yearsEstablished + Math.ceil(finalValues.yearsEstablished / steps), finalValues.yearsEstablished)
      };
      setCounters(updated);
      current = updated;
      if (
        updated.students < finalValues.students ||
        updated.trainingBeneficiaries < finalValues.trainingBeneficiaries ||
        updated.otherBeneficiaries < finalValues.otherBeneficiaries ||
        updated.yearsEstablished < finalValues.yearsEstablished
      ) {
        frame = setTimeout(animate, increment);
      }
    }
    animate();
    return () => clearTimeout(frame);
    // eslint-disable-next-line
  }, [inView]);

  const stats = [
    { 
      name: 'Students', 
      value: counters.students,
      icon: (
        <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.909V17h2V9L12 3z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Training Beneficiaries', 
      value: counters.trainingBeneficiaries,
      icon: (
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Other Beneficiaries', 
      value: counters.otherBeneficiaries,
      icon: (
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-1.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35zm-6 0c2.67 0 8 1.34 8 4v2H1v-2c0-2.66 5.33-4 8-4z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Years Established', 
      value: counters.yearsEstablished,
      icon: (
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
          </svg>
        </div>
      )
    },
  ];

  return (
    <div ref={ref} className="bg-gradient-to-r from-sky-300 to-blue-400 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Stats Section */}
          <div className="bg-white rounded-3xl py-16 sm:py-20 lg:py-32 px-6 sm:px-8 shadow-lg max-w-sm sm:max-w-md mx-auto lg:-mt-40 lg:-mb-40 relative z-20">
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.name} className="text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {stat.icon}
                  </div>
                  
                  {/* Counter */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    {stat.value.toLocaleString()}+
                  </div>
                  
                  {/* Label */}
                  <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-700 leading-tight">
                    {stat.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="text-white px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-white">
              Our Impact &
              <br />
              Core Values
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 text-blue-50">
              At Diksha Foundation, we believe in <strong>FREEDOM</strong> - fostering an environment where children's 
              natural desire for knowledge flourishes. We embrace <strong>JOY</strong> in learning, making education 
              engaging and effortless. Through <strong>DEMOCRACY</strong>, we create inclusive spaces that help 
              individuals understand their rights while fostering responsibility and peace.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 sm:space-x-4 justify-center lg:justify-start">
              <a 
                href="#" 
                className="w-12 h-12 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 bg-sky-400 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.878-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;