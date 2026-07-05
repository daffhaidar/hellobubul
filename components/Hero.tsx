'use client';

import { Heart, MapPin, Shield, PawPrint } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-8 animate-fade-in">
            <PawPrint className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Coming Soon 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Hellobubul
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            Platform Terpercaya untuk <span className="font-semibold text-orange-600">Anabul Indonesia</span>
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Temukan vet terbaik, obat original, dan komunitas pecinta anabul dalam satu platform. 
            Karena mereka lebih dari sekadar hewan.
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Vet Terverifikasi</h3>
              <p className="text-gray-600 text-sm">Hanya vet bersertifikat yang bisa join platform kami</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Obat Original</h3>
              <p className="text-gray-600 text-sm">100% garansi uang kembali jika menemukan obat palsu</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Adopsi Aman</h3>
              <p className="text-gray-600 text-sm">Shelter terverifikasi, anti penipuan dan penganiayaan</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#waitlist"
              className="group bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Join Waitlist
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a 
              href="https://instagram.com/hellobubul" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all duration-300"
            >
              Follow Instagram
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Bergabung dengan pet parents dari</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <PawPrint className="w-5 h-5 text-orange-500" />
                <span className="text-gray-600 font-medium">Jakarta</span>
              </div>
              <div className="flex items-center gap-2">
                <PawPrint className="w-5 h-5 text-orange-500" />
                <span className="text-gray-600 font-medium">Bandung</span>
              </div>
              <div className="flex items-center gap-2">
                <PawPrint className="w-5 h-5 text-orange-500" />
                <span className="text-gray-600 font-medium">Surabaya</span>
              </div>
              <div className="flex items-center gap-2">
                <PawPrint className="w-5 h-5 text-orange-500" />
                <span className="text-gray-600 font-medium">Yogyakarta</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}