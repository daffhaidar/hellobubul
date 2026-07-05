'use client';

import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [petName, setPetName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Replace with your Formspree endpoint
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          nama_anabul: petName,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setPetName('');
      } else {
        setError('Oops! Terjadi kesalahan. Coba lagi ya.');
      }
    } catch (err) {
      setError('Oops! Terjadi kesalahan. Coba lagi ya.');
    }
  };

  if (submitted) {
    return (
      <section id="waitlist" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              🎉 Yeay! Kamu Bergabung!
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Terima kasih sudah join waitlist Hellobubul. Kami akan kabari begitu launch!
            </p>
            <div className="bg-orange-50 rounded-2xl p-6">
              <p className="text-orange-800 font-medium">
                🎁 Jangan lupa: Early bird dapat discount 50% untuk konsultasi vet pertama!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
              Join Waitlist 🚀
            </h2>
            <p className="text-xl text-gray-600">
              Jadi yang pertama tahu saat kami launch + dapat discount spesial!
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Kamu *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="nama@email.com"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-lg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="petName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Anabul (Opsional)
                </label>
                <input
                  type="text"
                  id="petName"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="Misal: Mochi, Luna, Oyen"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-lg"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:from-orange-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Gabung Waitlist 🎉
              </button>

              <p className="text-center text-sm text-gray-500">
                🎁 Early bird dapat discount 50% untuk konsultasi vet pertama
              </p>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-center text-gray-600 text-sm">
                Bergabung dengan <span className="font-semibold text-orange-600">500+ pet parents</span> lainnya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}