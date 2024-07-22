/**
 * function named createReportObject whose parameter, employeesList,
 * is the return value of the previous function createEmployeesObject.

* createReportObject return an object containing the key allEmployees
* and a method property called getNumberOfDepartments.

* allEmployees is a key that maps to an object containing the department name
* a list of all the employees in that department..
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
