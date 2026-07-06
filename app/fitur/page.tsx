import Link from 'next/link';

export default function Fitur() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-4">
              <span className="text-5xl">✨</span>
            </div>
          </div>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Fitur Hellobubul
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Coming Soon! 🚀
          </p>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              Kami sedang mengembangkan fitur-fitur keren untuk memudahkan hidup pet parents. 
              Berikut sneak peek yang akan hadir:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 text-left border-2 border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🏥</span>
                  <h3 className="font-bold text-gray-800">Vet Terverifikasi</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Cari dan booking dokter hewan terdekat dengan profil lengkap, review, dan rating.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-left border-2 border-yellow-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">💊</span>
                  <h3 className="font-bold text-gray-800">Obat Original</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Marketplace obat dan vitamin anabul dengan jaminan keaslian 100%.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 text-left border-2 border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">💬</span>
                  <h3 className="font-bold text-gray-800">Telekonsultasi</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Konsultasi online dengan vet terpercaya via chat atau video call.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-left border-2 border-yellow-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🏠</span>
                  <h3 className="font-bold text-gray-800">Adopsi Aman</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Platform adopsi dengan verifikasi pemilik dan tracking kesehatan anabul.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 text-left border-2 border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">📅</span>
                  <h3 className="font-bold text-gray-800">Reminder Kesehatan</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Jadwal vaksin, vitamin, dan check-up anabul dengan notifikasi otomatis.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-left border-2 border-yellow-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">👥</span>
                  <h3 className="font-bold text-gray-800">Komunitas</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Forum diskusi dan sharing antar pet parents Indonesia.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-orange-100 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Mau jadi yang pertama coba?
            </h3>
            <p className="text-gray-700 mb-6">
              Join waitlist sekarang dan dapatkan early access + diskon 50%!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#waitlist"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Join Waitlist 🚀
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-full transition-all border-2 border-gray-200"
              >
                ← Kembali
              </Link>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-gray-500 text-sm">
            Fitur-fitur di atas sedang dalam pengembangan. Stay tuned! 🐱🐶
          </p>
        </div>
      </div>
    </div>
  );
}
