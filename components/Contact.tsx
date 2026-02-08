import React, { useState } from 'react';
import { Mail, Send, MapPin, Database, CheckCircle2, Github, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Connect to the backend API
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error("Submission failed", error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">Let's Connect</h2>
          <div className="w-20 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Ready to start a project or just want to chat? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 font-display">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:25bcae54@kristujayanti.com" className="flex items-start gap-4 group">
                  <div className="p-3 bg-brand-50 text-brand-600 rounded-xl group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-500 group-hover:text-brand-600 transition-colors break-all">
                      25bcae54@kristujayanti.com
                    </p>
                  </div>
                </a>

                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-100 text-slate-700 rounded-xl group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                    <Github size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">GitHub</h4>
                    <p className="text-slate-500 group-hover:text-brand-600 transition-colors">
                      Check out my code
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Location</h4>
                    <p className="text-slate-500">Bengaluru, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">System Status</h4>
                    <p className="text-slate-500 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Online & Ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white">
             {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Received!</h3>
                    <p className="text-slate-500 max-w-xs">
                        Thank you for reaching out. Your message has been saved to the database.
                    </p>
                    <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-8 px-6 py-2 bg-slate-100 text-slate-600 rounded-full font-semibold hover:bg-slate-200 transition-colors"
                    >
                        Send Another
                    </button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                    <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                    />
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    ></textarea>
                </div>

                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={18} />
                    <span>Failed to send message. Is the backend running?</span>
                  </div>
                )}

                <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 px-6 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/30 hover:shadow-brand-600/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {formStatus === 'submitting' ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                    </>
                    ) : (
                    <>Send Message <Send size={18} /></>
                    )}
                </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;