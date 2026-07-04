import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsApp";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://josrobridge.com"),

  title: {
    default: "Josro Bridge - Study Abroad & University Placement Kenya",
    template: "%s | Josro Bridge",
  },

  description:
    "Josro Bridge International Limited provides university placement, IELTS training, business consultancy, professional training, and international labor mobility services.",

  keywords: [
    "study abroad Kenya",
    "university placement",
    "IELTS training Kenya",
    "visa assistance Kenya",
    "international education consultants",
    "Josro Bridge",
    "study abroad agency Kenya",
    "work abroad programs",
  ],

  authors: [{ name: "Josro Bridge International Limited" }],
  creator: "Josro Bridge International Limited",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Josro Bridge - Study Abroad & University Placement Kenya",
    description:
      "University placement, IELTS training, visa support, and global education services.",
    url: "https://josrobridge.com",
    siteName: "Josro Bridge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Josro Bridge International Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Josro Bridge - Study Abroad & University Placement Kenya",
    description:
      "Study abroad, IELTS training, visa support, and international education services.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "LytfC-YtYYBFDGgk0_jDnv_OgwYiwzqBwHWKxa4hI1c",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 🔥 GOOGLE ANALYTICS 4 (GA4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-45W2JEJ488"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-45W2JEJ488');
          `}
        </Script>

        {/* GLOBAL SCHEMA MARKUP (SEO POWER BOOST) */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Josro Bridge International Limited",
              url: "https://josrobridge.com",
              logo: "https://josrobridge.com/favicon.ico",
              description:
                "Josro Bridge International Limited provides study abroad services, IELTS training, university placement, visa assistance, and international education consultancy in Kenya.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
              },
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
              contactPoint: {
                contactType: "customer support",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}