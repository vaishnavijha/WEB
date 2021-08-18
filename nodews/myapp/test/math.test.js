const expect = require('chai').expect;
const math = require('../src/math'); 

// AAA ==> Assemble, Action and Assert

// Test Suite
describe("testing math functionalites", () => {

    // test @Test ==> test-spec or test function
    it("test add", () => {
        let expected = 25;
        expect(math.add(10, 15)).to.be.equal(expected);
    });

    // test @Test
    it("test sub", () => {
        let expected = 5;
        expect(math.sub(20, 15)).to.be.equal(expected);
    });
})
