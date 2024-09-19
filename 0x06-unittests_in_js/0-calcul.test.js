const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return 3 when inputs are 1.3 and 1.7', () =>{
        const result = calculateNumber(1.3, 1.7);
        assert.equal(result, 3);
    });

    it('should return 3 when the inputs are 1 and 1.7', () =>{
        const result = calculateNumber(1, 1.7);
        assert.equal(result, 3);
    });

    it('should return 5 when the inputs are 1.5 and 2.5', () =>{
        const result = calculateNumber(1.5, 2.5);
        assert.equal(result, 5);
    });

    it('should return 0 when inputs are 0.4 and -0.4',() => {
        const result = calculateNumber(0.4, -0.4);
        assert.equal(result, 0);
    }) ;

    it('should handle -ve numbers well', () => {
        const result = calculateNumber(-1, -2.1);
        assert.equal(result, -3);
    })
});
