const chai = require("chai");
const should = require("chai").should();
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
const mockData = require("./mockData");
const routes = require("../routes/routeHandler");

chai.use(chaiHttp);

//Endpoint Testing
describe("Request Test Endpoint", () => {
  it("should return with a pong response", (done) => {
    chai
      .request(routes)
      .get("/api/ping")
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.include({ success: true });
        done();
      });
  });
});

describe("Request Endpoint All Valid Parameters", () => {
  it("should return a 200 status code", (done) => {
    chai
      .request(routes)
      .get("/api/posts/?tags=tech,history&sortBy=id&direction=desc")
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
      });
  });
});

describe("Request Endpoint Without Required Query Param", () => {
  it("should return a 400 status code with success being equal to false", (done) => {
    chai
      .request(routes)
      .get("/api/posts")
      .end((err, res) => {
        res.should.have.status(400);
        expect(res.body).to.include({ success: false });
        done();
      });
  });
});

describe("Requesting Endpoint With Invalid Query Param", () => {
  it("should return a 400 status code with an error message", (done) => {
    chai
      .request(routes)
      .get("/api/posts/?tags=tech&sortBy=2")
      .end((err, res) => {
        expect(res.body).to.include({ error: "sortBy parameter is invalid" });
        done();
      });
  });
});
