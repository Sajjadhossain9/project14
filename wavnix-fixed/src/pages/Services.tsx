import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function Services() {
  const serviceCategories = [
    {
      icon: '🌐',
      title: 'Domain & Hosting Services',
      description: 'Everything you need for online presence',
      services: [
        { name: 'Domain Registration', desc: 'Premium domains with lifetime support' },
        { name: 'Domain Transfer', desc: 'Easy migration from other registrars' },
        { name: 'Domain Management', desc: 'Complete DNS and records control' },
        { name: 'Shared Hosting', desc: 'Affordable hosting for small businesses' },
        { name: 'VPS Hosting', desc: 'Dedicated resources and full control' },
        { name: 'Cloud Hosting', desc: 'Scalable cloud infrastructure' },
        { name: 'Email Hosting', desc: 'Professional email with your domain' },
        { name: 'SSL Certificates', desc: 'Secure your website with HTTPS' }
      ]
    },
    {
      icon: '🎨',
      title: 'Web Services',
      description: 'Professional web design and development',
      services: [
        { name: 'Website Design', desc: 'Modern, responsive, user-friendly designs' },
        { name: 'Website Development', desc: 'Custom development with latest technologies' },
        { name: 'Website Maintenance', desc: 'Ongoing support and updates' },
        { name: 'WordPress Development', desc: 'Powerful WordPress solutions' },
        { name: 'E-commerce Sites', desc: 'Online stores that sell' },
        { name: 'Web Optimization', desc: 'Speed and performance improvements' },
        { name: 'UX/UI Design', desc: 'Beautiful and intuitive interfaces' },
        { name: 'Mobile Design', desc: 'Perfect mobile experience' }
      ]
    },
    {
      icon: '💻',
      title: 'Software & App Development',
      description: 'Custom solutions for your business',
      services: [
        { name: 'Custom Software', desc: 'Bespoke applications built for you' },
        { name: 'Business Systems', desc: 'Enterprise solutions and automation' },
        { name: 'Web Apps', desc: 'Powerful web-based applications' },
        { name: 'Mobile Apps', desc: 'iOS and Android app development' },
        { name: 'API Development', desc: 'RESTful and GraphQL APIs' },
        { name: 'Integration Services', desc: 'Connect your systems seamlessly' },
        { name: 'Game Development', desc: '2D and 3D game creation' },
        { name: 'Database Design', desc: 'Optimized database solutions' }
      ]
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      description: 'Intelligent solutions for efficiency',
      services: [
        { name: 'AI Automation', desc: 'Intelligent process automation' },
        { name: 'Chatbots', desc: 'AI-powered customer support' },
        { name: 'Python Automation', desc: 'Custom automation scripts' },
        { name: 'Workflow Automation', desc: 'Streamline your business processes' },
        { name: 'Machine Learning', desc: 'Predictive analytics and insights' },
        { name: 'Data Processing', desc: 'Automated data handling' },
        { name: 'Bot Development', desc: 'Telegram, Discord, and web bots' },
        { name: 'NLP Solutions', desc: 'Natural language processing' }
      ]
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Grow your online presence and sales',
      services: [
        { name: 'SEO Optimization', desc: 'Rank higher in search engines' },
        { name: 'Meta Ads Management', desc: 'Facebook and Instagram advertising' },
        { name: 'Marketing Strategy', desc: 'Custom growth plans' },
        { name: 'Business Growth', desc: 'Zero to scale services' },
        { name: 'Content Marketing', desc: 'Engaging content creation' },
        { name: 'Email Marketing', desc: 'Automated email campaigns' },
        { name: 'Social Media', desc: 'Full social media management' },
        { name: 'Brand Strategy', desc: 'Build your brand identity' }
      ]
    },
    {
      icon: '📊',
      title: 'Data Services',
      description: 'Turn data into insights',
      services: [
        { name: 'Data Analysis', desc: 'Extract meaningful insights' },
        { name: 'Data Management', desc: 'Organize and secure your data' },
        { name: 'Dashboard Development', desc: 'Interactive data visualization' },
        { name: 'BI Solutions', desc: 'Business intelligence tools' },
        { name: 'Data Cleaning', desc: 'Prepare data for analysis' },
        { name: 'Reporting', desc: 'Comprehensive reports and metrics' },
        { name: 'Data Migration', desc: 'Safe data transfer and integration' },
        { name: 'Database Optimization', desc: 'Improve query performance' }
      ]
    }
  ];

  const features = [
    'Expert team with 8+ years experience',
    '24/7 dedicated customer support',
    'Quick turnaround times',
    'Transparent pricing and communication',
    'Post-launch support included',
    'Regular updates and optimization'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-950 dark:via-cyan-950/20 dark:to-blue-950/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Comprehensive digital solutions to take your business to the next level
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
                className="group rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 p-8 border border-cyan-100 dark:border-cyan-900/30 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{category.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  {category.services.slice(0, 4).map((service, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <FaCheckCircle className="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" size={16} />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{service.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:bg-cyan-100 dark:hover:bg-cyan-900/30 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <span>View All</span>
                  <FaArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Service List</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here's everything we offer to help your business succeed
            </p>
          </div>

          {serviceCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16">
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl">{category.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.services.map((service, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={idx * 50}
                    className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                  >
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{service.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 dark:text-gray-400">How we deliver excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery', desc: 'We understand your goals and requirements' },
              { num: '02', title: 'Planning', desc: 'Create a detailed strategy and timeline' },
              { num: '03', title: 'Execution', desc: 'Build and develop with quality focus' },
              { num: '04', title: 'Support', desc: 'Ongoing maintenance and optimization' }
            ].map((step, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white h-full">
                  <div className="text-4xl font-bold mb-4 opacity-50">{step.num}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-cyan-50">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyan-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Services?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                className="flex items-start space-x-4 p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-cyan-50 mb-10 text-lg">Let's discuss which services are right for your business</p>
          
          <a href="mailto:hello@wavnix.com" className="inline-block px-8 py-3 bg-white text-cyan-600 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
