const request = require("supertest");
const server = require("../server");
const db = require("../database/dbConfig");

describe("testing for endpoints", () => {
    it("GET /", async () => {
        const res = await request(server).get("/");
        expect(res.statusCode).toBe(200);
        // `content-type` headers tell the client how to render the data
        expect(res.headers["content-type"]).toBe(
            "application/json; charset=utf-8"
        );
        expect(res.body.message).toBe("The API is running!");
    });

    it("GET /api", async () => {
        const res = await request(server).get("/api");
        expect(res.statusCode).toBe(200);
        // `content-type` headers tell the client how to render the data
        expect(res.headers["content-type"]).toBe(
            "application/json; charset=utf-8"
        );
        expect(res.body.message).toBe("Welcome to the Anywhere Fitness API!");
    });

    it("GET /api/classes", async () => {
        const res = await request(server).get("/api/classes");
        expect(res.statusCode).toBe(200);
        expect(res.headers["content-type"]).toBe(
            "application/json; charset=utf-8"
        );
        expect(res.body).toHaveLength(6);
    });

    it("GET /api/users", async () => {
        const res = await request(server).get("/api/users");
        expect(res.statusCode).toBe(200);
        expect(res.headers["content-type"]).toBe(
            "application/json; charset=utf-8"
        );
        expect(res.body).toHaveLength(15);
    });
});
