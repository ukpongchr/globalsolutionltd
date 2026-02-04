import React from 'react';
import { Page } from '../types';
import { Zap, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-industrial-900 text-white pt-12 pb-6 border-t border-industrial-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 p-1.5 rounded mr-2">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl uppercase">Global Solutions</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Pioneering the future of power generation and industrial maintenance with sustainable, high-efficiency engineering solutions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-primary-500">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary-400 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-primary-400 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-primary-400 transition-colors">Our Services</button></li>
              <li><button onClick={() => onNavigate('projects')} className="hover:text-primary-400 transition-colors">Projects</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-primary-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-primary-500">Expertise</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Power Plant Operations</li>
              <li>Turbine Maintenance</li>
              <li>High Voltage Grid</li>
              <li>Industrial Automation</li>
              <li>Renewable Integration</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-primary-500">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-primary-500 shrink-0" />
                <span>123 Industrial Ave, Tech District,<br />Bangkok 10500, Thailand</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-primary-500 shrink-0" />
                <span>+66 2 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary-500 shrink-0" />
                <span>info@globalsolutions-eng.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-industrial-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Global Solutions Engineering Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};