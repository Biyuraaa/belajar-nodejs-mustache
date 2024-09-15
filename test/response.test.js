import express from "express";
import request from "supertest";

const app = express();

test("Response", async () => {
  app.get("/response", (req, res) => {
    if (req.query.name) {
      res.status(200).send(`Hello ${req.query.name}`);
    } else {
      res.status(400).end();
    }
  });

  const response1 = await request(app)
    .get("/response")
    .query({ name: "M Bimo Bayu Bagaskara" });

  expect(response1.text).toBe("Hello M Bimo Bayu Bagaskara");
  expect(response1.status).toBe(200);

  const response2 = await request(app).get("/response");

  expect(response2.status).toBe(400);
});

test("Response Header", async () => {
  app.get("/response-header", (req, res) => {
    res
      .set({
        "X-Powered-By": "Biyuraaa",
        "X-Author": "M Bimo Bayu Bagaskara",
      })
      .end();
  });

  const response = await request(app).get("/response-header");

  expect(response.get("X-Author")).toBe("M Bimo Bayu Bagaskara");
  expect(response.get("X-Powered-By")).toBe("Biyuraaa");
});

test("Response Redirect", async () => {
  app.get("/", (req, res) => {
    res.redirect("/next_page");
  });

  const response = await request(app).get("/");

  expect(response.status).toBe(302);
  expect(response.get("Location")).toBe("/next_page");
});
