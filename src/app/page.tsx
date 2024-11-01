import TeacherCard from "../components/TeacherCard";

const teachers = [
  { name: "John Doe", subject: "Mathematics" },
  { name: "Jane Smith", subject: "Physics" },
  { name: "Alice Johnson", subject: "Chemistry" },
];

export default function HomePage() {
  return (
    <main style={{ display: "flex", justifyContent: "center", padding: "20px", flexWrap: "wrap" }}>
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} name={teacher.name} subject={teacher.subject} />
      ))}
    </main>
  );
}
