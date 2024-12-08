import Image from 'next/image';
import Link from 'next/link';

export default function IosApp6() {
  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <Link href="/" className="inline-block mb-8 text-[#0071E3] hover:text-[#0077ED]">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-[#1D1D1F] mb-6">CryptoTracker Pro</h1>

        {/* Project Overview */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#1D1D1F] mb-4">Overview</h2>
              <p className="text-[#86868B] mb-4">A comprehensive cryptocurrency tracking application with real-time price updates, custom charts, and advanced price alerts for crypto enthusiasts.</p>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#1D1D1F]">Key Features:</h3>
                <ul className="list-disc list-inside text-[#86868B] space-y-1">
                  <li>Real-time Price Updates</li>
                  <li>Custom Chart Views</li>
                  <li>Price Alerts</li>
                  <li>Portfolio Tracking</li>
                  <li>Market Analysis</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-video bg-[#F5F5F7] relative rounded-xl overflow-hidden">
                <Image src="/project2-placeholder.svg" alt="Crypto Interface" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1D1D1F] mb-4">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-[#1D1D1F] mb-2">Data Integration</h3>
              <ul className="text-[#86868B] space-y-1">
                <li>WebSocket API</li>
                <li>REST API</li>
                <li>Data Persistence</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-[#1D1D1F] mb-2">Visualization</h3>
              <ul className="text-[#86868B] space-y-1">
                <li>Custom Charts</li>
                <li>Real-time Updates</li>
                <li>Interactive Graphs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-[#1D1D1F] mb-2">Features</h3>
              <ul className="text-[#86868B] space-y-1">
                <li>Background Refresh</li>
                <li>Push Notifications</li>
                <li>Widget Support</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
