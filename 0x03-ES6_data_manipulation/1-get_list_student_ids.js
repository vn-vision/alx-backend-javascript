// return the list of student ids in an array
export default function getListStudentIds(objArray) {
  if (Array.isArray(objArray)) {
    return objArray.map((obj) => obj.id);
  }
  return [];
}
