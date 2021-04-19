const x = require("SignUp");

const request = require("supertest");

describe("GET / ", () =>{
    test("It should respond with reset", async() => {
    const response = await request(x.app).get("/SignUp");
    expect(response.statusCode).toBe(200);
    });
    });