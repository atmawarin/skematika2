"use client";

import { useState, useEffect, useRef } from "react";

interface SmartCustomerFocusStepProps {
  onNext: (data: any) => void;
  onBack: () => void;
  data: any;
  customerType: string;
  problem: string;
  location: string;
  onTitleChange?: (title: string, subtitle: string) => void;
}

export default function SmartCustomerFocusStep({ 
  onNext, 
  onBack, 
  data, 
  customerType, 
  problem, 
  location,
  onTitleChange 
}: SmartCustomerFocusStepProps) {
  const [focus, setFocus] = useState(data.customerFocus || "");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoadingAI, setIsLoadingAI] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const isFetchingRef = useRef(false);
  
  // Create a unique key based on the inputs to prevent re-mounting
  const componentKey = `${customerType}-${problem}-${location}`;

  useEffect(() => {
    // Only fetch if we haven't already loaded and have the required data and not currently fetching
    if (!hasLoaded && !isFetchingRef.current && customerType && problem && location) {
      fetchAIQuestion();
    }
  }, [customerType, problem, location, hasLoaded]); // Include hasLoaded in dependencies

  const fetchAIQuestion = async () => {
    if (isFetchingRef.current) return; // Prevent duplicate fetches
    isFetchingRef.current = true;
    setIsLoadingAI(true);
    try {
      const response = await fetch("/api/wizard/follow-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerType,
          problem,
          location,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSuggestions(result.suggestions);
        
        // Update the wizard title with AI-generated question
        if (onTitleChange) {
          onTitleChange(
            result.title || result.question, // Handle both new and old format
            result.description || "AI-generated follow-up based on your business context"
          );
        }
      } else {
        throw new Error("Failed to fetch AI question");
      }
    } catch (error) {
      console.error("AI question fetch error:", error);
      // Fallback to generic question
      const isExternal = customerType === "external";
      const fallbackQuestion = isExternal 
        ? "Who specifically are your target customers?"
        : "Which internal teams will benefit most from this solution?";
        
      setSuggestions(isExternal ? [
        "Small business owners with specific demographics",
        "Tech-savvy users preferring mobile solutions",
        "Enterprise clients needing efficiency tools",
        "Freelancers requiring project management"
      ] : [
        "HR teams managing employee processes",
        "Sales teams tracking relationships",
        "Operations teams handling workflows", 
        "Finance teams managing budgets"
      ]);

      // Update title with fallback question - only on initial load
      if (onTitleChange && !hasLoaded) {
        const shortTitle = isExternal ? "Who are your customers?" : "Which teams benefit?";
        const longDesc = isExternal 
          ? "Help us understand your target customer demographics, behaviors, and specific needs"
          : "Identify the internal teams, departments, or stakeholders who will benefit from this solution";
        onTitleChange(shortTitle, longDesc);
      }
    } finally {
      setIsLoadingAI(false);
      setHasLoaded(true);
      isFetchingRef.current = false;
    }
  };

  const handleNext = () => {
    if (focus.trim()) {
      onNext({ customerFocus: focus.trim() });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setFocus(suggestion);
  };

  if (isLoadingAI) {
    return (
      <div className="space-y-8">
        {/* Skeleton for input */}
        <div>
          <div className="w-full h-40 bg-gray-100 rounded-lg animate-pulse"></div>
        </div>

        {/* Skeleton for suggestions */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="h-5 bg-gray-200 rounded w-24 mb-3 animate-pulse"></div>
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

      {/* Input */}
      <div>
        <textarea
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
          placeholder="Click a suggestion below or write your own detailed answer..."
          className="w-full h-40 px-6 py-4 text-lg border-2 border-gray-200 rounded-lg resize-none focus:border-black focus:outline-none transition-colors"
          autoFocus
        />
      </div>

      {/* Suggestions */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-black mb-3">Suggestions:</h4>
        <div className="grid gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="text-left p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-lg hover:scale-105 cursor-pointer transition-all text-sm text-gray-700 hover:text-black"
            >
              {suggestion}
            </button>
          ))}
        </div>
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