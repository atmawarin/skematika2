"use client";

import { memo } from "react";
import SmartKeyFeaturesStep from "./SmartKeyFeaturesStep";

interface SmartKeyFeaturesStepWrapperProps {
  onNext: (data: any) => void;
  onBack: () => void;
  data: any;
  onTitleChange?: (title: string, subtitle: string) => void;
  customerType: string;
  problem: string;
}

const SmartKeyFeaturesStepWrapper = memo(function SmartKeyFeaturesStepWrapper({
  onNext,
  onBack,
  data,
  onTitleChange,
  customerType,
  problem
}: SmartKeyFeaturesStepWrapperProps) {
  return (
    <SmartKeyFeaturesStep
      onNext={onNext}
      onBack={onBack}
      data={data}
      onTitleChange={onTitleChange}
      customerType={customerType}
      problem={problem}
    />
  );
});

export default SmartKeyFeaturesStepWrapper;