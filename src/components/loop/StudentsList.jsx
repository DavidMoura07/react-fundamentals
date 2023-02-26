import React from "react";
import students from "../../data/Students";

const StudentsList = props => {
  const studentsLI = students.map(student => <li key={student.id}>{student.id}) {student.name} - {student.grade}</li>)
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {studentsLI}
      </ul>
    </div>
  )
}

export default StudentsList