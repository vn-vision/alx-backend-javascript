export default function getStudentIdsSum(students) {
  return students.reduce((acc, stud) => acc + stud.id, 0);
}
