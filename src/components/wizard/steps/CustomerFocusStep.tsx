"use client";

import { useState } from "react";

interface CustomerFocusStepProps {
  onNext: (data: any) => void;
  onBack: () => void;
  data: any;
  customerType: string;
  problem: string;
}

export default function CustomerFocusStep({ onNext, onBack, data, customerType, problem }: CustomerFocusStepProps) {
  const [focus, setFocus] = useState(data.customerFocus || "");

  const handleNext = () => {
    if (focus.trim()) {
      onNext({ customerFocus: focus.trim() });
    }
  };

  // Dynamic question based on customer type
  const isExternal = customerType === "external";
  const questionTitle = isExternal 
    ? "Who specifically are your customers?"
    : "Which internal teams will benefit?";
  
  const placeholder = isExternal
    ? "Describe your target customers in detail (demographics, behavior, needs)..."
    : "Describe the internal teams, departments, or stakeholders who will use this...";

  const examples = isExternal ? [
    "• Small business owners with 5-50 employees who struggle with time management",
    "• Tech-savvy millennials who prefer mobile-first solutions",  
    "• Enterprise procurement managers looking for cost efficiency",
    "• Healthcare professionals who need HIPAA-compliant tools"
  ] : [
    "• HR teams managing employee onboarding and performance reviews",
    "• Sales teams tracking leads and customer interactions",
    "• Operations teams managing supply chain and inventory",
    "• Finance teams handling budgets and expense reporting"
  ];

  return (
    <div className="space-y-8">
      {/* AI-Generated Context */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 font-semibold text-sm">AI</span>
          </div>
          <div>
            <p className="text-blue-900 text-sm">
              <strong>Based on your problem:</strong> "{problem}"
            </p>
            <p className="text-blue-700 text-sm mt-2">
              {isExternal 
                ? "I'll help you identify your target customer segments and their specific needs."
                : "I'll help you identify which internal teams will benefit most from this solution."
              }
            </p>
          </div>
        </div>
      </div>

      {/* Input */}
      <div>
        <textarea
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
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
          disabled={!focus.trim()}
          className={`px-8 py-3 rounded-lg font-medium transition-all ${
            focus.trim()
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