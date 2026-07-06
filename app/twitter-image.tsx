export const runtime = 'edge';

export default async function Image() {
  return new Response(
    `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <!-- Background gradient -->
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FFF7ED;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#FFFFFF;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FEF3C7;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#F97316;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#F59E0B;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bg)"/>
      
      <!-- Decorative circles -->
      <circle cx="100" cy="100" r="80" fill="#FED7AA" opacity="0.3"/>
      <circle cx="1100" cy="530" r="100" fill="#FDE68A" opacity="0.3"/>
      <circle cx="900" cy="150" r="60" fill="#FDBA74" opacity="0.2"/>
      
      <!-- Main content container -->
      <g transform="translate(100, 150)">
        <!-- Logo/icon -->
        <g transform="translate(0, 50)">
          <circle cx="60" cy="60" r="50" fill="url(#accent)"/>
          <!-- Paw print -->
          <ellipse cx="60" cy="70" rx="18" ry="22" fill="white"/>
          <circle cx="35" cy="55" r="10" fill="white"/>
          <circle cx="60" cy="48" r="10" fill="white"/>
          <circle cx="85" cy="55" r="10" fill="white"/>
        </g>
        
        <!-- Brand name -->
        <text x="140" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="bold" fill="#1F2937">
          Hellobubul
        </text>
        
        <!-- Tagline -->
        <text x="140" y="140" font-family="system-ui, -apple-system, sans-serif" font-size="32" fill="#6B7280">
          Platform Terpercaya untuk Anabul Indonesia
        </text>
        
        <!-- Features -->
        <g transform="translate(140, 200)">
          <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#F97316" font-weight="600">
            🏥 Vet Terverifikasi
          </text>
          <text x="0" y="50" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#F59E0B" font-weight="600">
            💊 Obat Original
          </text>
          <text x="0" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#F97316" font-weight="600">
            🏠 Adopsi Aman
          </text>
        </g>
        
        <!-- CTA -->
        <text x="140" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#6B7280">
          Join 500+ pet parents di waitlist
        </text>
        
        <!-- URL -->
        <text x="140" y="470" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#F97316" font-weight="bold">
          hellobubul.vercel.app
        </text>
      </g>
      
      <!-- Bottom decoration -->
      <g transform="translate(800, 450)">
        <!-- Cat silhouette -->
        <ellipse cx="50" cy="80" rx="40" ry="50" fill="#FDBA74" opacity="0.5"/>
        <circle cx="30" cy="40" r="15" fill="#FDBA74" opacity="0.5"/>
        <circle cx="70" cy="40" r="15" fill="#FDBA74" opacity="0.5"/>
        <polygon points="30,30 25,10 40,25" fill="#FDBA74" opacity="0.5"/>
        <polygon points="70,30 75,10 60,25" fill="#FDBA74" opacity="0.5"/>
      </g>
    </svg>`,
    {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600, immutable',
      },
    }
  );
}