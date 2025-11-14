// Static data for dashboard functionality
// This simulates a database for the dashboard features

export interface Activity {
  id: string;
  userId: string | null;
  type: string;
  name: string;
  description: string | null;
  timestamp: Date;
  duration: number | null;
  completed: boolean;
  moodScore: number | null;
  moodNote: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// In-memory storage for demo purposes
const activities: Activity[] = [
  {
    id: "1",
    userId: "default-user",
    type: "mood",
    name: "Morning Mood Check",
    description: "Daily mood tracking",
    timestamp: new Date(),
    duration: null,
    completed: true,
    moodScore: 75,
    moodNote: "Feeling good today",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    userId: "default-user",
    type: "meditation",
    name: "Mindfulness Meditation",
    description: "10-minute guided meditation",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    duration: 10,
    completed: true,
    moodScore: null,
    moodNote: null,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "3",
    userId: "default-user",
    type: "therapy",
    name: "Therapy Session",
    description: "Weekly therapy session with AI therapist",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
    duration: 45,
    completed: true,
    moodScore: null,
    moodNote: null,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

export const getUserActivities = async (userId: string): Promise<Activity[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return activities.filter(activity => activity.userId === userId);
};

export const saveMoodData = async (data: {
  userId: string;
  mood: number;
  note?: string;
}): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const newActivity: Activity = {
    id: Date.now().toString(),
    userId: data.userId,
    type: "mood",
    name: "Mood Check",
    description: data.note || "Mood tracking entry",
    timestamp: new Date(),
    duration: null,
    completed: true,
    moodScore: data.mood,
    moodNote: data.note || null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  activities.push(newActivity);
};

export const logActivity = async (data: {
  userId: string;
  type: string;
  name: string;
  description?: string;
  duration?: number;
}): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const newActivity: Activity = {
    id: Date.now().toString(),
    userId: data.userId,
    type: data.type,
    name: data.name,
    description: data.description || null,
    timestamp: new Date(),
    duration: data.duration || null,
    completed: true,
    moodScore: null,
    moodNote: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  activities.push(newActivity);
};

export const getActivityStats = async (userId: string) => {
  const userActivities = activities.filter(activity => activity.userId === userId);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todaysActivities = userActivities.filter(activity => {
    const activityDate = new Date(activity.timestamp);
    activityDate.setHours(0, 0, 0, 0);
    return activityDate.getTime() === today.getTime();
  });

  const moodEntries = todaysActivities.filter(a => a.type === "mood" && a.moodScore !== null);
  const averageMood = moodEntries.length > 0
    ? Math.round(moodEntries.reduce((acc, curr) => acc + (curr.moodScore || 0), 0) / moodEntries.length)
    : null;

  return {
    totalActivities: todaysActivities.length,
    completedActivities: todaysActivities.filter(a => a.completed).length,
    averageMood,
    therapySessions: userActivities.filter(a => a.type === "therapy").length,
  };
};
