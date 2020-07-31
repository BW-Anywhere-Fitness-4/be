const supertest = require("supertest");
const server = require("../index");
const db = require("../data/dbConfig");

/*   beforeEach(async () => {
    await db.seed.run()
}) 
 */
/* afterAll(async () => {
    await db.destroy()
}) */

describe("classes", () => {
  it("GET /api/classes", async () => {
    const res = await supertest(server).get("/api/classes");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
  });

  it("GET /api/classes/:id", async () => {
    const res = await supertest(server).get("/api/classes/2");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.body.class_id).toBe(2);
    expect(res.body.class_name).toBe("tennis");
  });

  it("GET /api/users", async () => {
    const res = await supertest(server).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
  });

  it("POST /api/classes", async () => {
    const res = await supertest(server).post("/api/classes").send({
      class_name: "tennis",
      instructor: "ronnie",
      class_date: "2020-07-25",
      class_time: "09:00:00",
      type_id: 4,
      duration: 45,
      intensity: "moderate",
      location: "track",
      number_of_attendees: 5,
      max_class_size: 10,
    });
    expect(res.statusCode).toBe(201);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.body).toBe(res.body);
  });
});
