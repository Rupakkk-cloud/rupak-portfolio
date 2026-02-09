import React, { useState } from "react";
import { Mail, Send, MapPin, Database, CheckCircle2, Github, AlertCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykdyrzg";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's Connect</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Ready to start a project or just want to chat? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <a href="mailto:25bcae54@kristujayanti.com" className="flex gap-3">
              <Mail /> 25bcae54@kristujayanti.com
            </a>

            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex gap-3">
              <Github /> GitHub
            </a>

            <div className="flex gap-3">
              <MapPin /> Bengaluru, India
            </div>

            <div className="flex gap-3">
              <Database /> Backend: Formspree
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow">
            {formStatus === "success" ? (
              <div className="text-center">
                <CheckCircle2 className="mx-auto text-green-500" size={48} />
                <h3 className="text-xl font-bold mt-4">Message sent!</h3>
                <p className="text-slate-500">Thanks for reaching out.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-3 border rounded"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full p-3 border rounded"
                />

                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-3 border rounded"
                />

                {formStatus === "error" && (
                  <div className="text-red-600 flex gap-2 items-center">
                    <AlertCircle size={18} />
                    Failed to send message
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-brand-600 text-white py-3 rounded flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? "Sending..." : <>Send Message <Send size={18} /></>}
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
