"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase-config";
import TeacherCard from "../../components/TeacherCard";

const teachers = [
  { name: "John Doe", subject: "Mathematics" },
  { name: "Jane Smith", subject: "Physics" },
  { name: "Alice Johnson", subject: "Chemistry" },
];

export default function StudentDashboard() {
  const [isClient, setIsClient] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if we are on the client
    setIsClient(true);

    // Firebase authentication check
    if (auth.currentUser) {
      setIsAuthenticated(true);
    } else {
      router.push("/login"); // Redirect if not logged in
    }
  }, [router]);

  if (!isClient || !isAuthenticated) return null; // Only render on client and when authenticated

  return (
    <main style={{ display: "flex", justifyContent: "center", padding: "20px", flexWrap: "wrap" }}>
      <h2>All Teachers</h2>
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} name={teacher.name} subject={teacher.subject} />
      ))}
    </main>
  );
}
