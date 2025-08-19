"use client";

import { memo } from "react";
import SmartCustomerFocusStep from "./SmartCustomerFocusStep";

interface SmartCustomerFocusStepWrapperProps {
  onNext: (data: any) => void;
  onBack: () => void;
  data: any;
  onTitleChange?: (title: string, subtitle: string) => void;
  customerType: string;
  problem: string;
  location: string;
}

const SmartCustomerFocusStepWrapper = memo(function SmartCustomerFocusStepWrapper({
  onNext,
  onBack,
  data,
  onTitleChange,
  customerType,
  problem,
  location
}: SmartCustomerFocusStepWrapperProps) {
  return (
    <SmartCustomerFocusStep
      onNext={onNext}
      onBack={onBack}
      data={data}
      onTitleChange={onTitleChange}
      customerType={customerType}
      problem={problem}
      location={location}
    />
  );
});

export default SmartCustomerFocusStepWrapper;