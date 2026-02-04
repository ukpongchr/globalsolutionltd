import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-industrial-900 mb-4">About Global Solutions</h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-display font-bold text-industrial-800 mb-6">Engineering Excellence Since 2003</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Global Solutions started as a small consultancy firm specializing in hydraulic systems. Over two decades, we have expanded into a multinational engineering powerhouse, serving clients across Southeast Asia, the Middle East, and Europe.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our mission is to provide sustainable, reliable, and efficient power generation and maintenance solutions that drive industrial growth while minimizing environmental impact.
            </p>
            <div className="bg-gray-50 border-l-4 border-primary-600 p-4 italic text-gray-700">
              "We don't just fix machines; we engineer reliability into every system we touch."
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
             <img 
              src="https://picsum.photos/seed/engineers/800/600" 
              alt="Engineers working" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-industrial-900 mb-10 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-64 bg-gray-200">
                  <img 
                    src={`https://picsum.photos/seed/person${i}/400/500`} 
                    alt="Team Member" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-industrial-800">John Doe {i}</h3>
                  <p className="text-sm text-primary-600 font-medium">Senior Engineer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};