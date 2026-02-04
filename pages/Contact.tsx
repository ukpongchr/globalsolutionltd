import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen">
       <div className="bg-industrial-900 h-64 w-full absolute top-20 z-0"></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
         <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
           
           {/* Info Side */}
           <div className="md:w-5/12 bg-primary-600 p-10 text-white">
             <h2 className="text-3xl font-display font-bold mb-6">Contact Information</h2>
             <p className="text-primary-100 mb-10 leading-relaxed">
               Ready to start your next project? Fill out the form or contact us directly. Our engineering team is standing by.
             </p>

             <div className="space-y-6">
               <div className="flex items-start">
                 <div className="bg-primary-500 p-3 rounded-lg mr-4">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Phone</h3>
                   <p className="text-primary-100">+66 2 123 4567</p>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="bg-primary-500 p-3 rounded-lg mr-4">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Email</h3>
                   <p className="text-primary-100">contact@globalsolutions.com</p>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="bg-primary-500 p-3 rounded-lg mr-4">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Headquarters</h3>
                   <p className="text-primary-100">
                     123 Industrial Ave, Tech District,<br />
                     Bangkok 10500, Thailand
                   </p>
                 </div>
               </div>

                <div className="flex items-start">
                 <div className="bg-primary-500 p-3 rounded-lg mr-4">
                   <Clock size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Working Hours</h3>
                   <p className="text-primary-100">
                     Mon - Fri: 08:00 - 17:00<br/>
                     Emergency Support: 24/7
                   </p>
                 </div>
               </div>
             </div>
           </div>

           {/* Form Side */}
           <div className="md:w-7/12 p-10 bg-white">
             <h2 className="text-2xl font-display font-bold text-industrial-900 mb-6">Send us a Message</h2>
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                   <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow" placeholder="John" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                   <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow" placeholder="Doe" />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                 <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow" placeholder="john@example.com" />
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                 <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow bg-white">
                   <option>General Inquiry</option>
                   <option>Power Generation</option>
                   <option>Maintenance Services</option>
                   <option>Electrical Engineering</option>
                   <option>Request Quote</option>
                 </select>
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                 <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow resize-none" placeholder="How can we help you?"></textarea>
               </div>

               <button type="button" className="w-full bg-industrial-900 text-white font-bold py-3 rounded-lg hover:bg-industrial-800 transition-colors shadow-lg">
                 Send Message
               </button>
             </form>
           </div>

         </div>
       </div>
    </div>
  );
};