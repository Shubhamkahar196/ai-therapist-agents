import axios from "axios";

export async function registerUser(name: string, email: string, password: string) {
  try {
    const res = await axios.post('/api/auth/register', {
      name,
      email,
      password
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Registration Failed");
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const res = await axios.post("/api/auth/login", {
      email,
      password
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Login Failed");
  }
}