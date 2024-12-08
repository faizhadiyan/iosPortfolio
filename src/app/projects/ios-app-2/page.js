import Image from 'next/image';
import Link from 'next/link';

export default function IosApp2() {
  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <Link href="/" className="inline-block mb-8 text-[#0071E3] hover:text-[#0077ED]">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-[#1D1D1F] mb-6">iOS App 2</h1>

        {/* Project Overview */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#1D1D1F] mb-4">Overview</h2>
              <p className="text-[#86868B] mb-4">An innovative iOS application that leverages machine learning capabilities and advanced iOS frameworks to deliver a unique user experience.</p>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#1D1D1F]">Key Features:</h3>
                <ul className="list-disc list-inside text-[#86868B] space-y-1">
                  <li>CoreML Integration</li>
                  <li>Real-time Camera Processing</li>
                  <li>Custom Vision Models</li>
                  <li>Advanced UI Animations</li>
                  <li>Performance Optimizations</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-video bg-[#F5F5F7] relative rounded-xl overflow-hidden">
                <Image src="/screenshots/app2-ml.svg" alt="ML Features" layout="fill" objectFit="cover" />
              </div>
              <div className="aspect-video bg-[#F5F5F7] relative rounded-xl overflow-hidden">
                <Image src="/screenshots/app2-camera.svg" alt="Camera Interface" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1D1D1F] mb-4">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-[#1D1D1F] mb-2">Machine Learning</h3>
              <ul className="text-[#86868B] space-y-1">
                <li>CoreML</li>
                <li>Vision Framework</li>
                <li>Custom ML Models</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-[#1D1D1F] mb-2">Camera Features</h3>
              <ul className="text-[#86868B] space-y-1">
                <li>AVFoundation</li>
                <li>Real-time Processing</li>
                <li>Custom Filters</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-[#1D1D1F] mb-2">Performance</h3>
              <ul className="text-[#86868B] space-y-1">
                <li>Metal Integration</li>
                <li>Memory Optimization</li>
                <li>Background Processing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
