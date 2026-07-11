import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsApp";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.josrobridge.com"),

  title: {
    default:
      "Josro Bridge | Study Abroad, IELTS & University Placement in Kenya",
    template: "%s | Josro Bridge",
  },

  description:
    "Josro Bridge International Limited provides university placement, IELTS training, business consultancy, professional training, international labor mobility, visa guidance, and study abroad services in Kenya.",

  keywords: [
    "Josro Bridge",
    "Josro Bridge International Limited",
    "study abroad Kenya",
    "study in Canada",
    "study in UK",
    "study in Australia",
    "study in New Zealand",
    "university placement",
    "IELTS training Kenya",
    "visa assistance Kenya",
    "international education consultants",
    "work abroad programs",
    "international labor mobility",
  ],

  authors: [
    {
      name: "Josro Bridge International Limited",
    },
  ],

  creator: "Josro Bridge International Limited",
  publisher: "Josro Bridge International Limited",
  applicationName: "Josro Bridge",

  alternates: {
    canonical: "https://www.josrobridge.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title:
      "Josro Bridge | Study Abroad, IELTS & University Placement in Kenya",

    description:
      "University placement, IELTS training, visa support, business consultancy, professional training, and international education services.",

    url: "https://www.josrobridge.com",

    siteName: "Josro Bridge",

    locale: "en_KE",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Josro Bridge",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Josro Bridge",

    description:
      "Study abroad, IELTS training, university placement and visa support.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "LytfC-YtYYBFDGgk0_jDnv_OgwYiwzqBwHWKxa4hI1c",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* GOOGLE ANALYTICS 4 */}
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

        {/* ORGANIZATION SCHEMA */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",

              name: "Josro Bridge",

              alternateName: "Josro Bridge International Limited",

              url: "https://www.josrobridge.com",

              logo: "https://www.josrobridge.com/favicon.ico",

              image: "https://www.josrobridge.com/og-image.jpg",

              description:
                "Josro Bridge International Limited provides study abroad services, university placement, IELTS training, visa assistance, international labor mobility, business consultancy and professional training in Kenya.",

              email: "info@josrobridge.com",

              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
              },

              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                availableLanguage: ["English"],
              },

              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
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