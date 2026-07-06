import Link from 'next/link';

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-4">
              <span className="text-5xl">🐾</span>
            </div>
          </div>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Tentang Kami
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Coming Soon! 🚀
          </p>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              Kami sedang mempersiapkan halaman lengkap tentang Hellobubul dan tim di baliknya. 
              Sementara itu, yuk kenalan sama misi kami:
            </p>
            
            <div className="bg-orange-50 rounded-2xl p-8 my-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Misi Hellobubul</h2>
              <p className="text-gray-700 leading-relaxed">
                Membangun platform terpercaya untuk pet parents Indonesia - 
                menyediakan akses ke vet terverifikasi, obat original, dan komunitas 
                yang genuinely care tentang kesejahteraan anabul.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-yellow-50 rounded-xl p-6">
                <div className="text-3xl mb-2">💚</div>
                <h3 className="font-bold text-gray-800 mb-2">Cinta Anabul</h3>
                <p className="text-gray-600 text-sm">Didirikan oleh pemilik 8 kucing yang paham betul struggle pet parents</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-bold text-gray-800 mb-2">Terpercaya</h3>
                <p className="text-gray-600 text-sm">Hanya bekerja dengan vet terverifikasi dan produk original</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <div className="text-3xl mb-2">🤝</div>
                <h3 className="font-bold text-gray-800 mb-2">Komunitas</h3>
                <p className="text-gray-600 text-sm">Membangun ekosistem yang saling support antar pet parents</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              ← Kembali ke Beranda
            </Link>
            <Link 
              href="https://instagram.com/hellobubul.id"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Follow Instagram 📸
            </Link>
          </div>

          {/* Footer note */}
          <p className="text-gray-500 text-sm mt-8">
            Halaman lengkap akan segera hadir. Stay tuned! 🐱🐶
          </p>
        </div>
      </div>
    </div>
  );
}
