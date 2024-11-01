"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase-config";
import TeacherCard from "../../components/TeacherCard";
import { signOut, onAuthStateChanged } from "firebase/auth";

const teachers = [
  { name: "John Doe", subject: "Mathematics" },
  { name: "Jane Smith", subject: "Physics" },
  { name: "Alice Johnson", subject: "Chemistry" },
];

export default function StudentDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/login"); // Redirect if not logged in
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!isAuthenticated) return null; // Render nothing until authenticated

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <button onClick={handleLogout} style={{ alignSelf: "flex-end", padding: "8px 16px", marginBottom: "20px" }}>
        Logout
      </button>
      <h2>All Teachers</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {teachers.map((teacher, index) => (
          <TeacherCard key={index} name={teacher.name} subject={teacher.subject} />
        ))}
      </div>
    </main>
  );
}
