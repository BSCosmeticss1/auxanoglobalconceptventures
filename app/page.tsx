import { Navigation } from "@/components/Navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">🔧</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Site Under Maintenance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're currently performing some updates to improve your experience.
              Please check back soon!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What to Expect
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-800 mb-2">Faster Performance</h3>
                <p className="text-gray-600">Optimizing our systems for better speed and reliability.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <h3 className="font-semibold text-gray-800 mb-2">Enhanced Security</h3>
                <p className="text-gray-600">Implementing the latest security measures to protect your data.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✨</div>
                <h3 className="font-semibold text-gray-800 mb-2">New Features</h3>
                <p className="text-gray-600">Adding exciting new features to serve you better.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <p className="text-green-600 mt-2">
              For urgent inquiries, please contact us at{" "}
              {/* <a href="mailto:info@auxano.com" className="underline hover:text-green-700">
                info@auxano.com
              </a>{" "} */}
              or call 08033575434, 08094528651
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
