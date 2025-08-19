// Design tokens for consistent UI patterns across Skematika

export const buttonStyles = {
  // Primary action buttons (Continue, Submit, etc.)
  primary: "px-8 py-3 rounded-lg font-medium transition-all bg-black text-white hover:bg-gray-800 hover:scale-105 cursor-pointer",
  primaryConditional: (enabled: boolean) => `px-8 py-3 rounded-lg font-medium transition-all ${enabled ? "bg-black text-white hover:bg-gray-800 hover:scale-105 cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`,
  primaryDisabled: "px-8 py-3 rounded-lg font-medium transition-all bg-gray-200 text-gray-400 cursor-not-allowed",
  
  // Secondary action buttons (Back, Cancel, etc.)
  secondary: "px-6 py-3 text-gray-600 hover:text-black transition-colors cursor-pointer",
  
  // Navigation back buttons (← Back)
  backButton: "px-6 py-3 text-gray-600 hover:text-black transition-colors cursor-pointer",
  
  // Outline buttons (Dashboard actions)
  outline: "px-4 py-2 border border-gray-300 text-black rounded hover:bg-gray-50 hover:scale-105 hover:shadow-sm cursor-pointer transition-all",
  
  // Selection buttons (Customer type, Location, etc.)
  selection: "p-4 border-2 rounded-lg text-left transition-all duration-200 hover:border-gray-400 hover:shadow-lg hover:scale-105 cursor-pointer border-gray-200",
  selectionActive: "p-4 border-2 rounded-lg text-left transition-all duration-200 border-black bg-gray-50",
  selectionLarge: "p-8 border-2 rounded-lg text-left transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-gray-200",
  selectionLargeActive: "p-8 border-2 rounded-lg text-left transition-all duration-300 border-black bg-gray-50",
  
  // Suggestion buttons (AI suggestions, features, etc.)
  suggestion: "text-left p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-lg hover:scale-105 cursor-pointer transition-all text-sm text-gray-700 hover:text-black",
  suggestionLarge: "text-left p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-lg hover:scale-105 cursor-pointer transition-all text-sm text-gray-700 hover:text-black",
  
  // Form inputs
  input: "w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors",
  textarea: "w-full h-40 px-6 py-4 text-lg border-2 border-gray-200 rounded-lg resize-none focus:border-black focus:outline-none transition-colors",
};

export const cardStyles = {
  // Dashboard cards
  interactive: "p-6 border border-gray-200 rounded-lg hover:shadow-md hover:border-gray-300 transition-all",
  static: "p-6 border border-gray-200 rounded-lg",
};

export const hoverPatterns = {
  // Standard hover pattern for interactive elements
  interactive: "hover:shadow-lg hover:scale-105 cursor-pointer transition-all",
  
  // Subtle hover for text links
  textLink: "hover:text-black transition-colors cursor-pointer",
  
  // Border hover for selection elements
  borderHover: "hover:border-gray-400 transition-all",
  
  // Background hover for suggestion elements
  bgHover: "hover:bg-gray-50 transition-all",
};

export const spacing = {
  stepContent: "space-y-8",
  formGroup: "space-y-4",
  navigation: "flex justify-between",
};

// Utility function to combine styles
export const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};