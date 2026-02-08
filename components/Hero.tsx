import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-50">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-400/20 rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-brand-100 text-brand-700 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                </span>
                Online & Ready to Code
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1]">
                Rupak K<br/>
                <span className="text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-purple-600 to-blue-600">
                  Computer Science Student
                </span>
              </h1>
              
              <h2 className="text-xl font-medium text-slate-600 max-w-xl mx-auto lg:mx-0">
                Aspiring Web Developer & Software Designer. <br/>
                BCA student at Kristu Jayanti University with a passion for building user-friendly digital experiences.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-brand-600 transition-all hover:scale-105 shadow-xl shadow-slate-900/20 hover:shadow-brand-500/30 flex items-center gap-2 group cursor-pointer"
              >
                View Portfolio
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-all hover:scale-105 shadow-sm flex items-center gap-2 cursor-pointer"
              >
                Contact Me
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative w-full aspect-square max-w-[400px] lg:max-w-[500px] mx-auto">
              {/* Abstract decorative shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-200 to-blue-200 rounded-[2rem] rotate-6 transform scale-95 opacity-60"></div>
              
              {/* Image Container - Profile Picture */}
              <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl rotate-0 transition-transform hover:-rotate-1 duration-500 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                  alt="Web Development Workspace"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-brand-900/0 mix-blend-overlay hover:bg-brand-900/10 transition-colors"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
                 <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
                    <Mail size={20} />
                 </div>
                 <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Get in touch</div>
                    <div className="text-sm font-bold text-slate-900">25bcae54@kristujayanti.com</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;