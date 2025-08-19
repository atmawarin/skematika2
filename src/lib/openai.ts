import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateFollowUpQuestion(context: {
  customerType: string;
  problem: string;
  location: string;
}): Promise<{
  question: string;
  suggestions: string[];
}> {
  const isExternal = context.customerType === "external";
  
  const prompt = `Based on this business context:

CUSTOMER TYPE: ${isExternal ? "External customers/clients" : "Internal operations/tools"}
PROBLEM: ${context.problem}
LOCATION: ${context.location}

Generate a follow-up question about their ${isExternal ? "target customers" : "internal stakeholders"}. 

BRAND TONE: Concise. No filler words. Neutral but warm. Directive.

Requirements:
1. Title: 3-6 words max like "Who are your users?" or "Which teams benefit?"
2. Description: 1-2 sentences. Direct and clear.
3. Question specific to their context
4. 4 concise example answers

Respond in JSON format:
{
  "title": "short question (3-6 words)",
  "description": "what we need to understand",
  "suggestions": ["example 1", "example 2", "example 3", "example 4"]
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-5-nano",
      messages: [
        {
          role: "system",
          content: "You are a business strategist. Generate insightful follow-up questions. Be direct and practical."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_completion_tokens: 300,
      reasoning_effort: "minimal",
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error("No response from OpenAI");
    }

    return JSON.parse(response);
  } catch (error) {
    console.error("OpenAI API error:", error);
    
    // Fallback to generic question
    return {
      question: isExternal 
        ? "Who specifically are your target customers?"
        : "Which internal teams will benefit most from this solution?",
      suggestions: isExternal ? [
        "Small business owners (5-50 employees)",
        "Tech-savvy millennials preferring mobile",
        "Enterprise managers seeking efficiency",
        "Freelancers needing project management"
      ] : [
        "HR teams managing employee processes",
        "Sales teams tracking customer relationships",
        "Operations teams handling workflows",
        "Finance teams managing budgets"
      ]
    };
  }
}

export async function generateKeyFeatures(context: {
  customerType: string;
  problem: string;
  selectedFeatures?: string[];
}): Promise<{
  title: string;
  description: string;
  suggestions: string[];
}> {
  const isExternal = context.customerType === "external";
  const hasSelectedFeatures = context.selectedFeatures && context.selectedFeatures.length > 0;
  
  const selectedFeaturesText = hasSelectedFeatures 
    ? `\nALREADY SELECTED DIFFERENTIATORS: ${context.selectedFeatures!.join(', ')}`
    : '';
  
  const prompt = `Based on this business problem:

CUSTOMER TYPE: ${isExternal ? "External customers/clients" : "Internal operations/tools"}
CORE PROBLEM: ${context.problem}${selectedFeaturesText}

Generate differentiating features that make this solution stand out.

BRAND TONE: Concise. No filler words. Neutral but warm. Directive.

Requirements:
1. Title: 3-6 words max. Try variations like "Key differentiators", "Competitive strengths", "Core advantages", "What sets you apart", "Your edge", or "Unique strengths"
2. Description: 1-2 sentences. What makes this solution unique.
3. ${hasSelectedFeatures 
    ? "Generate NEW differentiators that complement selected ones - avoid duplicates"
    : "Generate core differentiators that solve the problem better than existing solutions"}
4. Focus on ${isExternal ? "unique value customers choose over competitors" : "operational advantages superior to current processes"}
5. What makes this 10x better, faster, cheaper, or more convenient
6. 4 specific competitive advantages

Respond in JSON format:
{
  "title": "short differentiator prompt (3-6 words)",
  "description": "what makes this solution uniquely valuable",
  "suggestions": ["Differentiator 1: unique advantage", "Differentiator 2: unique advantage", "Differentiator 3: unique advantage", "Differentiator 4: unique advantage"]
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-5-nano",
      messages: [
        {
          role: "system",
          content: "You are a business strategist. Generate concise differentiators that solve real problems. Be direct. No corporate fluff."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_completion_tokens: 300,
      reasoning_effort: "minimal",
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error("No response from OpenAI");
    }

    return JSON.parse(response);
  } catch (error) {
    console.error("OpenAI API error:", error);
    
    // Fallback
    return {
      title: isExternal ? "Competitive strengths" : "Core advantages",
      description: isExternal 
        ? "What makes your solution different from competitors"
        : "Why this solution beats current processes",
      suggestions: isExternal ? [
        "10x faster processing: Minutes instead of hours",
        "Smart recommendations: Guidance competitors don't provide", 
        "Zero-setup deployment: Start instantly without training",
        "Predictive insights: See trends before competitors"
      ] : [
        "One-click automation: Eliminate 90% of manual work",
        "Real-time collaboration: Instant team sync",
        "Smart integrations: Connect existing tools effortlessly", 
        "Predictive maintenance: Prevent issues before they happen"
      ]
    };
  }
}