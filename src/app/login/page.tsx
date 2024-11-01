"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function StudentLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    setError(null); // Clear any previous error
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/student-dashboard"); // Redirect to the dashboard on successful login
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Student Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
        />
        <button onClick={handleLogin} style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
          Login
        </button>
      </div>
    </div>
  );
}
