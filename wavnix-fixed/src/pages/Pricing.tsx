import { FaCheck, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const hostingPlans = [
    {
      name: 'Basic Hosting',
      monthlyPrice: 4.99,
      yearlyPrice: 49.99,
      description: 'Perfect for beginners',
      features: [
        { name: 'Storage', value: '50 GB', included: true },
        { name: 'Bandwidth', value: '500 GB', included: true },
        { name: 'Domains', value: '1 Domain', included: true },
        { name: 'Email Accounts', value: '10', included: true },
        { name: 'Email Support', value: '24/7', included: true },
        { name: 'Phone Support', value: 'Not included', included: false },
        { name: 'Free SSL', value: 'Included', included: true },
        { name: 'Backups', value: 'Weekly', included: true }
      ]
    },
    {
      name: 'Standard Hosting',
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      description: 'Best for small businesses',
      popular: true,
      features: [
        { name: 'Storage', value: '200 GB', included: true },
        { name: 'Bandwidth', value: 'Unlimited', included: true },
        { name: 'Domains', value: '10 Domains', included: true },
        { name: 'Email Accounts', value: 'Unlimited', included: true },
        { name: 'Email Support', value: '24/7', included: true },
        { name: 'Phone Support', value: 'Business Hours', included: true },
        { name: 'Free SSL', value: 'Included', included: true },
        { name: 'Backups', value: 'Daily', included: true }
      ]
    },
    {
      name: 'Premium Hosting',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      description: 'For growing companies',
      features: [
        { name: 'Storage', value: 'Unlimited', included: true },
        { name: 'Bandwidth', value: 'Unlimited', included: true },
        { name: 'Domains', value: 'Unlimited', included: true },
        { name: 'Email Accounts', value: 'Unlimited', included: true },
        { name: 'Email Support', value: '24/7', included: true },
        { name: 'Phone Support', value: '24/7', included: true },
        { name: 'Free SSL', value: 'Included', included: true },
        { name: 'Backups', value: 'Hourly', included: true }
      ]
    }
  ];

  const domainPricing = [
    { extension: '.com', register: '$11.99', transfer: '$11.99', renew: '$11.99' },
    { extension: '.net', register: '$11.99', transfer: '$11.99', renew: '$11.99' },
    { extension: '.org', register: '$12.99', transfer: '$12.99', renew: '$12.99' },
    { extension: '.io', register: '$34.99', transfer: '$34.99', renew: '$34.99' },
    { extension: '.co', register: '$29.99', transfer: '$29.99', renew: '$29.99' },
    { extension: '.app', register: '$13.99', transfer: '$13.99', renew: '$13.99' },
    { extension: '.dev', register: '$14.99', transfer: '$14.99', renew: '$14.99' },
    { extension: '.online', register: '$3.99', transfer: '$3.99', renew: '$3.99' }
  ];

  const specialServices = [
    { name: 'Website Design', price: '$799', description: 'Professional custom design' },
    { name: 'Website Development', price: '$1,499', description: 'Full custom development' },
    { name: 'E-commerce Setup', price: '$2,999', description: 'Complete online store' },
    { name: 'SEO Package', price: '$399/mo', description: 'Monthly SEO service' },
    { name: 'Custom App Dev', price: 'Custom Quote', description: 'Contact for pricing' },
    { name: 'AI Automation', price: 'Custom Quote', description: 'Contact for pricing' }
  ];

  const currentPrice = billingCycle === 'monthly' ? 'monthlyPrice' : 'yearlyPrice';

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-950 dark:via-cyan-950/20 dark:to-blue-950/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            No hidden fees. Pay only for what you use. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-4">
            <span className={`text-lg font-semibold ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-10 w-20 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors"
            >
              <span
                className={`inline-block h-8 w-8 transform rounded-full bg-white shadow-lg transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-10' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-semibold ${billingCycle === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
              Yearly <span className="text-sm text-cyan-600 dark:text-cyan-400 ml-2">Save 17%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Web Hosting Plans</h2>
            <p className="text-gray-600 dark:text-gray-400">Choose the perfect plan for your website</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
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
                
                <div className={`bg-gradient-to-br ${plan.popular ? 'from-cyan-500 to-blue-600' : 'from-blue-500 to-cyan-500'} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-cyan-50 mb-6 text-sm">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${(plan as any)[currentPrice]}</span>
                    <span className="text-cyan-50">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>

                  <button className={`w-full py-3 mb-6 font-semibold rounded-lg transition-all ${
                    plan.popular 
                      ? 'bg-white text-cyan-600 hover:bg-cyan-50' 
                      : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                  }`}>
                    Get Started
                  </button>

                  <div className="space-y-3 text-sm">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        {feature.included ? (
                          <FaCheck className="flex-shrink-0" />
                        ) : (
                          <FaTimes className="flex-shrink-0 opacity-50" />
                        )}
                        <span className={feature.included ? '' : 'opacity-50'}>
                          {feature.name}: {feature.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All plans include 30-day money-back guarantee, free domain for first year, and 24/7 support
            </p>
          </div>
        </div>
      </section>

      {/* Domain Pricing */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Domain Pricing</h2>
            <p className="text-gray-600 dark:text-gray-400">Affordable domain names for all extensions</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-cyan-200 dark:border-cyan-900">
                  <th className="text-left py-4 px-6 font-bold text-gray-900 dark:text-white">Domain Extension</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900 dark:text-white">Register</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900 dark:text-white">Transfer</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900 dark:text-white">Renewal</th>
                </tr>
              </thead>
              <tbody>
                {domainPricing.map((domain, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-cyan-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">{domain.extension}</td>
                    <td className="text-center py-4 px-6 text-gray-700 dark:text-gray-300">{domain.register}</td>
                    <td className="text-center py-4 px-6 text-gray-700 dark:text-gray-300">{domain.transfer}</td>
                    <td className="text-center py-4 px-6 text-gray-700 dark:text-gray-300">{domain.renew}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-400">
              All domains come with free email forwarding, DNS management, and WHOIS protection
            </p>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Professional Services</h2>
            <p className="text-gray-600 dark:text-gray-400">Additional services for complete digital solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialServices.map((service, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
                className="rounded-xl p-8 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pricing FAQ</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Yes! You can change your plan at any time. If you upgrade, we\'ll prorate the charges. If you downgrade, you\'ll receive a credit.'
              },
              {
                q: 'Is there a contract or long-term commitment?',
                a: 'No! All our plans are month-to-month. You can cancel anytime without any penalties or hidden fees.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 30-day money-back guarantee on all hosting plans. If you\'re not satisfied, we\'ll refund 100%.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers. All payments are secure and encrypted.'
              },
              {
                q: 'Are there setup fees?',
                a: 'No setup fees! We believe in transparent pricing. The price you see is what you pay.'
              },
              {
                q: 'Do you offer bulk discounts?',
                a: 'Yes! Contact our sales team for custom quotes on bulk domain registrations or enterprise hosting.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-cyan-100 dark:border-cyan-900/30"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-cyan-50 mb-10 text-lg">Choose your perfect plan and grow your business today</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="px-8 py-3 bg-white text-cyan-600 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
              Get Started Now
            </a>
            <a href="mailto:hello@wavnix.com" className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300 text-center">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
