export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new Error('length must be a number');
    } else {
      this._length = length;
    }
    if (!Array.isArray(students)) {
      throw new Error('students should be an array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    this._name = name;
  }

  set length(length) {
    this._length = length;
  }

  set students(students) {
    this._students = students;
  }
}
