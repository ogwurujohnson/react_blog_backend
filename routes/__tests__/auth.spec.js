const request = require("supertest");
const server = require("../../app");
const db = require("../../data/dbConfig");

beforeAll(async () => {
  await db("users").truncate();
});

afterAll(async () => {
  await db("users").truncate();
});

describe("POST /api/auth/register", () => {
  test("should return HTTP status code 201 when successful", async () => {
    const validMockData = {
      username: "testuser",
      email: "testuser999@gmail.com",
      password: "password",
      confirmPassword: "password"
    };

    const response = await request(server)
      .post("/api/auth/register")
      .send(validMockData);

    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("username", validMockData.username);
    expect(response.body).toHaveProperty("email", validMockData.email);
    expect(response.body).toHaveProperty("password");
    expect(response.body).toHaveProperty("jwt");
    expect(response.body).toHaveProperty("id");
  });

  test("should return HTTP status code 400 when missing data", async () => {
    const invalidMockData = {
      username: "testuser",
      email: "",
      password: "testpassword"
    };

    const response = await request(server)
      .post("/api/auth/register")
      .send(invalidMockData);

    expect(response.status).toBe(400);
    expect(response.body).toBeInstanceOf(Object);
  });
});