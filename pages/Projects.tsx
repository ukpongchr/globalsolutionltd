import React from 'react';
import { MapPin } from 'lucide-react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    title: "Thermal Plant Modernization",
    location: "Rayong, Thailand",
    category: "Power Generation",
    image: "https://picsum.photos/seed/project1/800/600",
    description: "Upgraded control systems for a 500MW thermal power plant, resulting in a 15% increase in operational efficiency."
  },
  {
    title: "Hydroelectric Dam Maintenance",
    location: "Luang Prabang, Laos",
    category: "Maintenance",
    image: "https://picsum.photos/seed/project2/800/600",
    description: "Complete overhaul of Turbine Unit 3, including runner repair and generator rewinding."
  },
  {
    title: "Solar Farm Substation",
    location: "Vietnam",
    category: "Electrical",
    image: "https://picsum.photos/seed/project3/800/600",
    description: "Design and construction of a 115kV substation for a new 50MW solar photovoltaic farm."
  },
  {
    title: "Factory Automation Upgrade",
    location: "Chonburi, Thailand",
    category: "Automation",
    image: "https://picsum.photos/seed/project4/800/600",
    description: "Replaced legacy hydraulic controls with electric servo systems for an automotive parts manufacturer."
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="animate-fade-in pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-industrial-900 mb-4">Featured Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of our technical capabilities and commitment to delivering excellence across borders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin size={14} className="mr-1" />
                  {project.location}
                </div>
                <h3 className="text-2xl font-display font-bold text-industrial-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <button className="text-industrial-900 font-semibold text-sm border-b-2 border-primary-500 pb-0.5 hover:text-primary-600 transition-colors">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};