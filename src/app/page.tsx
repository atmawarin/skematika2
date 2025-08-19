import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b">
        <h1 className="text-2xl font-bold text-black">Skematika</h1>
        <div>
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 hover:scale-105 transition-all duration-200 cursor-pointer">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <h2 className="text-6xl font-bold text-black leading-tight">
              Generate Business
              <br />
              Blueprints in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI-powered Blueprint Wizard that guides you step by step to create 
              professional business plans. Cut weeks of work into minutes.
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <SignedOut>
              <SignInButton>
                <button className="px-8 py-4 bg-black text-white text-lg font-medium rounded hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 transform cursor-pointer">
                  Start Your Blueprint
                </button>
              </SignInButton>
              <p className="text-sm text-gray-500">
                Get started in less than 2 minutes
              </p>
            </SignedOut>
            <SignedIn>
              <div className="space-x-4">
                <a href="/dashboard" className="inline-block px-8 py-4 bg-black text-white text-lg font-medium rounded hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 transform cursor-pointer">
                  Continue to Dashboard
                </a>
                <a href="/blueprint/demo" className="inline-block px-8 py-4 border-2 border-black text-black text-lg font-medium rounded hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 transform cursor-pointer">
                  View Demo Blueprint
                </a>
              </div>
            </SignedIn>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-black mb-2">Guided Wizard</h3>
              <p className="text-gray-600 text-sm">
                Step-by-step questions tailored to your business type
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-black mb-2">AI-Powered</h3>
              <p className="text-gray-600 text-sm">
                GPT-5 generates professional content based on your inputs
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-black mb-2">Export Ready</h3>
              <p className="text-gray-600 text-sm">
                Download as PDF or Markdown for stakeholders
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
