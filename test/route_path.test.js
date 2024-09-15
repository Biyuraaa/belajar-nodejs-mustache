import express from "express";
import request from "supertest";

const app = express();

app.get("/products/*.json", (req, res) => {
  res.send(req.originalUrl);
});

app.get("/categories/*(\\d+).json", (req, res) => {
  res.send(req.originalUrl);
});

app.get("/products/:id", (req, res) => {
  res.send(req.params.id);
});
app.get("/categories/:id(\\d+)", (req, res) => {
  res.send(req.params.id);
});

test("Test regex", async () => {
  const response1 = await request(app).get("/products/bimo.json");
  expect(response1.text).toBe("/products/bimo.json");
  const response2 = await request(app).get("/products");
  expect(response2.status).toBe(404);
  const response3 = await request(app).get("/categories/1234.json");
  expect(response3.text).toBe("/categories/1234.json");
  const response4 = await request(app).get("/categories/salah.json");
  expect(response4.status).toBe(404);
});
