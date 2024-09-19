const calculateNumber = require('./1-calcul.js');

console.log(
  (Math.round(1.5)),
  ((Math.round(1.5)) + Math.round(2.5)),
  calculateNumber('SUM', 1.4, 4.5),
  calculateNumber('SUM', 1.5, 4),
  calculateNumber('SUBTRACT', 1.4, 4.5),
  calculateNumber('DIVIDE', 1.4, 4.5),
  calculateNumber('DIVIDE', -1.2, -2),
);
