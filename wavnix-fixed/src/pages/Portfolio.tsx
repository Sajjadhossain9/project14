import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TechFlow E-commerce Platform',
      category: 'e-commerce',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565e371?w=600&h=400&fit=crop',
      description: 'Full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      client: 'TechFlow Inc',
      year: '2023',
      challenge: 'Build scalable platform to handle 100k+ daily users',
      results: 'Increased conversion rate by 35%, reduced load time by 60%'
    },
    {
      id: 2,
      title: 'Digital Agency Website',
      category: 'website',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      description: 'Modern, responsive portfolio website with smooth animations and interactive elements.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      client: 'Creative Studios',
      year: '2023',
      challenge: 'Create stunning visual experience with fast performance',
      results: '98 Lighthouse score, 40% increase in inquiries'
    },
    {
      id: 3,
      title: 'Mobile Fitness Tracking App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      description: 'Cross-platform fitness app with real-time workout tracking, progress analytics, and social features.',
      technologies: ['React Native', 'Firebase', 'Google Fit API', 'Stripe'],
      client: 'FitPro Solutions',
      year: '2023',
      challenge: 'Real-time data sync across platforms with offline support',
      results: '50k+ downloads, 4.8★ rating, $100k revenue'
    },
    {
      id: 4,
      title: 'AI-Powered Chatbot Platform',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1677442d019cecf4d4a46022429d1afcf6957b9a?w=600&h=400&fit=crop',
      description: 'Intelligent chatbot platform using NLP and machine learning for customer support automation.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'PostgreSQL', 'Redis'],
      client: 'Enterprise Corp',
      year: '2023',
      challenge: 'Process 10k+ conversations daily with 95%+ accuracy',
      results: 'Reduced support costs by 60%, improved response time by 80%'
    },
    {
      id: 5,
      title: 'Real Estate Dashboard',
      category: 'dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Interactive analytics dashboard for real estate data visualization and property management.',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL', 'AWS'],
      client: 'PropTech Solutions',
      year: '2023',
      challenge: 'Visualize complex real estate data in real-time',
      results: 'Process 100k+ properties, 5x faster data loading'
    },
    {
      id: 6,
      title: 'SaaS Management System',
      category: 'website',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      description: 'Complete SaaS platform with subscription management, user onboarding, and billing automation.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
      client: 'StartupHub',
      year: '2023',
      challenge: 'Build scalable multi-tenant architecture',
      results: 'Support 1000+ teams, $500k ARR in first year'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'e-commerce', label: 'E-commerce' },
    { id: 'app', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'dashboard', label: 'Dashboards' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-950 dark:via-cyan-950/20 dark:to-blue-950/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Showcase of successful projects and satisfied clients
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                      <a href="#" className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-colors">
                        <FaExternalLinkAlt className="text-white" />
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-colors">
                        <FaGithub className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-semibold">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Case Study</h2>
            <p className="text-gray-600 dark:text-gray-400">Deep dive into one of our most successful projects</p>
          </div>

          {/* Feature the first project */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div data-aos="fade-left">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{projects[0].title}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">Challenge</h4>
                  <p className="text-gray-600 dark:text-gray-400">{projects[0].challenge}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">Solution</h4>
                  <p className="text-gray-600 dark:text-gray-400">{projects[0].description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">Results</h4>
                  <p className="text-gray-600 dark:text-gray-400">{projects[0].results}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="#" className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Projects Completed', value: '200+' },
              { label: 'Happy Clients', value: '500+' },
              { label: 'Team Members', value: '45+' },
              { label: 'Years of Experience', value: '8+' }
            ].map((stat, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg"
              >
                <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Project Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery & Planning', desc: 'Understand your goals and plan the project' },
              { num: '02', title: 'Design & Prototyping', desc: 'Create mockups and get your approval' },
              { num: '03', title: 'Development', desc: 'Build with quality and best practices' },
              { num: '04', title: 'Launch & Support', desc: 'Deploy and provide ongoing support' }
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready for Your Next Project?</h2>
          <p className="text-cyan-50 mb-10 text-lg">Let's create something amazing together</p>
          
          <a href="mailto:hello@wavnix.com" className="inline-block px-8 py-3 bg-white text-cyan-600 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
