// export interface ChatMessage {
//   role: "user" | "assistant";
//   content: string;
//   timestamp: Date;
//   metadata?: {
//     technique: string;
//     goal: string;
//     progress: any[];
//     analysis?: {
//       emotionalState: string;
//       themes: string[];
//       riskLevel: number;
//       recommendedApproach: string;
//       progressIndicators: string[];
//     };
//   };
// }

// export interface ChatSession {
//   sessionId: string;
//   messages: ChatMessage[];
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface ApiResponse {
//   message: string;
//   response?: string;
//   analysis?: {
//     emotionalState: string;
//     themes: string[];
//     riskLevel: number;
//     recommendedApproach: string;
//     progressIndicators: string[];
//   };
//   metadata?: {
//     technique: string;
//     goal: string;
//     progress: any[];
//   };
// }

// const API_BASE =
//   process.env.BACKEND_API_URL || "https://ai-therapist-agent-backend-2-9kwl.onrender.com";

// // Helper function to get auth headers
// const getAuthHeaders = () => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     throw new Error("No authentication token found");
//   }
//   return {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   };
// };

// export const createChatSession = async (): Promise<string> => {
//   try {
//     console.log("Creating new chat session...");
//     const response = await fetch(`${API_BASE}/chat/sessions`, {
//       method: "POST",
//       headers: getAuthHeaders(),
//     });

//     if (!response.ok) {
//       const error = await response.json();
//       console.error("Failed to create chat session:", error);
//       throw new Error(error.error || "Failed to create chat session");
//     }

//     const data = await response.json();
//     console.log("Chat session created:", data);
//     return data.sessionId;
//   } catch (error) {
//     console.error("Error creating chat session:", error);
//     throw error;
//   }
// };

// export const sendChatMessage = async (
//   sessionId: string,
//   message: string
// ): Promise<ApiResponse> => {
//   try {
//     console.log(`Sending message to session ${sessionId}:`, message);
//     const response = await fetch(
//       `${API_BASE}/chat/sessions/${sessionId}/messages`,
//       {
//         method: "POST",
//         headers: getAuthHeaders(),
//         body: JSON.stringify({ message }),
//       }
//     );

//     if (!response.ok) {
//       const error = await response.json();
//       console.error("Failed to send message:", error);
//       throw new Error(error.error || "Failed to send message");
//     }

//     const data = await response.json();
//     console.log("Message sent successfully:", data);
//     return data;
//   } catch (error) {
//     console.error("Error sending chat message:", error);
//     throw error;
//   }
// };

// export const getChatHistory = async (
//   sessionId: string
// ): Promise<ChatMessage[]> => {
//   try {
//     console.log(`Fetching chat history for session ${sessionId}`);
//     const response = await fetch(
//       `${API_BASE}/chat/sessions/${sessionId}/history`,
//       {
//         headers: getAuthHeaders(),
//       }
//     );

//     if (!response.ok) {
//       const error = await response.json();
//       console.error("Failed to fetch chat history:", error);
//       throw new Error(error.error || "Failed to fetch chat history");
//     }

//     const data = await response.json();
//     console.log("Received chat history:", data);

//     if (!Array.isArray(data)) {
//       console.error("Invalid chat history format:", data);
//       throw new Error("Invalid chat history format");
//     }

//     // Ensure each message has the correct format
//     return data.map((msg: any) => ({
//       role: msg.role,
//       content: msg.content,
//       timestamp: new Date(msg.timestamp),
//       metadata: msg.metadata,
//     }));
//   } catch (error) {
//     console.error("Error fetching chat history:", error);
//     throw error;
//   }
// };

// export const getAllChatSessions = async (): Promise<ChatSession[]> => {
//   try {
//     console.log("Fetching all chat sessions...");
//     const response = await fetch(`${API_BASE}/chat/sessions`, {
//       headers: getAuthHeaders(),
//     });

//     if (!response.ok) {
//       const error = await response.json();
//       console.error("Failed to fetch chat sessions:", error);
//       throw new Error(error.error || "Failed to fetch chat sessions");
//     }

//     const data = await response.json();
//     console.log("Received chat sessions:", data);

//     // Handle different response formats
//     let sessionsArray = [];
//     if (Array.isArray(data)) {
//       sessionsArray = data;
//     } else if (data && typeof data === 'object') {
//       // Check common keys for sessions array
//       sessionsArray = data.sessions || data.data || data.results || [];
//     }

//     if (!Array.isArray(sessionsArray)) {
//       console.error("Invalid chat sessions format:", data);
//       throw new Error("Invalid chat sessions format");
//     }

//     return sessionsArray.map((session: any) => {
//       // Ensure dates are valid
//       const createdAt = new Date(session.createdAt || Date.now());
//       const updatedAt = new Date(session.updatedAt || Date.now());

//       return {
//         ...session,
//         createdAt: isNaN(createdAt.getTime()) ? new Date() : createdAt,
//         updatedAt: isNaN(updatedAt.getTime()) ? new Date() : updatedAt,
//         messages: (session.messages || []).map((msg: any) => ({
//           ...msg,
//           timestamp: new Date(msg.timestamp || Date.now()),
//         })),
//       };
//     });
//   } catch (error) {
//     console.error("Error fetching chat sessions:", error);
//     throw error;
//   }
// };


export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  metadata?: {
    technique: string;
    goal: string;
    progress: any[];
    analysis?: {
      emotionalState: string;
      themes: string[];
      riskLevel: number;
      recommendedApproach: string;
      progressIndicators: string[];
    };
  };
}

export interface ChatSession {
  sessionId: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse {
  message: string;
  response?: string;
  analysis?: {
    emotionalState: string;
    themes: string[];
    riskLevel: number;
    recommendedApproach: string;
    progressIndicators: string[];
  };
  metadata?: {
    technique: string;
    goal: string;
    progress: any[];
  };
}

const API_BASE =
  process.env.BACKEND_API_URL || "https://ai-therapist-agent-backend-2-9kwl.onrender.com";

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
};

export const createChatSession = async (): Promise<string> => {
  try {
    console.log("Creating new chat session...");
    const response = await fetch(`${API_BASE}/chat/sessions`, {
      method: "POST",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Failed to create chat session:", error);
      throw new Error(error.error || "Failed to create chat session");
    }

    const data = await response.json();
    console.log("Chat session created:", data);
    return data.sessionId;
  } catch (error) {
    console.error("Error creating chat session:", error);
    throw error;
  }
};

export const sendChatMessage = async (
  sessionId: string,
  message: string
): Promise<ApiResponse> => {
  try {
    console.log(`Sending message to session ${sessionId}:`, message);
    const response = await fetch(
      `${API_BASE}/chat/sessions/${sessionId}/messages`,
      {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ message }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Failed to send message:", error);
      throw new Error(error.error || "Failed to send message");
    }

    const data = await response.json();
    console.log("Message sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending chat message:", error);
    throw error;
  }
};

export const getChatHistory = async (
  sessionId: string
): Promise<ChatMessage[]> => {
  try {
    console.log(`Fetching chat history for session ${sessionId}`);
    const response = await fetch(
      `${API_BASE}/chat/sessions/${sessionId}/history`,
      {
        headers: getAuthHeaders(),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Failed to fetch chat history:", error);
      throw new Error(error.error || "Failed to fetch chat history");
    }

    const data = await response.json();
    console.log("Received chat history:", data);

    if (!Array.isArray(data)) {
      console.error("Invalid chat history format:", data);
      throw new Error("Invalid chat history format");
    }

    // Ensure each message has the correct format
    return data.map((msg: any) => ({
      role: msg.role,
      content: msg.content,
      timestamp: new Date(msg.timestamp),
      metadata: msg.metadata,
    }));
  } catch (error) {
    console.error("Error fetching chat history:", error);
    throw error;
  }
};
// lib/api/chat.ts
// (keep the top of your existing file — types, API_BASE, getAuthHeaders, etc.)
// Replace only the getAllChatSessions export with this implementation.

export const getAllChatSessions = async (): Promise<ChatSession[]> => {
  try {
    console.log("Fetching all chat sessions...");
    const response = await fetch(`${API_BASE}/chat/sessions`, {
      headers: getAuthHeaders(),
      // include credentials if backend uses cookies (keeps options flexible)
      credentials: "include",
    });

    if (!response.ok) {
      // try to parse error body, but fall back gracefully
      const errBody = await response.json().catch(() => ({}));
      console.error("Failed to fetch chat sessions:", errBody);
      throw new Error(errBody?.error || errBody?.message || `HTTP ${response.status}`);
    }

    const data = await response.json().catch(() => null);
    console.log("Received chat sessions:", data);

    // If backend returns an array directly
    if (Array.isArray(data)) {
      return data.map(normalizeSession);
    }

    // Handle typical wrapper shapes
    if (data && Array.isArray(data.sessions)) {
      return data.sessions.map(normalizeSession);
    }
    if (data && Array.isArray(data.data)) {
      return data.data.map(normalizeSession);
    }
    if (data && Array.isArray(data.items)) {
      return data.items.map(normalizeSession);
    }

    // If backend returns an object for a single session
    if (data && data.session && Array.isArray(data.session.messages)) {
      return [normalizeSession(data.session)];
    }

    // Unexpected shape — log and return empty array to avoid .map errors
    console.warn("getAllChatSessions: unexpected response shape, returning empty array", data);
    return [];
  } catch (error) {
    console.error("Error fetching chat sessions:", error);
    throw error;
  }
};

// Helper to convert various session shapes into ChatSession type
const normalizeSession = (session: any): ChatSession => {
  // tolerate different timestamp fields that may exist in DB model
  const createdAtCandidate = session.createdAt || session.startTime || session.startedAt || session._createdAt;
  const updatedAtCandidate = session.updatedAt || session.updated_at || session._updatedAt || Date.now();

  const createdAt = new Date(createdAtCandidate || Date.now());
  const updatedAt = new Date(updatedAtCandidate || Date.now());

  return {
    sessionId: session.sessionId || session._id || session.id || "",
    messages: Array.isArray(session.messages)
      ? session.messages.map((m: any) => ({
          role: m.role || m.sender || "assistant",
          content: m.content || m.text || "",
          timestamp: new Date(m.timestamp || m.createdAt || Date.now()),
          metadata: m.metadata || m.meta || undefined,
        }))
      : [],
    createdAt: isNaN(createdAt.getTime()) ? new Date() : createdAt,
    updatedAt: isNaN(updatedAt.getTime()) ? new Date() : updatedAt,
  };
};
