"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import WizardShell from "@/components/wizard/WizardShell";
import CustomerTypeStep from "@/components/wizard/steps/CustomerTypeStep";
import CoreProblemStep from "@/components/wizard/steps/CoreProblemStep";
import LocationStep from "@/components/wizard/steps/LocationStep";
import SmartCustomerFocusStepWrapper from "@/components/wizard/steps/SmartCustomerFocusStepWrapper";
import SmartKeyFeaturesStepWrapper from "@/components/wizard/steps/SmartKeyFeaturesStepWrapper";
import ReviewStep from "@/components/wizard/steps/ReviewStep";

export default function WizardClient() {
  const router = useRouter();

  // Dynamic step generator based on user responses  
  const generateSteps = useCallback((wizardData: any) => {
    const baseSteps = [
      {
        id: "customerType",
        title: "Who are you building this for?",
        subtitle: "Understanding your target audience helps us create a more relevant blueprint",
        component: CustomerTypeStep,
      },
      {
        id: "coreProblem",
        title: "What problem are you solving?",
        subtitle: "Describe the main challenge or opportunity you're addressing",
        component: CoreProblemStep,
      },
      {
        id: "location",
        title: "Where will you operate?",
        subtitle: "This helps us understand regulatory requirements and market conditions",
        component: LocationStep,
      },
    ];

    // Add dynamic steps based on customer type
    
    const dynamicSteps = [
      {
        id: "customerFocus",
        title: "", // Empty - will be set by AI component
        subtitle: "", // Empty - will be set by AI component
        component: SmartCustomerFocusStepWrapper,
        customerType: wizardData.customerType?.customerType || "",
        problem: wizardData.coreProblem?.problem || "",
        location: wizardData.location?.location || "",
      },
      {
        id: "keyFeatures", 
        title: "", // Empty - will be set by AI component
        subtitle: "", // Empty - will be set by AI component
        component: SmartKeyFeaturesStepWrapper,
        customerType: wizardData.customerType?.customerType || "",
        problem: wizardData.coreProblem?.problem || "",
      },
      {
        id: "review",
        title: "Review & Generate Blueprint",
        subtitle: "Confirm your information and create your comprehensive business blueprint",
        component: (props: any) => ReviewStep({
          ...props,
          allData: wizardData,
        }),
      },
    ];

    return [...baseSteps, ...dynamicSteps];
  }, []); // Empty dependency array since we want to memoize based on the function definition

  const handleWizardComplete = async (data: any) => {
    console.log("Wizard completed with data:", data);
    // TODO: Save to database and generate blueprint
    router.push("/dashboard?success=blueprint-generated");
  };

  return (
    <WizardShell 
      generateSteps={generateSteps}
      onComplete={handleWizardComplete}
    />
  );
}