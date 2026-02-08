import React from 'react';
import { Code, Database, Layout, Terminal, Users } from 'lucide-react';
import { Skill } from '../types';

const skillsData: { category: string; icon: any; items: string[]; color: string }[] = [
  {
    category: 'Frontend Development',
    icon: Layout,
    items: ['HTML5', 'CSS3', 'JavaScript', 'React (Learning)', 'Tailwind CSS'],
    color: 'text-blue-500 bg-blue-50',
  },
  {
    category: 'Programming Languages',
    icon: Terminal,
    items: ['Python', 'C', 'C++'],
    color: 'text-emerald-500 bg-emerald-50',
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['MongoDB', 'SQL (MySQL)'],
    color: 'text-amber-500 bg-amber-50',
  },
  {
    category: 'Design',
    icon: Code,
    items: ['UI/UX Design', 'Figma', 'Prototyping'],
    color: 'text-purple-500 bg-purple-50',
  },
  {
    category: 'Soft Skills',
    icon: Users,
    items: ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability'],
    color: 'text-rose-500 bg-rose-50',
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">My Skills</h2>
          <div className="w-20 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            A snapshot of the technologies and skills I'm cultivating on my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillSet) => (
            <div
              key={skillSet.category}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${skillSet.color} group-hover:scale-110 transition-transform duration-300`}>
                  <skillSet.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{skillSet.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-lg border border-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
