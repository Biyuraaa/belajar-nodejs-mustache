import express from "express";
import request from "supertest";

const app = express();

const errorMiddleware = (error, req, res, next) => {
  res.status(500).send(`Terjadi error dengan pesan : ${error.message}`);
};

app.get("/", (req, res) => {
  throw new Error("Ups");
});
app.use(errorMiddleware);
test("Test error middleware", async () => {
  const response = await request(app).get("/");

  expect(response.status).toBe(500);
  expect(response.text).toBe("Terjadi error dengan pesan : Ups");
});
