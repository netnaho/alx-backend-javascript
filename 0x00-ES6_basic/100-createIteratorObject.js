export default function createIteratorObject(report) {
  const departments = report.allEmployees;
  const employees = [];

  // eslint-disable-next-line guard-for-in
  for (const department in departments) {
    for (const employee of department) {
      employees.push(employee);
    }
  }

  return employees;
}
