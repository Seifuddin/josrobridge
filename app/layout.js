import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsApp";

export const metadata = {
  title: "Josro Bridge International Limited",
  description:
    "Josro Bridge International Limited provides university placement, IELTS training, business consultancy, professional training, and international labor mobility services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}