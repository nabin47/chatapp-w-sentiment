const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });

  // Test conversation fetch
  describe("GET /api/conversations/:userId", () => {
    it("should return a conversation", async () => {
      const res = await request(app).get(
        "/api/conversations/63dfe236c0b7064680d3b1ff"
      );
      expect(res.statusCode).toBe(200);
    });
  });

  // Test user register
  // describe("POST /api/auth/register", () => {
  //   it("should create a new user", async () => {
  //     const res = await request(app).post("/api/auth/register").send({
  //       username: "Jamil",
  //       email: "jamil@gmail.com",
  //       password: "123456",
  //     });
  //     expect(res.status).toBe(200);
  //   });
  // });

  // Test message fetch
  describe("GET /api/messages/:conversationId", () => {
    it("should return messages of a conversation", async () => {
      const res = await request(app).get(
        "/api/messages/63e00c685b01c7645392788b"
      );
      expect(res.statusCode).toBe(200);
    });
  });

  // Test login
  describe("POST /api/auth/login", () => {
    it("should verify successful login", async () => {
      const res = await request(app).post("/api/auth/login").send({
        email: "jamil@gmail.com",
        password: "123456",
      });
      expect(res.status).toBe(200);
    });
  });
  