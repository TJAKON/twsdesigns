import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "TAW DESIGNS & ARCHITECTS",
  description: "Smarter Layouts, Larger Possibilities",
  icons: {
    icon: "/images/logo1.png",
    shortcut: "/images/logo1.png",
  },
  keywords: [
    "TAW Designs",
    "TAW Architects",
    "TAW Architecture",
    "TAW Interior Design",
    "TAW Pune",
    "TAW India",
    "TAW Residential Design",
    "TAW Commercial Design",
    "TAW Eco-friendly Architecture",
    "TAW Smart Design Solutions",
    "TAW Project Management",
    "TAW Green Building Design",
    "TAW Sustainable Architecture",
    "TAW Biophilic Design",
    "TAW Smart Design",
    "TAW Sustainable Design",
    "TAW Architectural Services",
    "Architecture",
    "Interior Design",
    "Pune",
    "India",
    "Residential Design",
    "Commercial Design",
    "Eco-friendly Architecture",
    "Smart Design Solutions",
  ],
  description: "Smarter Layouts, Larger Possibilities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true" data-qb-installed="true">
      <body className="bg-white text-black antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
