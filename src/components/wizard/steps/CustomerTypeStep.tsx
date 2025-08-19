"use client";

import { useState } from "react";

interface CustomerTypeStepProps {
  onNext: (data: any) => void;
  onBack: () => void;
  data: any;
}

export default function CustomerTypeStep({ onNext, onBack, data }: CustomerTypeStepProps) {
  const [selectedType, setSelectedType] = useState(data.customerType || "");

  const handleSelect = (type: string) => {
    setSelectedType(type);
    // No auto-advance - user must click Continue button
  };

  const handleNext = () => {
    if (selectedType) {
      onNext({ customerType: selectedType });
    }
  };

  return (
    <div className="space-y-8">
      {/* Options */}
      <div className="grid gap-4">
        <button
          onClick={() => handleSelect("external")}
          className={`p-8 border-2 rounded-lg text-left transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
            selectedType === "external"
              ? "border-black bg-gray-50"
              : "border-gray-200 hover:border-gray-400"
          }`}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
              {selectedType === "external" && (
                <div className="w-4 h-4 rounded-full bg-black"></div>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">
                External Customers & Clients
              </h3>
              <p className="text-gray-600">
                Building a product or service for external customers, clients, or users
              </p>
              <p className="text-sm text-gray-500 mt-2">
                B2B services, consumer products, marketplace platforms
              </p>
            </div>
          </div>
        </button>

        <button
          onClick={() => handleSelect("internal")}
          className={`p-8 border-2 rounded-lg text-left transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
            selectedType === "internal"
              ? "border-black bg-gray-50"
              : "border-gray-200 hover:border-gray-400"
          }`}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
              {selectedType === "internal" && (
                <div className="w-4 h-4 rounded-full bg-black"></div>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Internal Operations & Tools
              </h3>
              <p className="text-gray-600">
                Building internal tools, processes, or systems for your organization
              </p>
              <p className="text-sm text-gray-500 mt-2">
                HR systems, inventory management, workflow automation
              </p>
            </div>
          </div>
        </button>
      </div>

      {/* Help Text */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          This helps us tailor the questions and blueprint structure to your specific needs
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <div></div> {/* Empty space since this is the first step */}
        <button
          onClick={handleNext}
          disabled={!selectedType}
          className={`px-8 py-3 rounded-lg font-medium transition-all ${
            selectedType
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