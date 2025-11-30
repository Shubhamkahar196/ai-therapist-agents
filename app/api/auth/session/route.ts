import {  NextResponse } from "next/server";

export async function GET() {
  try {
    // For now, return a mock authenticated session
   
    return NextResponse.json({
      isAuthenticated: true,
      user: {
        id: "1",
        name: "Test User",
        email: "test@example.com",
      },
    });
  } catch (error) {
    console.error("Error getting auth session:", error);
    return NextResponse.json(
      { error: "Failed to get auth session" },
      { status: 500 }
    );
  }
}