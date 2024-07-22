/**
* Write a function named createEmployeesObject that will receive two arguments:

* @param:departmentName (String)
* @param: employees (Array of Strings)
 */
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
