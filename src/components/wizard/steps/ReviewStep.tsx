"use client";

import { useState } from "react";

interface ReviewStepProps {
  onNext: (data: any) => void;
  onBack: () => void;
  data: any;
  allData: any;
}

export default function ReviewStep({ onNext, onBack, data, allData }: ReviewStepProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      onNext({ reviewed: true, readyForGeneration: true });
    }, 2000);
  };

  const isExternal = allData.customerType?.customerType === "external";

  return (
    <div className="space-y-8">
      {/* Review Summary */}
      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-black mb-4">Your Blueprint Overview</h3>
          
          <div className="space-y-4">
            <div>
              <span className="text-sm font-medium text-gray-500">FOCUS</span>
              <p className="text-black">
                {isExternal ? "External Customers & Clients" : "Internal Operations & Tools"}
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-500">PROBLEM</span>
              <p className="text-black">{allData.coreProblem?.problem}</p>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-500">LOCATION</span>
              <p className="text-black">{allData.location?.location}</p>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-500">
                {isExternal ? "TARGET CUSTOMERS" : "INTERNAL TEAMS"}
              </span>
              <p className="text-black">{allData.customerFocus?.customerFocus}</p>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-500">DIFFERENTIATORS</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {allData.keyFeatures?.keyFeatures?.map((feature: string, index: number) => (
                  <span 
                    key={index}
                    className="bg-gray-100 px-2 py-1 rounded text-sm text-black"
                  >
                    {feature.split(':')[0]}
                  </span>
                )) || (
                  <p className="text-gray-400 italic">No differentiators selected</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Blueprint Preview */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Ready to Generate Your Blueprint</h4>
            <p className="text-blue-700 text-sm">
              Your comprehensive business blueprint will include:
            </p>
            <ul className="text-blue-700 text-sm mt-2 space-y-1">
              <li>• Executive Summary</li>
              <li>• Market Analysis & Competitive Landscape</li>
              <li>• Product/Service Strategy</li>
              <li>• Financial Projections & Revenue Model</li>
              <li>• Implementation Roadmap</li>
              <li>• Risk Assessment & Mitigation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="px-6 py-3 text-gray-600 hover:text-black transition-colors cursor-pointer"
          disabled={isGenerating}
        >
          ← Back
        </button>

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className={`px-8 py-4 rounded-lg font-medium transition-all ${
            isGenerating
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
          }`}
        >
          {isGenerating ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              <span>Generating Blueprint...</span>
            </div>
          ) : (
            "Generate My Blueprint →"
          )}
        </button>
      </div>
    </div>
  );
}