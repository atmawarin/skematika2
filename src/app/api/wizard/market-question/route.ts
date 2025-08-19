import { NextRequest, NextResponse } from "next/server";
import { generateKeyFeatures } from "@/lib/openai";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { customerType, problem, selectedFeatures, requestSingleSuggestion } = body;

    if (!customerType || !problem) {
      return NextResponse.json(
        { error: "Missing required fields" }, 
        { status: 400 }
      );
    }

    const result = await generateKeyFeatures({
      customerType,
      problem,
      selectedFeatures,
      requestSingleSuggestion,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Key features API error:", error);
    return NextResponse.json(
      { error: "Failed to generate key features" }, 
      { status: 500 }
    );
  }
}