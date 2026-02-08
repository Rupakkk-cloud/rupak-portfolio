import React, { useState } from 'react';
import { Mail, Send, MapPin, Database, CheckCircle2, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Ready to start a project or just want to chat? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 font-display">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a href="mailto:25bcae54@kristujayanti.com" className="flex items-start gap-4 group">
                  <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-500 break-all">
                      25bcae54@kristujayanti.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-slate-100 text-slate-700 rounded-xl">
                    <Github size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">GitHub</h4>
                    <p className="text-slate-500">Check out my code</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Location</h4>
                    <p className="text-slate-500">Bengaluru, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">System Status</h4>
                    <p className="text-slate-500 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Online & Ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50">
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-500">
                  Thanks for reaching out. I’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xykdyrzg"
                method="POST"
                onSubmit={() => setFormStatus('success')}
                className="space-y-6"
              >
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border bg-slate-50"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border bg-slate-50"
                />

                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border bg-slate-50 resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-700 flex justify-center items-center gap-2"
                >
                  Send Message <Send size={18} />
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
