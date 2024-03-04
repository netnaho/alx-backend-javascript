export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      const numOfDepartments = Object.keys(employeesList).length;
      return numOfDepartments;
    },
  };
}
