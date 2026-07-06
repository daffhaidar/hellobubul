export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hellobubul",
    "alternateName": "Hello Bubul",
    "url": "https://hellobubul.vercel.app",
    "logo": "https://hellobubul.vercel.app/favicon.svg",
    "description": "Platform terpercaya untuk pet parents Indonesia - menemukan vet terbaik, obat original, dan komunitas pecinta anabul.",
    "founder": {
      "@type": "Person",
      "name": "Daffa Haidar"
    },
    "foundingDate": "2026",
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "sameAs": [
      "https://instagram.com/hellobubul.id",
      "https://linkedin.com/company/hellobubul"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hellobubul.id@gmail.com",
      "contactType": "customer service"
    },
    "keywords": [
      "pet care",
      "veterinarian",
      "pet adoption",
      "cat care",
      "dog care",
      "Indonesia",
      "obat hewan",
      "klinik hewan"
    ]
  };

  const scriptJsonLd = {
    __html: JSON.stringify(jsonLd),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={scriptJsonLd}
    />
  );
}