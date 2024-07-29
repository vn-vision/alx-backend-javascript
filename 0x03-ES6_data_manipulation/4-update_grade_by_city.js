export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  const updatedStudents = studentsByCity.map((student) => {
    const grade = newGrades.find((newGrade) => newGrade.studentId === student.id);
    if (grade) {
      return { ...student, grade: grade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return updatedStudents;
}
