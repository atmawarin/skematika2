import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b">
        <h1 className="text-2xl font-bold text-black">Skematika Dashboard</h1>
        <UserButton />
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">
            Welcome back, {user.firstName || "there"}!
          </h2>
          <p className="text-gray-600">
            Ready to create your next business blueprint?
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md hover:border-gray-300 transition-all">
            <h3 className="font-semibold text-black mb-2">Create New Blueprint</h3>
            <p className="text-gray-600 text-sm mb-4">
              Start the guided wizard to create a professional business plan
            </p>
            <a 
              href="/wizard"
              className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Start Wizard
            </a>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md hover:border-gray-300 transition-all">
            <h3 className="font-semibold text-black mb-2">My Blueprints</h3>
            <p className="text-gray-600 text-sm mb-4">
              View and manage your existing business blueprints
            </p>
            <button className="px-4 py-2 border border-gray-300 text-black rounded hover:bg-gray-50 hover:scale-105 hover:shadow-sm cursor-pointer transition-all">
              View All
            </button>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md hover:border-gray-300 transition-all">
            <h3 className="font-semibold text-black mb-2">Expert Review</h3>
            <p className="text-gray-600 text-sm mb-4">
              Book a consultation to refine your business blueprint
            </p>
            <button className="px-4 py-2 border border-gray-300 text-black rounded hover:bg-gray-50 hover:scale-105 hover:shadow-sm cursor-pointer transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold text-black mb-4">Recent Activity</h3>
          <div className="text-center py-8 text-gray-500">
            <p>No blueprints created yet.</p>
            <p className="text-sm mt-2">Start your first blueprint to see activity here.</p>
          </div>
        </div>
      </main>
    </div>
  );
}