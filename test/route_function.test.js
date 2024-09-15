import express from "express";
import request from "supertest";

const app = express();

app
  .route("/products")
  .get((req, res) => {
    res.send("Get Products");
  })
  .post((req, res) => {
    res.send("Create Products");
  })
  .put((req, res) => {
    res.send("Update Products");
  });

test("Test Route Function", async () => {
  const response1 = await request(app).get("/products");
  expect(response1.text).toBe("Get Products");
  const response2 = await request(app).post("/products");
  expect(response2.text).toBe("Create Products");
  const response3 = await request(app).put("/products");
  expect(response3.text).toBe("Update Products");
});
