import { useEffect, useState } from "react";
import type { Student } from "@/interface/Student";
import { StudentCard } from "@/components/studentCard";

function FavoriteStudent() {
  const [students, setStudents] = useState<Student[]>([]);

  const fetchData = () => {
    const data = localStorage.getItem("favoriteStudent");
    const dataStudent: Student[] = data ? JSON.parse(data) : [];

    setStudents(dataStudent);
  };

  const removeStudentById = (id: string) => {
    const updateData = students.filter((student) => student._id !== id);
    setStudents(updateData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[90%] max-w-7xl mx-auto my-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-8">
        {students.map((student) => {
          return (
            <StudentCard
              onRemove={removeStudentById}
              key={student._id}
              _id={student._id}
              name={student.name}
              school={student.school}
              photoUrl={student.photoUrl}
              damageType={student.damageType}
              armorType={student.armorType}
              favorite={student.favorite}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FavoriteStudent;
