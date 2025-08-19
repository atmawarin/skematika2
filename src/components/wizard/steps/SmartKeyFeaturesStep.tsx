"use client";

import { useState, useEffect, useRef } from "react";

interface SmartKeyFeaturesStepProps {
  onNext: (data: any) => void;
  onBack: () => void;
  data: any;
  customerType: string;
  problem: string;
  onTitleChange?: (title: string, subtitle: string) => void;
}

export default function SmartKeyFeaturesStep({ 
  onNext, 
  onBack, 
  data, 
  customerType, 
  problem,
  onTitleChange 
}: SmartKeyFeaturesStepProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(data.keyFeatures || []);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoadingAI, setIsLoadingAI] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const isFetchingRef = useRef(false);

  useEffect(() => {
    // Only fetch if we haven't already loaded and have the required data and not currently fetching
    if (!hasLoaded && !isFetchingRef.current && customerType && problem) {
      fetchKeyFeatures();
    }
  }, [customerType, problem, hasLoaded]);

  const fetchKeyFeatures = async (currentFeatures: string[] = []) => {
    if (isFetchingRef.current) return; // Prevent duplicate fetches
    isFetchingRef.current = true;
    setIsLoadingAI(true);
    try {
      const response = await fetch("/api/wizard/market-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerType,
          problem,
          selectedFeatures: currentFeatures,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSuggestions(result.suggestions);
        
        // Update the wizard title with AI-generated question - only on initial load
        if (onTitleChange && !hasLoaded) {
          onTitleChange(
            result.title,
            result.description
          );
        }
      } else {
        throw new Error("Failed to fetch key features");
      }
    } catch (error) {
      console.error("Key features fetch error:", error);
      // Fallback to generic features
      const isExternal = customerType === "external";
      
      setSuggestions(isExternal ? [
        "10x faster processing: Minutes instead of hours",
        "Smart recommendations: Guidance competitors don't provide", 
        "Zero-setup deployment: Start instantly without training",
        "Predictive insights: See trends before competitors"
      ] : [
        "One-click automation: Eliminate 90% of manual work",
        "Real-time collaboration: Instant team sync",
        "Smart integrations: Connect existing tools effortlessly", 
        "Predictive maintenance: Prevent issues before they happen"
      ]);

      // Update title with fallback - only on initial load
      if (onTitleChange && !hasLoaded) {
        const shortTitle = isExternal ? "Competitive strengths" : "Core advantages";
        const longDesc = isExternal 
          ? "What makes your solution different from competitors"
          : "Why this solution beats current processes";
        onTitleChange(shortTitle, longDesc);
      }
    } finally {
      setIsLoadingAI(false);
      setHasLoaded(true);
      setIsRegenerating(false);
      isFetchingRef.current = false;
    }
  };

  const handleNext = () => {
    if (selectedFeatures.length > 0) {
      onNext({ keyFeatures: selectedFeatures });
    }
  };

  const handleFeatureSelect = async (feature: string) => {
    const newFeatures = [...selectedFeatures, feature];
    setSelectedFeatures(newFeatures);
    
    // Remove the selected feature from suggestions
    setSuggestions(prev => prev.filter(s => s !== feature));
    
    // Generate new features based on selection
    setIsRegenerating(true);
    await fetchKeyFeatures(newFeatures);
  };

  const handleFeatureRemove = (featureToRemove: string) => {
    setSelectedFeatures(prev => prev.filter(f => f !== featureToRemove));
  };

  if (isLoadingAI) {
    return (
      <div className="space-y-8">
        {/* Show selected differentiators if any */}
        {selectedFeatures.length > 0 && (
          <div>
            <h4 className="font-semibold text-black mb-3">Selected Differentiators:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-black text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2"
                >
                  {feature.split(':')[0]}
                  <button
                    onClick={() => handleFeatureRemove(feature)}
                    className="text-gray-300 hover:text-white"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skeleton for suggestions */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="h-5 bg-gray-200 rounded w-32 mb-3 animate-pulse"></div>
          <div className="grid gap-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-12 bg-white border border-gray-200 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-6 py-3 text-gray-600 hover:text-black transition-colors cursor-pointer"
          >
            ← Back
          </button>
          <div className="h-12 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Selected Differentiators */}
      {selectedFeatures.length > 0 && (
        <div>
          <h4 className="font-semibold text-black mb-3">Selected Differentiators ({selectedFeatures.length}):</h4>
          <div className="flex flex-wrap gap-2">
            {selectedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-black text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2"
              >
                {feature.split(':')[0]}
                <button
                  onClick={() => handleFeatureRemove(feature)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Differentiator Suggestions */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-black">
            {selectedFeatures.length > 0 ? "More differentiators:" : "Strength suggestions:"}
          </h4>
          {isRegenerating && (
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2"></div>
              Generating new ideas...
            </div>
          )}
        </div>
        <div className="grid gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleFeatureSelect(suggestion)}
              className="text-left p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-lg hover:scale-105 cursor-pointer transition-all text-sm text-gray-700 hover:text-black disabled:opacity-50"
              disabled={isRegenerating}
            >
              <div className="font-medium text-black mb-1">
                {suggestion.split(':')[0]}
              </div>
              {suggestion.includes(':') && (
                <div className="text-gray-600">
                  {suggestion.split(':').slice(1).join(':').trim()}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Help Text */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Click differentiators to add them. New suggestions appear after each selection.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 text-gray-600 hover:text-black transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={handleNext}
          disabled={selectedFeatures.length === 0}
          className={`px-8 py-3 rounded-lg font-medium transition-all ${
            selectedFeatures.length > 0
              ? "bg-black text-white hover:bg-gray-800 hover:scale-105 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Continue ({selectedFeatures.length} selected)
        </button>
      </div>
    </div>
  );
}