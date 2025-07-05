import React, { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [counters, setCounters] = useState({
    kids: 0,
    trees: 0,
    members: 0,
    animals: 0
  });

  const finalValues = {
    kids: 1000,
    trees: 500,
    members: 250,
    animals: 100
  };

  useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;
    let current = { ...counters };
    function animate() {
      let updated = {
        kids: Math.min(current.kids + Math.ceil(finalValues.kids / steps), finalValues.kids),
        trees: Math.min(current.trees + Math.ceil(finalValues.trees / steps), finalValues.trees),
        members: Math.min(current.members + Math.ceil(finalValues.members / steps), finalValues.members),
        animals: Math.min(current.animals + Math.ceil(finalValues.animals / steps), finalValues.animals)
      };
      setCounters(updated);
      current = updated;
      if (
        updated.kids < finalValues.kids ||
        updated.trees < finalValues.trees ||
        updated.members < finalValues.members ||
        updated.animals < finalValues.animals
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
      name: 'Kids taught so far',
      value: counters.kids,
      icon: '👨‍🎓',
      color: 'text-blue-600'
    },
    {
      name: 'Trees planted till date',
      value: counters.trees,
      icon: '🌳',
      color: 'text-green-600'
    },
    {
      name: 'Members Across India',
      value: counters.members,
      icon: '👥',
      color: 'text-purple-600'
    },
    {
      name: 'Animals RESCUED this far',
      value: counters.animals,
      icon: '🐾',
      color: 'text-orange-600'
    },
  ];

  return (
    <div ref={ref} className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Our Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100"
              >
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Counter */}
                <div className={`text-5xl sm:text-6xl font-bold tracking-tight mb-4 ${stat.color} group-hover:scale-105 transition-transform duration-300`}>
                  {stat.value.toLocaleString()}
                  <span className="text-3xl">+</span>
                </div>

                {/* Label */}
                <div className="text-base font-medium text-gray-700 leading-6 group-hover:text-gray-900 transition-colors duration-300">
                  {stat.name}
                </div>

                {/* Decorative element */}
                <div className="mt-6 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          {/* Bottom description */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Code for Good, we create real impact through simple, meaningful actions—from animal welfare to women's empowerment, education, and elder-orphan bonding. We also spark change through corporate volunteering, creative workshops, and hands-on activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;