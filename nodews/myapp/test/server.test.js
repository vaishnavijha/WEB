const expect = require('chai').expect;
const request = require('request');

// Test Suite
describe("testing server functionalites", () => {
    it("test server to add numbers", (done) => {
      request('http://localhost:3000/add?x=20&y=15', (error, response, body) => {
            const result = "35";
            expect(body).to.be.equal(result);
            done();
        });
    });
});