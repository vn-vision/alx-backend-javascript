const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber type = SUM', () => {
  it('returns 5 when inputs are 1.5 and 2.5', () => {
    const res = calculateNumber('SUM', 1.5, 2.5);
    assert.equal(res, 5);
  });

  it('returns 3 when the input is 1.2 and 1.8', () => {
    const res = calculateNumber('SUM', 1.2, 1.8);
    assert.equal(res, 3);
  });

  it('returns 5 when the input is 1.5 and 2.5', () => {
    const res = calculateNumber('SUM', 1.5, 2.5);
    assert.equal(res, 5);
  });

  it('returns 0 when the input is 0 and 0.4', () => {
    const res = calculateNumber('SUM', 0, 0);
    assert.equal(res, 0);
  });

  it('returns -3 when the input is -1.2 and -1.8', () => {
    const res = calculateNumber('SUM', -1.2, -1.8);
    assert.equal(res, -3);
  });

  it('returns -2 when the input is -1.5 and 4', () => {
    const res = calculateNumber('SUM', -1.5, 4);
    assert.equal(res, 3);
  });
});

describe('calculateNumber type = SUBTRACT', () => {
  it('returns 0 when inputs are 1.5 and 1.5', () => {
    const res = calculateNumber('SUBTRACT', 1.5, 1.5);
    assert.equal(res, 0);
  });

  it('returns 0 when the input is 1.2 and 1.2', () => {
    const res = calculateNumber('SUBTRACT', 1.2, 1.2);
    assert.equal(res, 0);
  });

  it('returns -1 when the input is 1.5 and 2.5', () => {
    const res = calculateNumber('SUBTRACT', 1.5, 2.5);
    assert.equal(res, -1);
  });

  it('returns 0 when the input is 0 and 0', () => {
    const res = calculateNumber('SUBTRACT', 0, 0);
    assert.equal(res, 0);
  });

  it('returns 0 when the input is -1.2 and -1.2', () => {
    const res = calculateNumber('SUBTRACT', -1.2, -1.2);
    assert.equal(res, 0);
  });

  it('returns -5 when the input is -1.5 and 4', () => {
    const res = calculateNumber('SUBTRACT', -1.5, 4);
    assert.equal(res, -5);
  });
});

describe('calculateNumber type = DIVIDE', () => {
  it('returns 1 when inputs are 1.5 and 1.5', () => {
    const res = calculateNumber('DIVIDE', 1.5, 1.5);
    assert.equal(res, 1);
  });

  it('returns 1 when the input is 1.2 and 1.2', () => {
    const res = calculateNumber('DIVIDE', 1.2, 1.2);
    assert.equal(res, 1);
  });

  it('returns 0.6 when the input is 1.5 and 2.5', () => {
    const res = calculateNumber('DIVIDE', 1.5, 2.5);
    assert.equal(res, (2/ 3));
  });

  it('returns 0 when the input is 0 and 0', () => {
    const res = calculateNumber('DIVIDE', 0, 0);
    assert.equal(res, 'Error');
  });

  it('returns 0.6 when the input is -1.2 and -2', () => {
    const res = calculateNumber('DIVIDE', -1.2, -2);
    assert.equal(res, 0.5);
  });

  it('returns -0.25 when the input is -1.5 and 4', () => {
    const res = calculateNumber('DIVIDE', -1.5, 4);
    assert.equal(res, -0.25);
  });
});

