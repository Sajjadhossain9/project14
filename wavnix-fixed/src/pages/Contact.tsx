import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-950 dark:via-cyan-950/20 dark:to-blue-950/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: FaEnvelope,
                title: 'Email',
                value: 'hello@wavnix.com',
                desc: 'Email us anytime'
              },
              {
                icon: FaPhone,
                title: 'Phone',
                value: '+1 (234) 567-890',
                desc: 'We answer calls 24/7'
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Address',
                value: 'Global Office',
                desc: 'Serving clients worldwide'
              },
              {
                icon: FaClock,
                title: 'Response Time',
                value: '< 2 Hours',
                desc: 'Average response'
              }
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-cyan-100 dark:border-cyan-900/30"
                >
                  <Icon className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{contact.title}</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-1">{contact.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{contact.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="hosting">Web Hosting</option>
                    <option value="domain">Domain Registration</option>
                    <option value="design">Website Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="ai">AI Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700">
                    <p className="text-green-800 dark:text-green-300 font-semibold">
                      ✓ Thank you! We'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Image */}
            <div data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Contact us"
                className="rounded-2xl shadow-2xl h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Answers to common questions about our services</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How quickly will I hear back?',
                a: 'We respond to all inquiries within 2 hours during business hours. For urgent matters, call us directly.'
              },
              {
                q: 'Do you offer free consultations?',
                a: 'Yes! We offer a free 30-minute consultation to discuss your project and how we can help.'
              },
              {
                q: 'What areas do you serve?',
                a: 'We serve clients globally. Our team can work with clients in any timezone.'
              },
              {
                q: 'Can I speak to a human?',
                a: 'Absolutely! Call our support team at +1 (234) 567-890 or email hello@wavnix.com anytime.'
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Yes, we offer comprehensive post-launch support and maintenance packages.'
              },
              {
                q: 'What is your typical project timeline?',
                a: 'Timelines vary based on project scope. We provide detailed estimates during the consultation.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Find Us Online</h2>
            <p className="text-gray-600 dark:text-gray-400">We're available 24/7 across all platforms</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Facebook', url: 'https://facebook.com', desc: '10K+ followers' },
              { name: 'LinkedIn', url: 'https://linkedin.com', desc: 'Professional Network' },
              { name: 'Telegram', url: 'https://telegram.org', desc: 'Join our community' },
              { name: 'Twitter', url: 'https://twitter.com', desc: 'Follow for updates' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="group p-6 rounded-xl bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-cyan-100 dark:border-cyan-900/30 hover:shadow-xl transition-all text-center"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {social.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{social.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start?</h2>
          <p className="text-cyan-50 mb-10 text-lg">Let's discuss your project and create something amazing together</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1234567890" className="px-8 py-3 bg-white text-cyan-600 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
              Call Us Now
            </a>
            <a href="mailto:hello@wavnix.com" className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300 text-center">
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
