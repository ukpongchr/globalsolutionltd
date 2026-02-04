import React from 'react';
import { Settings, Zap, Battery, PenTool, BarChart, Truck } from 'lucide-react';

const services = [
  {
    title: "Power Generation",
    icon: <Zap className="w-10 h-10" />,
    description: "Installation, operation, and maintenance of thermal, hydro, and gas turbine power plants. We ensure maximum output efficiency and regulatory compliance."
  },
  {
    title: "High Voltage Engineering",
    icon: <Battery className="w-10 h-10" />,
    description: "Substation design, transformer testing, and transmission line maintenance. We handle voltages up to 500kV with specialized safety protocols."
  },
  {
    title: "Machinery Maintenance",
    icon: <Settings className="w-10 h-10" />,
    description: "Comprehensive preventative and corrective maintenance for heavy industrial machinery, including vibration analysis and oil diagnostics."
  },
  {
    title: "Automation & Control",
    icon: <PenTool className="w-10 h-10" />,
    description: "PLC programming, SCADA system implementation, and upgrading legacy control systems to modern digital standards."
  },
  {
    title: "Energy Audits",
    icon: <BarChart className="w-10 h-10" />,
    description: "Detailed analysis of energy consumption patterns to identify waste and implement cost-saving efficiency measures."
  },
  {
    title: "Heavy Logistics",
    icon: <Truck className="w-10 h-10" />,
    description: "Specialized transport and rigging for oversized generator stators, turbines, and transformers to remote sites."
  }
];

export const Services: React.FC = () => {
  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-industrial-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive engineering solutions tailored to the heavy industry sector.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-primary-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-industrial-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <button className="mt-6 text-primary-600 font-semibold text-sm hover:text-primary-700 flex items-center">
                Learn More <span className="ml-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-display font-bold text-center text-industrial-900 mb-12">Our Working Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['Consultation', 'Analysis & Design', 'Implementation', 'Maintenance'].map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-white p-6 rounded shadow-sm text-center z-10 relative">
                <div className="text-4xl font-bold text-gray-200 mb-2">0{i + 1}</div>
                <h3 className="font-bold text-industrial-800">{step}</h3>
              </div>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};