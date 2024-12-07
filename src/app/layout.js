import './globals.css';
import Navbar from '../components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Faiz Hadiyan | iOS Developer',
  description: 'Professional iOS developer specializing in Swift, SwiftUI, and iOS app development. View my portfolio of iOS applications and get in touch for collaboration.',
  keywords: 'iOS Developer, Swift Developer, SwiftUI, UIKit, iOS Apps, Mobile Development, App Development',
  openGraph: {
    title: 'Faiz Hadiyan | iOS Developer',
    description: 'Professional iOS developer specializing in Swift, SwiftUI, and iOS app development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faiz Hadiyan | iOS Developer',
    description: 'Professional iOS developer specializing in Swift, SwiftUI, and iOS app development.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <title>My Portfolio</title>
        <meta name="description" content="iOS Developer Portfolio" />
        {/* Add more SEO tags */}
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F]">
        <Navbar />
        {children}
        <footer className="bg-white border-t border-[#F5F5F7] py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center text-[#86868B]">
            {/* <p> {new Date().getFullYear()} Faiz Hadiyan. All rights reserved.</p> */}
            <p> 2024 Faiz Hadiyan. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
