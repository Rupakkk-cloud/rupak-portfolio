import React, { useState } from 'react';
import { Mail, Send, MapPin, Database, CheckCircle2, Github, AlertCircle } from 'lucide-react';

const FORMSPREE_URL = "https://formspree.io/f/xykdyrzg";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] =
    useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Formspree error");

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (err) {
      console.error(err);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* INFO */}
          <div className="space-y-6">
            <a href="mailto:25bcae54@kristujayanti.com" className="flex gap-4">
              <Mail /> 25bcae54@kristujayanti.com
            </a>
            <a href="https://github.com/" target="_blank" className="flex gap-4">
              <Github /> GitHub
            </a>
            <div className="flex gap-4">
              <MapPin /> Bengaluru, India
            </div>
            <div className="flex gap-4">
              <Database /> Backend: Formspree
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white p-8 rounded-xl shadow">
            {formStatus === 'success' ? (
              <div className="text-center">
                <CheckCircle2 className="mx-auto text-green-500" size={48} />
                <h3 className="text-xl font-bold mt-4">Message Sent!</h3>
                <p>I’ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-3 border rounded"
                />

                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full p-3 border rounded"
                />

                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="w-full p-3 border rounded"
                />

                {formStatus === 'error' && (
                  <div className="text-red-600 flex gap-2 items-center">
                    <AlertCircle size={18} />
                    Failed to send. Try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-brand-600 text-white py-3 rounded"
                >
                  {formStatus === 'submitting' ? "Sending..." : <>Send <Send size={16} /></>}
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
