"use client";

import { useState } from "react";

interface MarketQuestionStepProps {
  onNext: (data: any) => void;
  onBack: () => void;
  data: any;
  customerType: string;
  customerFocus: string;
}

export default function MarketQuestionStep({ onNext, onBack, data, customerType, customerFocus }: MarketQuestionStepProps) {
  const [answer, setAnswer] = useState(data.marketAnswer || "");

  const handleNext = () => {
    if (answer.trim()) {
      onNext({ marketAnswer: answer.trim() });
    }
  };

  // Dynamic question based on customer type
  const isExternal = customerType === "external";
  
  const questionTitle = isExternal 
    ? "How big is your market opportunity?"
    : "What efficiency gains do you expect?";
  
  const placeholder = isExternal
    ? "Market size, competition, and your competitive advantage..."
    : "Time/cost savings and productivity improvements...";

  const examples = isExternal ? [
    "• $2.5B market, 15% annual growth",
    "• 3 main competitors lack mobile focus",  
    "• 50% faster, 30% more affordable",
    "• Target 2% market share in 3 years"
  ] : [
    "• Save 10 hours/week per team member",
    "• Reduce errors by 80% with automation",
    "• Response time: 2 days to 2 hours",
    "• Real-time data for better decisions"
  ];

  return (
    <div className="space-y-8">
      {/* Context */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div>
          <p className="text-blue-900 text-sm">
            <strong>Based on your focus:</strong> "{customerFocus.substring(0, 60)}..."
          </p>
          <p className="text-blue-700 text-sm mt-2">
            {isExternal 
              ? "Quantify your market opportunity and competitive position."
              : "Quantify internal benefits and efficiency gains."
            }
          </p>
        </div>
      </div>

      {/* Input */}
      <div>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={placeholder}
          className="w-full h-40 px-6 py-4 text-lg border-2 border-gray-200 rounded-lg resize-none focus:border-black focus:outline-none transition-colors"
          autoFocus
        />
      </div>

      {/* Examples */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-black mb-3">Examples:</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          {examples.map((example, index) => (
            <li key={index}>{example}</li>
          ))}
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
          disabled={!answer.trim()}
          className={`px-8 py-3 rounded-lg font-medium transition-all ${
            answer.trim()
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