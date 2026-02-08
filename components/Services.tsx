import React from 'react';
import { PenTool, Laptop, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">What I'm Currently Focused On</h2>
          <div className="w-20 h-1.5 bg-brand-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-brand-100 max-w-2xl mx-auto">
            As a student, I dedicate my time to learning, building, and refining my craft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
            <div className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-brand-500/40">
              <Laptop size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Modern Web Tech</h3>
            <p className="text-brand-100 leading-relaxed">
              Diving deep into the React ecosystem, TypeScript, and modern CSS frameworks like Tailwind to build responsive, high-performance web applications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
            <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-purple-500/40">
              <Rocket size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Building Projects</h3>
            <p className="text-brand-100 leading-relaxed">
              Applying my knowledge by working on personal and academic projects. I believe the best way to learn is by doing and solving real-world problems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
            <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-pink-500/40">
              <PenTool size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
            <p className="text-brand-100 leading-relaxed">
              Studying design principles to create interfaces that are not just functional but also intuitive and visually appealing. User experience is key.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
