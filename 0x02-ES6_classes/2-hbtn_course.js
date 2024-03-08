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

  set name(nam) {
    this._name = nam;
  }

  get length() {
    return this._length;
  }

  set length(len) {
    this._length = len;
  }

  get students() {
    return this._students;
  }

  set students(stud) {
    this._students = stud;
  }
}
