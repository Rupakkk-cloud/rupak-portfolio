import React from 'react';
import { Loader2, Code2, FolderGit2 } from 'lucide-react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS to showcase my skills and future projects.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    status: 'In Progress',
  },
  {
    id: '2',
    title: 'Student Management System',
    description: 'A console-based application to manage student records, grades, and attendance using C++.',
    tags: ['C++', 'Data Structures', 'File Handling'],
    status: 'Coming Soon',
  },
  {
    id: '3',
    title: 'Task Tracker App',
    description: 'A simple web application to add, delete, and manage daily tasks and to-do lists.',
    tags: ['JavaScript', 'HTML/CSS', 'LocalStorage'],
    status: 'Coming Soon',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">My Portfolio</h2>
          <div className="w-20 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            I am currently working on several personal and academic projects. Here is a sneak peek at what is in the pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              {/* Card Header / Image Placeholder */}
              <div className="h-48 bg-slate-50 flex items-center justify-center border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-100 transition-colors">
                {project.status === 'Coming Soon' ? (
                   <div className="flex flex-col items-center text-slate-400">
                        <Loader2 size={40} className="animate-spin mb-2 text-brand-400" />
                        <span className="font-semibold text-sm tracking-widest uppercase">Coming Soon</span>
                   </div>
                ) : (
                    <div className="flex flex-col items-center text-slate-400">
                        <FolderGit2 size={40} className="mb-2 text-brand-500" />
                        <span className="font-semibold text-sm tracking-widest uppercase text-brand-600">In Development</span>
                    </div>
                )}
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-brand-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;