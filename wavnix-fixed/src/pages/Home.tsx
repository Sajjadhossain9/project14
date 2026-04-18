import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRight, FaCheck, FaStar, FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const [domainSearchValue, setDomainSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<null | { available: boolean; price: number }>(null);

  const handleDomainSearch = () => {
    if (domainSearchValue.trim()) {
      // Simulate domain search result
      const isAvailable = Math.random() > 0.3;
      setSearchResult({
        available: isAvailable,
        price: 11.99
      });
    }
  };

  const hostingPlans = [
    {
      name: 'Basic Hosting',
      price: 4.99,
      storage: '50 GB',
      bandwidth: '500 GB',
      domains: 1,
      support: 'Email',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Standard Hosting',
      price: 9.99,
      storage: '200 GB',
      bandwidth: 'Unlimited',
      domains: 10,
      support: '24/7 Chat',
      color: 'from-cyan-500 to-teal-500',
      popular: true
    },
    {
      name: 'Premium Hosting',
      price: 19.99,
      storage: 'Unlimited',
      bandwidth: 'Unlimited',
      domains: 'Unlimited',
      support: '24/7 Phone',
      color: 'from-teal-500 to-emerald-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Anderson',
      role: 'CEO, TechStart Inc',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Wavnix transformed our digital presence completely. Their team was professional, attentive, and delivered beyond expectations. Our website now converts 40% more leads!'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Creative Studio',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The hosting is incredibly reliable with 99.9% uptime. Their support team responds instantly to any issues. Best decision we made for our business!'
    },
    {
      name: 'Emma Wilson',
      role: 'Marketing Director, Global Corp',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      rating: 5,
      text: 'From domain registration to full website development, Wavnix handled everything seamlessly. Their AI automation tools saved us hours of work weekly.'
    },
    {
      name: 'David Rodriguez',
      role: 'Entrepreneur, Startup Hub',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Outstanding service quality. The team explained everything clearly, and the pricing is transparent with no hidden fees. Highly recommended!'
    },
    {
      name: 'Lisa Johnson',
      role: 'COO, E-commerce Solutions',
      image: 'https://images.unsplash.com/photo-1517046220202-51e0cf3ee947?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Wavnix helped us scale from 0 to a professional online store. Their digital marketing expertise and technical support are unmatched in the industry.'
    }
  ];

  const services = [
    { title: 'Domain Registration', desc: 'Premium domain names with lifetime support', icon: '🌐' },
    { title: 'Web Hosting', desc: '99.9% uptime with unlimited resources', icon: '☁️' },
    { title: 'Web Design', desc: 'Modern, responsive, conversion-focused designs', icon: '🎨' },
    { title: 'Development', desc: 'Custom software and app development', icon: '💻' },
    { title: 'AI Automation', desc: 'Intelligent automation for business growth', icon: '🤖' },
    { title: 'Digital Marketing', desc: 'SEO, social media, and growth strategies', icon: '📈' }
  ];

  const technologies = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'MySQL'] },
    { category: 'Other', items: ['WordPress', 'REST APIs', 'MongoDB', 'AWS', 'Docker', 'Git'] }
  ];

  const portfolioItems = [
    {
      title: 'TechFlow E-commerce',
      category: 'E-commerce',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565e371?w=500&h=300&fit=crop'
    },
    {
      title: 'Digital Agency Website',
      category: 'Website Design',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop'
    },
    {
      title: 'Mobile Fitness App',
      category: 'Mobile App',
      tech: ['React Native', 'Firebase', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
    },
    {
      title: 'AI Chatbot Platform',
      category: 'AI/Automation',
      tech: ['Python', 'TensorFlow', 'Flask'],
      image: 'https://images.unsplash.com/photo-1677442d019cecf4d4a46022429d1afcf6957b9a?w=500&h=300&fit=crop'
    },
    {
      title: 'Analytics Dashboard',
      category: 'Dashboard',
      tech: ['React', 'D3.js', 'Express'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-950 dark:via-cyan-950/20 dark:to-blue-950/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We Build <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Digital Solutions</span> That Grow Your Business
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                From domain registration and web hosting to custom development and AI automation—we provide everything you need to establish and scale your digital presence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-center">
                  Get Started Free
                </Link>
                <Link to="/services" className="px-8 py-3 border-2 border-cyan-600 text-cyan-600 dark:text-cyan-400 rounded-lg font-semibold hover:bg-cyan-600/10 transition-all duration-300 text-center">
                  View Services
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <FaCheck className="text-cyan-600" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <FaCheck className="text-cyan-600" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div data-aos="fade-left" className="relative h-96 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=500&fit=crop"
                alt="Digital Solutions"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Search Section */}
      <section className="py-16 bg-white dark:bg-slate-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="zoom-in" className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Find Your Perfect Domain</h2>
            <p className="text-gray-600 dark:text-gray-400">Search for available domain names and register them in minutes</p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 backdrop-blur rounded-2xl p-8 border border-cyan-200 dark:border-cyan-800">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                placeholder="e.g., mycompany"
                value={domainSearchValue}
                onChange={(e) => setDomainSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleDomainSearch()}
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              />
              <button
                onClick={handleDomainSearch}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {['.com', '.net', '.org', '.io', '.co', '.app'].map((ext) => (
                <button
                  key={ext}
                  onClick={() => {
                    setDomainSearchValue(domainSearchValue + ext);
                    setTimeout(handleDomainSearch, 100);
                  }}
                  className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors cursor-pointer"
                >
                  {ext}
                </button>
              ))}
            </div>

            {searchResult && (
              <div className={`mt-6 p-4 rounded-lg ${
                searchResult.available
                  ? 'bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700'
                  : 'bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700'
              }`}>
                <p className={`font-semibold ${
                  searchResult.available
                    ? 'text-green-800 dark:text-green-300'
                    : 'text-red-800 dark:text-red-300'
                }`}>
                  {searchResult.available
                    ? `✓ ${domainSearchValue} is available! Starting at $${searchResult.price}/year`
                    : `✗ ${domainSearchValue} is not available. Try another name.`}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hosting Plans Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hosting Plans for Every Scale</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Choose the perfect hosting plan for your website. Upgrade anytime as your business grows.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`relative rounded-2xl overflow-hidden group transition-all duration-300 transform hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-cyan-500 md:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <div className={`bg-gradient-to-br ${plan.color} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-white/80">/month</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-sm">
                    <li className="flex items-center space-x-2">
                      <FaCheck className="flex-shrink-0" />
                      <span>{plan.storage} Storage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaCheck className="flex-shrink-0" />
                      <span>{plan.bandwidth} Bandwidth</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaCheck className="flex-shrink-0" />
                      <span>{plan.domains} Domain(s)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaCheck className="flex-shrink-0" />
                      <span>{plan.support} Support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaCheck className="flex-shrink-0" />
                      <span>Free SSL Certificate</span>
                    </li>
                  </ul>

                  <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors backdrop-blur-sm">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">All plans include 30-day money-back guarantee & 99.9% uptime SLA</p>
            <Link to="/pricing" className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:text-cyan-700">
              <span>View Detailed Pricing</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Services</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to establish and grow your digital presence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
                className="group p-8 rounded-xl bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-xl transition-all duration-300 border border-cyan-100 dark:border-cyan-900/30"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-gray-600 dark:text-gray-400">Cutting-edge tech stack for modern solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {technologies.map((tech, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <h3 className="text-xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">{tech.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {tech.items.map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-cyan-100 dark:border-cyan-900 text-center font-medium text-gray-700 dark:text-gray-300 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">Latest work from our portfolio</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
                className="group rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-800 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold transition-opacity">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mb-2">{item.category}</p>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400">Trusted by hundreds of businesses worldwide</p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div
                  data-aos="fade-up"
                  className="h-full rounded-xl p-8 bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={16} />
                    ))}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12">Stay updated with latest tips, tutorials, and industry insights</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FaFacebook, name: 'Facebook Page', url: 'https://facebook.com', action: 'Follow' },
                { icon: FaLinkedin, name: 'LinkedIn Community', url: 'https://linkedin.com', action: 'Connect' },
                { icon: FaTelegram, name: 'Telegram Channel', url: 'https://telegram.org', action: 'Join' },
                { icon: FaTelegram, name: 'Telegram Group', url: 'https://telegram.org', action: 'Join' }
              ].map((community, idx) => {
                const Icon = community.icon;
                return (
                  <a
                    key={idx}
                    href={community.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-delay={idx * 100}
                    className="group p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border border-cyan-200 dark:border-cyan-900/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-4 group-hover:scale-125 transition-transform" />
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{community.name}</h3>
                    <span className="inline-block px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-semibold group-hover:bg-cyan-700 transition-colors">
                      {community.action}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-white" style={{backgroundImage: 'url(data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23000000" fill-opacity="0.1"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>)'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-cyan-50 mb-10 text-lg">Start with our free domain and hosting consultation today</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3 bg-white text-cyan-600 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
              Get Started Now
            </Link>
            <a href="tel:+1234567890" className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300 text-center">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
