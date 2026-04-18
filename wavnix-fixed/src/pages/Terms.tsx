export default function Terms() {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-slate-900">
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-950 dark:via-cyan-950/20 dark:to-blue-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-700 dark:text-gray-300">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Wavnix's services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">2. Services</h2>
              <p className="leading-relaxed">
                Wavnix provides digital services including domain registration, web hosting, website design, web development, AI automation, and digital marketing. We reserve the right to modify or discontinue any service at any time with reasonable notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">3. User Responsibilities</h2>
              <p className="leading-relaxed mb-3">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not use our services for any unlawful purpose</li>
                <li>Not attempt to interfere with or disrupt our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">4. Payment Terms</h2>
              <p className="leading-relaxed">
                Payment for services is due as specified in your service agreement. We reserve the right to suspend or terminate services for non-payment. All fees are non-refundable except as specified in our refund policy or required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">5. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Wavnix shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you for the services in the past twelve months.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">6. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, trademarks, and intellectual property on this website are the property of Wavnix unless otherwise stated. You may not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">7. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to update these terms at any time. We will notify users of significant changes via email or a prominent notice on our website. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">8. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms, please contact us at{' '}
                <a href="mailto:hello@wavnix.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                  hello@wavnix.com
                </a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
