// reference: https://www.youtube.com/watch?v=I4BZQr-5mBY&list=LL
// Testing a REST API in Node JS with Express using Mocha and Chai by Pragmatic Reviews 

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

// Asseration Style
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {
  
    /**
     * Test the GET route
     */

    describe("GET /stickers", () => {
        it("It should GET all the stickers", (done) => {
            chai.request('http://localhost:3001')
                .get("/stickers")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(2);
                done();
                })
        })
    })

});
