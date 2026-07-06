'use client';

import { Instagram, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                🐾 Hellobubul
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Platform terpercaya untuk anabul Indonesia. Temukan vet terbaik, obat original, 
                dan komunitas pecinta anabul dalam satu tempat.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/hellobubul.id" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a 
                  href="mailto:hellobubul.id@gmail.com"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Fitur
                  </a>
                </li>
                <li>
                  <a href="#waitlist" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Join Waitlist
                  </a>
                </li>
                <li>
                  <a href="#vet" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Untuk Vet
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hellobubul.id@gmail.com</li>
                <li>Jakarta, Indonesia</li>
                <li className="pt-2">
                  <span className="text-sm text-gray-500">
                    Senin - Jumat, 09:00 - 17:00 WIB
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} Hellobubul. Dibuat dengan{' '}
                <Heart className="w-4 h-4 inline text-red-500" />{' '}
                untuk anabul Indonesia 🇮🇩
              </p>
              <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}