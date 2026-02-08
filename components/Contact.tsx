import React, { useState } from 'react';
import { Mail, Send, MapPin, Database, CheckCircle2, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Ready to start a project or just want to chat? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-5">
              <a href="mailto:25bcae54@kristujayanti.com" className="flex gap-3">
                <Mail /> 25bcae54@kristujayanti.com
              </a>

              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex gap-3">
                <Github /> GitHub
              </a>

              <div className="flex gap-3">
                <MapPin /> Bengaluru, India
              </div>

              <div className="flex gap-3">
                <Database /> Backend: Formspree
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 size={48} className="mx-auto text-green-500 mb-4" />
                <h3 className="text-xl font-bold">Message sent successfully!</h3>
                <p className="text-slate-500">I’ll get back to you soon.</p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xykdyrzg"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="space-y-6"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border"
                />

                <input
                  type="email"
                  name="_replyto"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border"
                />

                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border resize-none"
                />

                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Contact Message"
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-600 text-white rounded-xl flex items-center justify-center gap-2"
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
