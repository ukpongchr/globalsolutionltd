import React from 'react';
import { ArrowRight, Activity, Cpu, Wrench, CheckCircle, Star, Phone, Zap } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-[85vh] w-full bg-industrial-900 flex items-center overflow-hidden">
         {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Industrial Power Plant Engineering" 
            className="w-full h-full object-cover opacity-40 animate-pulse-slow" 
            style={{ animationDuration: '20s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-900 via-industrial-900/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-900/50 border border-primary-500/30 text-white text-sm font-medium mb-8 backdrop-blur-sm shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Available for Emergency Response 24/7
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Reliability</span> <br />
              Into Every System.
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
              Global Solutions minimizes downtime and maximizes efficiency for power generation and heavy industry sectors through expert maintenance and advanced automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg group"
              >
                Get a Free Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('projects')}
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center"
              >
                View Case Studies
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-400 text-sm font-medium border-t border-white/10 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary-500 w-5 h-5" /> ISO 9001 Certified
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary-500 w-5 h-5" /> 24/7 Support
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary-500 w-5 h-5" /> Global Reach
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof / Logo Strip */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest font-semibold mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text placeholders styled as logos for demo */}
            <h3 className="text-2xl font-display font-bold text-industrial-900">POWERGEN</h3>
            <h3 className="text-2xl font-display font-bold text-industrial-900">SIEMENS</h3>
            <h3 className="text-2xl font-display font-bold text-industrial-900 flex items-center gap-1"><Zap className="fill-current" /> GE ENERGY</h3>
            <h3 className="text-2xl font-display font-bold text-industrial-900">MITSUBISHI</h3>
            <h3 className="text-2xl font-display font-bold text-industrial-900">PETRONAS</h3>
          </div>
        </div>
      </div>

      {/* Services Snippet */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-industrial-900 mb-4">Comprehensive Industrial Solutions</h2>
              <p className="text-gray-600 text-lg">
                We combine cutting-edge technology with seasoned engineering expertise to deliver reliable solutions for complex industrial challenges.
              </p>
            </div>
            <button onClick={() => onNavigate('services')} className="hidden md:flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
              Explore All Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => onNavigate('services')}>
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <Activity className="text-primary-600 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">Predictive Maintenance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Reduce downtime by up to 30% with our AI-driven vibration analysis and thermal imaging diagnostics.
              </p>
              <span className="text-primary-600 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => onNavigate('services')}>
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <Cpu className="text-primary-600 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">Grid Modernization</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Upgrade aging infrastructure with smart grid technologies for efficient power distribution and SCADA monitoring.
              </p>
              <span className="text-primary-600 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                View solutions <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => onNavigate('services')}>
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <Wrench className="text-primary-600 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">Turnkey Overhauls</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete strip-down, repair, and commissioning services for gas turbines, steam generators, and large motors.
              </p>
              <span className="text-primary-600 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                See capabilities <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button onClick={() => onNavigate('services')} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Explore All Services <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats with Background Image */}
      <div className="relative py-24 bg-industrial-900 overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Factory Interior" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-500 mb-2">25+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-500 mb-2">500+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider font-medium">Projects Delivered</div>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-500 mb-2">$2B+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider font-medium">Assets Managed</div>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-500 mb-2">100%</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider font-medium">Safety Record</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-center text-industrial-900 mb-16">What Our Partners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Global Solutions modernized our entire substation infrastructure with zero unplanned downtime. Their engineering team is world-class.",
                author: "James Wilson",
                role: "Plant Manager, Rayong Power"
              },
              {
                text: "The predictive maintenance program they implemented saved us millions in potential failure costs last year alone.",
                author: "Sarah Chen",
                role: "Operations Director, Asian Grid Co."
              },
              {
                text: "Professional, safety-conscious, and technically brilliant. The best partner for heavy machinery overhauls.",
                author: "Michael Weber",
                role: "Technical Lead, EuroTech Manufacturing"
              }
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl relative shadow-sm border border-gray-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-bold text-industrial-900">{t.author}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Final CTA / Contact Strip */}
      <div className="bg-primary-600 py-24 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-primary-700 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-xl text-primary-100 mb-10 leading-relaxed">
            Schedule a free technical consultation with our senior engineers to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
               onClick={() => onNavigate('contact')}
               className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg shadow-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              <Phone size={20} /> Schedule Consultation
            </button>
             <button 
               onClick={() => onNavigate('projects')}
               className="px-8 py-4 bg-primary-700/50 border border-white/20 text-white font-bold rounded-lg shadow-lg hover:bg-primary-700 transition-colors"
            >
              Explore Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};