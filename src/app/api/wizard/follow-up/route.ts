import { NextRequest, NextResponse } from "next/server";
import { generateFollowUpQuestion } from "@/lib/openai";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { customerType, problem, location } = body;

    if (!customerType || !problem || !location) {
      return NextResponse.json(
        { error: "Missing required fields" }, 
        { status: 400 }
      );
    }

    const result = await generateFollowUpQuestion({
      customerType,
      problem,
      location,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Follow-up question API error:", error);
    return NextResponse.json(
      { error: "Failed to generate follow-up question" }, 
      { status: 500 }
    );
  }
}