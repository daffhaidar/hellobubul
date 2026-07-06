import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: July 6, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using hellobubul.vercel.app (the "Service"), you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hellobubul is a platform connecting pet parents with verified veterinarians and authentic pet care 
                products. Currently, we are in the waitlist phase and will notify users upon official launch.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a user of Hellobubul, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Provide accurate and current information when joining the waitlist</li>
                <li>Maintain the security of your email account</li>
                <li>Use the Service in compliance with applicable laws and regulations</li>
                <li>Not misuse or attempt to disrupt the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, features, and functionality of Hellobubul, including but not limited to text, graphics, 
                logos, and software, are the exclusive property of Hellobubul and are protected by copyright, trademark, 
                and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind, 
                whether express or implied. We do not warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>The Service will be uninterrupted, secure, or error-free</li>
                <li>Defects will be corrected</li>
                <li>The Service is free of viruses or other harmful components</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Hellobubul, its directors, employees, or agents be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including but not limited to loss of profits, data, use, 
                goodwill, or other intangible losses, resulting from your access to or use of or inability to access or 
                use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless Hellobubul and its officers, directors, employees, 
                and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, 
                or fees arising out of or relating to your violation of these Terms or your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend access to the Service immediately, without prior notice or liability, for 
                any reason, including without limitation if you breach these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Indonesia, without regard 
                to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by 
                posting the new Terms on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-orange-50 rounded-xl p-6 mb-4">
                <p className="text-gray-800 font-semibold">Email:</p>
                <p className="text-gray-700">hellobubul.id@gmail.com</p>
              </div>
            </section>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                href="/"
                className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}