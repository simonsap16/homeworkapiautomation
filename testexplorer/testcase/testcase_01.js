const request = require("supertest");
const { expect } = require("chai");
const baseURL = require("../globalvariable/baseURL");

// const url = supertest("https://restful-api.dev/"); //
const url = `${baseURL}`;

//test suites
describe("Testing API restful", function () {
//testcase1
it("TEST GET" , async function(){
    const response = await request(url).get("/objects/12");
    expect(response.status).to.equal(200);
    console.log(response.body);
});
});