"use client";

import { useState } from "react";

interface LocationStepProps {
  onNext: (data: any) => void;
  onBack: () => void;
  data: any;
}

export default function LocationStep({ onNext, onBack, data }: LocationStepProps) {
  const [location, setLocation] = useState(data.location || "");
  const [customLocation, setCustomLocation] = useState(data.customLocation || "");

  const commonLocations = [
    "United States",
    "Indonesia",
    "Singapore",
    "United Kingdom",
    "Canada",
    "Australia",
    "Global/Remote",
    "Other"
  ];

  const handleSelect = (selectedLocation: string) => {
    setLocation(selectedLocation);
    // No auto-advance - user must click Continue button
  };

  const handleNext = () => {
    const finalLocation = location === "Other" ? customLocation : location;
    if (finalLocation.trim()) {
      onNext({ 
        location: finalLocation.trim(),
        customLocation: location === "Other" ? customLocation : ""
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Location Options */}
      <div className="grid grid-cols-2 gap-4">
        {commonLocations.map((loc) => (
          <button
            key={loc}
            onClick={() => handleSelect(loc)}
            className={`p-4 border-2 rounded-lg text-left transition-all duration-200 hover:border-gray-400 hover:shadow-lg hover:scale-105 cursor-pointer ${
              location === loc
                ? "border-black bg-gray-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                {location === loc && (
                  <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                )}
              </div>
              <span className="font-medium text-black">{loc}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Custom Location Input */}
      {location === "Other" && (
        <div className="pt-4">
          <input
            type="text"
            value={customLocation}
            onChange={(e) => setCustomLocation(e.target.value)}
            placeholder="Enter your location..."
            className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors"
            autoFocus
          />
        </div>
      )}

      {/* Help Text */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          This helps us understand regulatory requirements and market conditions
        </p>
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
          disabled={location === "Other" ? !customLocation.trim() : !location}
          className={`px-8 py-3 rounded-lg font-medium transition-all ${
            (location === "Other" ? customLocation.trim() : location)
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