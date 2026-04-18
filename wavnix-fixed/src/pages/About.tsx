import { FaCheckCircle, FaAward, FaUsers, FaGlobeAmericas } from 'react-icons/fa';

export default function About() {
  const stats = [
    { icon: FaUsers, label: 'Happy Clients', value: '500+' },
    { icon: FaGlobeAmericas, label: 'Countries Served', value: '45+' },
    { icon: FaAward, label: 'Projects Completed', value: '1200+' },
    { icon: FaCheckCircle, label: 'Years Experience', value: '8+' }
  ];

  const values = [
    {
      title: 'Innovation',
      desc: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.'
    },
    {
      title: 'Reliability',
      desc: '99.9% uptime guarantee and 24/7 support ensure your business never goes offline.'
    },
    {
      title: 'Transparency',
      desc: 'No hidden fees, clear pricing, and honest communication with every client partnership.'
    },
    {
      title: 'Excellence',
      desc: 'Premium quality work delivered on time, every time. Your success is our success.'
    },
    {
      title: 'Security',
      desc: 'Enterprise-grade security measures protect your data and your customers information.'
    },
    {
      title: 'Support',
      desc: 'Dedicated account managers and round-the-clock support for peace of mind.'
    }
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      name: 'Jessica Lee',
      role: 'CTO & Tech Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
    },
    {
      name: 'Sarah Williams',
      role: 'Client Success Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-950 dark:via-cyan-950/20 dark:to-blue-950/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Wavnix</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We're a team of passionate developers, designers, and digital strategists dedicated to transforming businesses through technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Wavnix was founded in 2016 with a simple mission: to empower businesses of all sizes with world-class digital solutions. What started as a small team of three has grown into a company serving over 500 clients across 45 countries.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                We've built our reputation on delivering exceptional results, maintaining transparent relationships, and providing unmatched support. Whether you're a startup launching your first website or an enterprise scaling globally, we have the expertise and dedication to help you succeed.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Today, we're proud to be one of the fastest-growing digital agencies, recognized for our innovation, reliability, and commitment to client success.
              </p>
            </div>

            <div data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Team working"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  className="text-center p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
                className="group p-8 rounded-xl bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-cyan-100 dark:border-cyan-900/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-125 transition-transform">
                  <FaCheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experienced professionals driving innovation and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="group text-center"
              >
                <div className="relative mb-6 rounded-2xl overflow-hidden h-64 group-hover:shadow-2xl transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-cyan-600 dark:text-cyan-400 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Wavnix?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <div className="space-y-6">
                {[
                  'Custom solutions tailored to your specific needs',
                  '99.9% uptime guarantee with SLA',
                  '24/7 dedicated customer support',
                  'Industry-leading security practices',
                  'Transparent pricing with no hidden fees',
                  'Proven track record of success'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Why choose us"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-cyan-50 mb-10 text-lg">Let's discuss how we can help grow your business</p>
          
          <a href="mailto:hello@wavnix.com" className="inline-block px-8 py-3 bg-white text-cyan-600 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
