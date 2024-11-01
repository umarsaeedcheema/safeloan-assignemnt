"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase-config";
import TeacherCard from "../components/TeacherCard";

const teachers = [
  { name: "John Doe", subject: "Mathematics" },
  { name: "Jane Smith", subject: "Physics" },
  { name: "Alice Johnson", subject: "Chemistry" },
];

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser) {
      setIsAuthenticated(true);
    } else {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [router]);

  if (!isAuthenticated) return null; // Render nothing until authenticated

  return (
    <main style={{ display: "flex", justifyContent: "center", padding: "20px", flexWrap: "wrap" }}>
      <h2>All Teachers</h2>
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} name={teacher.name} subject={teacher.subject} />
      ))}
    </main>
  );
}
