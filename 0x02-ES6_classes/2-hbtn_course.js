export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    }
    if (typeof length === 'number') {
      this._length = length;
    }
    if (Array.isArray(students)) {
      this._students = students;
    }
  }

  //   getter for name
  get name() {
    return this._name;
  }

  //  getter for length
  get length() {
    return this._length;
  }

  //  getter for students
  get students() {
    return this._students;
  }

  //   setter for name
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  //   setter for length
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  //   setter for students
  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else { throw new TypeError('Students must be an array'); }
  }
}
