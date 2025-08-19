"use client";

import { useState } from "react";

interface CoreProblemStepProps {
  onNext: (data: any) => void;
  onBack: () => void;
  data: any;
}

export default function CoreProblemStep({ onNext, onBack, data }: CoreProblemStepProps) {
  const [problem, setProblem] = useState(data.problem || "");

  const handleNext = () => {
    if (problem.trim()) {
      onNext({ problem: problem.trim() });
    }
  };

  return (
    <div className="space-y-8">
      {/* Input */}
      <div>
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Describe the main problem or opportunity you're addressing..."
          className="w-full h-40 px-6 py-4 text-lg border-2 border-gray-200 rounded-lg resize-none focus:border-black focus:outline-none transition-colors"
          autoFocus
        />
      </div>

      {/* Examples */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-black mb-3">Examples:</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• "Small businesses struggle to manage customer relationships efficiently"</li>
          <li>• "Remote teams lack effective collaboration tools"</li>
          <li>• "Restaurant owners need better inventory tracking"</li>
          <li>• "Freelancers have difficulty managing multiple projects"</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 text-gray-600 hover:text-black transition-colors cursor-pointer"
        >
          ← Back
        </button>
        <button
          onClick={handleNext}
          disabled={!problem.trim()}
          className={`px-8 py-3 rounded-lg font-medium transition-all ${
            problem.trim()
              ? "bg-black text-white hover:bg-gray-800 hover:scale-105 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}