const request = require("supertest");
const { expect } = require("chai");
const baseURL = require("../globalvariable/baseURL");

const url = `${baseURL}`;

async function getMethod () {
    const response = await request(url).get("/objects/12");
    expect(response.status).to.equal(200);
    console.log(response.body);
}

async function postMethod () {
    const response = await request(url).post("/objects").send({"name":"simon","data":{"Generation":"2024","Price":"419.99","Capacity":"64 GB"}});
    expect(response.status).to.equal(200);
    console.log(response.body);
}

async function putMethod (id) {
    const response = await request(url).put(`/objects/${id}`).send({
        "name":"Simon Pohan","data":{"Generation":"4th","Price":"419.99","Capacity":"64 GB"}
    })
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Simon Pohan");
    console.log(response.body);
}

module.exports = { getMethod, postMethod, putMethod};