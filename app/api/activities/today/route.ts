import { NextRequest, NextResponse } from "next/server";
import { getUserActivities } from "@/lib/static-dashboard-data";

export async function GET(req: NextRequest) {
  try {
    // Get user ID from token or use default
    const authHeader = req.headers.get("Authorization");
    const userId = "default-user";

    if (authHeader && authHeader.startsWith("Bearer ")) {
      // In a real app, you'd decode the JWT to get the user ID
      // For now, we'll use the default
    }

    const activities = await getUserActivities(userId);

    // Filter for today's activities
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todaysActivities = activities.filter((activity) => {
      const activityDate = new Date(activity.timestamp);
      return activityDate >= today && activityDate < tomorrow;
    });

    return NextResponse.json(todaysActivities);
  } catch (error) {
    console.error("Error fetching today's activities:", error);
    return NextResponse.json(
      { error: "Failed to fetch today's activities" },
      { status: 500 }
    );
  }
}
