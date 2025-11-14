// Chat API functions for the AI therapist

export interface ChatSession {
  id: string;
  userId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  messageCount: number;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Mock data for demo purposes
const mockChatSessions: ChatSession[] = [
  {
    id: "session-1",
    userId: "default-user",
    title: "Anxiety Management Session",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    messageCount: 12,
  },
  {
    id: "session-2",
    userId: "default-user",
    title: "Stress Relief Techniques",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    messageCount: 8,
  },
  {
    id: "session-3",
    userId: "default-user",
    title: "Building Confidence",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // Yesterday
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    messageCount: 15,
  },
];

export const getAllChatSessions = async (): Promise<ChatSession[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  return mockChatSessions;
};

export const getChatSession = async (sessionId: string): Promise<ChatSession | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  return mockChatSessions.find(session => session.id === sessionId) || null;
};

export const createChatSession = async (userId: string, title: string): Promise<ChatSession> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const newSession: ChatSession = {
    id: `session-${Date.now()}`,
    userId,
    title,
    createdAt: new Date(),
    updatedAt: new Date(),
    messageCount: 0,
  };

  mockChatSessions.push(newSession);
  return newSession;
};

export const getChatMessages = async (sessionId: string): Promise<ChatMessage[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Mock messages for demo
  return [
    {
      id: "msg-1",
      sessionId,
      role: "user",
      content: "I'm feeling anxious about work today.",
      timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    },
    {
      id: "msg-2",
      sessionId,
      role: "assistant",
      content: "I understand that work anxiety can be challenging. Let's explore some techniques that might help you manage these feelings.",
      timestamp: new Date(Date.now() - 29 * 60 * 1000), // 29 minutes ago
    },
  ];
};

export const sendChatMessage = async (
  sessionId: string,
  content: string,
  role: 'user' | 'assistant' = 'user'
): Promise<ChatMessage> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const newMessage: ChatMessage = {
    id: `msg-${Date.now()}`,
    sessionId,
    role,
    content,
    timestamp: new Date(),
  };

  // In a real app, this would be saved to the database
  return newMessage;
};
