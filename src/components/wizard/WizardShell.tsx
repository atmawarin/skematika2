"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";

interface WizardStep {
  id: string;
  title: string;
  subtitle?: string;
  component: React.ComponentType<{
    onNext: (data: any) => void;
    onBack: () => void;
    data: any;
  }>;
}

interface WizardShellProps {
  steps?: WizardStep[];
  generateSteps?: (data: any) => WizardStep[];
  onComplete: (data: any) => void;
}

export default function WizardShell({ steps, generateSteps, onComplete }: WizardShellProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [wizardData, setWizardData] = useState<Record<string, any>>({});
  const [dynamicTitle, setDynamicTitle] = useState<string>("");
  const [dynamicSubtitle, setDynamicSubtitle] = useState<string>("");

  // Generate steps dynamically or use static steps
  const currentSteps = generateSteps ? generateSteps(wizardData) : steps || [];
  const progress = ((currentStep + 1) / currentSteps.length) * 100;
  const CurrentStepComponent = currentSteps[currentStep]?.component;

  const handleTitleChange = (title: string, subtitle: string) => {
    setDynamicTitle(title);
    setDynamicSubtitle(subtitle);
  };

  const handleNext = (stepData: any) => {
    const newData = { ...wizardData, [currentSteps[currentStep].id]: stepData };
    setWizardData(newData);

    if (currentStep < currentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      // Reset dynamic titles when going to next step
      setDynamicTitle("");
      setDynamicSubtitle("");
    } else {
      onComplete(newData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      // Reset dynamic titles when going back
      setDynamicTitle("");
      setDynamicSubtitle("");
    }
  };

  if (!CurrentStepComponent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">
              Step {currentStep + 1} of {currentSteps.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-1" />
        </div>
      </div>

      {/* Step Content */}
      <main className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Step Header */}
          <div className="mb-12 text-center">
            {dynamicTitle || currentSteps[currentStep]?.title ? (
              <h1 className="text-5xl font-bold text-black leading-tight mb-4">
                {dynamicTitle || currentSteps[currentStep]?.title}
              </h1>
            ) : (
              <div className="h-16 bg-gray-200 rounded-lg w-96 mx-auto mb-4 animate-pulse"></div>
            )}
            
            {dynamicSubtitle || currentSteps[currentStep]?.subtitle ? (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {dynamicSubtitle || currentSteps[currentStep]?.subtitle}
              </p>
            ) : (
              <div className="h-6 bg-gray-200 rounded-lg w-80 mx-auto animate-pulse"></div>
            )}
          </div>

          {/* Step Component */}
          <div className="max-w-2xl mx-auto">
            <CurrentStepComponent
              onNext={handleNext}
              onBack={handleBack}
              data={wizardData[currentSteps[currentStep]?.id] || {}}
              onTitleChange={handleTitleChange}
              customerType={currentSteps[currentStep]?.customerType}
              problem={currentSteps[currentStep]?.problem}
              location={currentSteps[currentStep]?.location}
              customerFocus={currentSteps[currentStep]?.customerFocus}
            />
          </div>
        </div>
      </main>
    </div>
  );
}