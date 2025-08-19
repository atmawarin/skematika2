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
  const [isLoadingNewSuggestion, setIsLoadingNewSuggestion] = useState(false);
  const [customFeature, setCustomFeature] = useState("");
  const isFetchingRef = useRef(false);

  useEffect(() => {
    // Only fetch if we haven't already loaded and have the required data and not currently fetching
    if (!hasLoaded && !isFetchingRef.current && customerType && problem) {
      fetchKeyFeatures([], true); // Initial load
    }
  }, [customerType, problem, hasLoaded]);

  const fetchKeyFeatures = async (currentFeatures: string[] = [], isInitialLoad: boolean = false) => {
    if (isFetchingRef.current) return; // Prevent duplicate fetches
    isFetchingRef.current = true;
    
    if (isInitialLoad) {
      setIsLoadingAI(true);
    } else {
      setIsLoadingNewSuggestion(true);
    }
    
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
          requestSingleSuggestion: !isInitialLoad, // Request only one suggestion for incremental loads
        }),
      });

      if (response.ok) {
        const result = await response.json();
        
        if (isInitialLoad) {
          setSuggestions(result.suggestions.slice(0, 4)); // Start with max 4 suggestions
          // Update the wizard title with AI-generated question - only on initial load
          if (onTitleChange && !hasLoaded) {
            onTitleChange(
              result.title,
              result.description
            );
          }
        } else {
          // Add only the new suggestion(s) to existing ones, but limit to max 5 total
          setSuggestions(prev => {
            const newSuggestions = [...prev, ...result.suggestions];
            return newSuggestions.slice(0, 5); // Keep only first 5 suggestions
          });
        }
      } else {
        throw new Error("Failed to fetch key features");
      }
    } catch (error) {
      console.error("Key features fetch error:", error);
      
      if (isInitialLoad) {
        // Fallback to generic features
        const isExternal = customerType === "external";
        
        setSuggestions(isExternal ? [
          "10x faster processing",
          "Smart AI recommendations", 
          "Zero-setup deployment",
          "Predictive market insights"
        ].slice(0, 4) : [
          "One-click automation",
          "Real-time team collaboration",
          "Smart tool integrations", 
          "Predictive issue prevention"
        ].slice(0, 4));

        // Update title with fallback - only on initial load
        if (onTitleChange && !hasLoaded) {
          const shortTitle = isExternal ? "Competitive strengths" : "Core advantages";
          const longDesc = isExternal 
            ? "What makes your solution different from competitors"
            : "Why this solution beats current processes";
          onTitleChange(shortTitle, longDesc);
        }
      } else {
        // For incremental loads, add one fallback suggestion
        const isExternal = customerType === "external";
        const fallbackSuggestions = isExternal ? [
          "Advanced analytics",
          "Custom integrations",
          "24/7 support",
          "Mobile-first design"
        ] : [
          "Automated reporting",
          "Custom workflows", 
          "Team notifications",
          "Data synchronization"
        ];
        
        // Add a random fallback suggestion that's not already in the list
        const availableFallbacks = fallbackSuggestions.filter(
          fallback => !suggestions.includes(fallback)
        );
        if (availableFallbacks.length > 0) {
          const randomFallback = availableFallbacks[Math.floor(Math.random() * availableFallbacks.length)];
          setSuggestions(prev => {
            const newSuggestions = [...prev, randomFallback];
            return newSuggestions.slice(0, 5); // Keep only first 5 suggestions
          });
        }
      }
    } finally {
      if (isInitialLoad) {
        setIsLoadingAI(false);
        setHasLoaded(true);
      } else {
        setIsLoadingNewSuggestion(false);
      }
      isFetchingRef.current = false;
    }
  };

  const handleNext = () => {
    if (selectedFeatures.length > 0) {
      onNext({ keyFeatures: selectedFeatures });
    }
  };


  const handleFeatureRemove = (featureToRemove: string) => {
    setSelectedFeatures(prev => prev.filter(f => f !== featureToRemove));
  };

  const handleCustomFeatureAdd = () => {
    if (customFeature.trim() && !selectedFeatures.includes(customFeature.trim())) {
      const newFeatures = [...selectedFeatures, customFeature.trim()];
      setSelectedFeatures(newFeatures);
      setCustomFeature("");
      
      // Generate one new suggestion based on the added feature (only if we have less than 5)
      if (suggestions.length < 5) {
        fetchKeyFeatures(newFeatures, false);
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Directly add the suggestion to selected differentiators
    const suggestionText = suggestion.split(':')[0].trim();
    if (!selectedFeatures.includes(suggestionText)) {
      const newFeatures = [...selectedFeatures, suggestionText];
      setSelectedFeatures(newFeatures);
      
      // Remove the selected suggestion from the list
      setSuggestions(prev => prev.filter(s => s !== suggestion));
      
      // Generate one new suggestion based on the added feature (only if we'll have less than 5 after removal)
      if (suggestions.length <= 5) {
        fetchKeyFeatures(newFeatures, false);
      }
    }
  };

  const handleCustomFeatureKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCustomFeatureAdd();
    }
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
      {/* Custom Feature Input - Now at the top */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h4 className="font-semibold text-black mb-3">Describe your key differentiator:</h4>
        <div className="flex gap-3">
          <input
            type="text"
            value={customFeature}
            onChange={(e) => setCustomFeature(e.target.value)}
            onKeyDown={handleCustomFeatureKeyDown}
            placeholder="e.g., Auto flag harmful content"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
            disabled={isLoadingNewSuggestion}
          />
          <button
            onClick={handleCustomFeatureAdd}
            disabled={!customFeature.trim() || isLoadingNewSuggestion}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              customFeature.trim() && !isLoadingNewSuggestion
                ? "bg-black text-white hover:bg-gray-800 cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Add
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Type your differentiator or click suggestions below to add directly
        </p>
      </div>

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

      {/* Differentiator Suggestions - Now clickable to fill input */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-black">
            {selectedFeatures.length > 0 ? "More suggestions:" : "Quick suggestions:"}
          </h4>
          {isLoadingNewSuggestion && (
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2"></div>
              Adding suggestion...
            </div>
          )}
        </div>
        <div className="grid gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="text-left p-3 bg-white border border-gray-200 rounded-lg hover:border-black hover:shadow-sm cursor-pointer transition-all text-sm text-gray-700 hover:text-black disabled:opacity-50"
              disabled={false}
            >
              <div className="font-medium text-black">
                {suggestion.split(':')[0]}
              </div>
            </button>
          ))}
          
          {/* Individual loading state for new suggestion */}
          {isLoadingNewSuggestion && (
            <div className="p-3 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                <div className="text-sm text-gray-500">Generating new suggestion...</div>
              </div>
            </div>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Click any suggestion to add it directly to your differentiators
        </p>
      </div>

      {/* Help Text */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Add differentiators by typing your own or clicking suggestions. We keep the list focused with a maximum of 5 suggestions.
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