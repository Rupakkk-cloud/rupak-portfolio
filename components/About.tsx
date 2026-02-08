import React from 'react';
import { GraduationCap, User, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Get to know more about my journey, education, and what drives me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                <User size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">My Journey</h3>
            </div>
            
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p className="text-lg">
                Hello! I'm <span className="font-semibold text-brand-600">Rupak K</span>, a passionate undergraduate student currently pursuing my BCA in General Computer Science at Kristu Jayanti University (2025–Present).
              </p>
              <p>
                My fascination with technology started early, but it was the world of web development and software design that truly captivated me. I love the process of turning creative ideas into functional, user-friendly digital experiences.
              </p>
              <p>
                I am driven by curiosity and a relentless desire to learn. Whether it's mastering a new JavaScript framework or understanding the nuances of UI/UX design, I am always eager to grow and challenge myself.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-800 text-lg mb-1">Problem Solver</h4>
                <p className="text-sm text-slate-500">Approaching challenges with logic and creativity.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-800 text-lg mb-1">Fast Learner</h4>
                <p className="text-sm text-slate-500">Adapting quickly to new technologies and tools.</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-slate-200 space-y-10">
              <div className="relative">
                <span className="absolute -left-[41px] top-0 p-2 bg-white border-2 border-brand-500 rounded-full text-brand-500">
                  <BookOpen size={16} />
                </span>
                <h4 className="text-xl font-bold text-slate-800">BCA - General Computer Science</h4>
                <p className="text-brand-600 font-medium mb-2">Kristu Jayanti University</p>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full mb-3">
                  2025 - Present
                </span>
                <p className="text-slate-600 text-sm">
                  Focusing on core computer science fundamentals, programming logic, web technologies, and software engineering principles.
                </p>
              </div>
              
              <div className="relative opacity-60">
                 <span className="absolute -left-[41px] top-0 p-2 bg-white border-2 border-slate-300 rounded-full text-slate-400">
                  <BookOpen size={16} />
                </span>
                <h4 className="text-xl font-bold text-slate-800">High School</h4>
                <p className="text-slate-600 font-medium mb-2">Previous Institution</p>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs font-semibold rounded-full mb-3">
                  Completed
                </span>
                <p className="text-slate-500 text-sm">
                  Built a strong foundation in mathematics and computer science basics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
