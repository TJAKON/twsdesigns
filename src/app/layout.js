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
  title: "TAW Designs",
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
  },
  keywords: [
    "TAW Designs",
    "Architecture",
    "Interior Design",
    "Pune",
    "India",
    "Residential Design",
    "Commercial Design",
    "Eco-friendly Architecture",
    "Smart Design Solutions",
  ],
  description:
    "Smarter Layouts, Larger Possibilities",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <Header />
      <body className="bg-white text-black antialiased">{children}</body>
      <Footer />
    </html>
  );
}
