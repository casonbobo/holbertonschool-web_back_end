class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
    if (typeof newName !== 'string') {
      throw TypeError('Name needs to be a string');
    }
    if (typeof newLength !== 'number') {
      throw TypeError('Length needs to be a number');
    }
    if (!newStudents.every((students) => typeof students === 'string') || !Array.isArray(newStudents)) {
      throw TypeError('newStudents needs to be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name needs to be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('Length needs to be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!newStudents.every((students) => typeof students === 'string') || !Array.isArray(newStudents)) {
      throw TypeError('newStudents needs to be a string');
    }
    this._students = newStudents;
  }
}
export default HolbertonCourse;
