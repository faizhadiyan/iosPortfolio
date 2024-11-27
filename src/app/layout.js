import localFont from 'next/font/local';
import './globals.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'My Portfolio',
  description: 'iOS Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="iOS Developer Portfolio" />
        {/* Add more SEO tags */}
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}