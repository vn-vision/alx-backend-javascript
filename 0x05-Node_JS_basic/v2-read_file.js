const fs = require('node:fs');

/**
 * Counts the students in a CSV data file
 * @param {String} path to the CSV
 *
 */

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    let count = 0;
    let i = 1;
    const fields = new Set();
    while (lines.length > i) {
      count += 1;
      const words = lines[i].split(',');
      fields.add(words[3]);
      i += 1;
    }
    console.log(`Number of students: ${count}`);
    for (const field of fields) {
      if (field) {
        const students = lines.filter((line) => line.split(',')[3] === field);
        const studentNames = students.map((student) => student.split(',')[0]).join(', ');
        console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
