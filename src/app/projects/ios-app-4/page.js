import Image from 'next/image';
import Link from 'next/link';

export default function IosApp4() {
  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <Link href="/" className="inline-block mb-8 text-[#0071E3] hover:text-[#0077ED]">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-[#1D1D1F] mb-6">ARKit Explorer</h1>

        {/* Project Overview */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#1D1D1F] mb-4">Overview</h2>
              <p className="text-[#86868B] mb-4">An immersive augmented reality application that demonstrates the capabilities of ARKit with interactive 3D content and spatial awareness.</p>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#1D1D1F]">Key Features:</h3>
                <ul className="list-disc list-inside text-[#86868B] space-y-1">
                  <li>3D Object Recognition</li>
                  <li>Spatial Mapping</li>
                  <li>Interactive AR Elements</li>
                  <li>Real-time Physics</li>
                  <li>Scene Understanding</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-video bg-[#F5F5F7] relative rounded-xl overflow-hidden">
                <Image src="/globe.svg" alt="AR Experience" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1D1D1F] mb-4">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-[#1D1D1F] mb-2">AR Technologies</h3>
              <ul className="text-[#86868B] space-y-1">
                <li>ARKit</li>
                <li>RealityKit</li>
                <li>SceneKit</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-[#1D1D1F] mb-2">3D Features</h3>
              <ul className="text-[#86868B] space-y-1">
                <li>3D Model Import</li>
                <li>Physics Simulation</li>
                <li>Material System</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-[#1D1D1F] mb-2">Interaction</h3>
              <ul className="text-[#86868B] space-y-1">
                <li>Gesture Recognition</li>
                <li>Object Manipulation</li>
                <li>Spatial Audio</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
