import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.name}`);
});

test("Test Request With Query", async () => {
  const response = await request(app).get("/").query({ name: "Bimo" });
  expect(response.text).toBe("Hello Bimo");
});

test("Test Request With Query 2", async () => {
  const response = await request(app).get("/").query({ name: "World" });
  expect(response.text).toBe("Hello World");
});

test("Test Request URL", async () => {
  const app = express();
  app.get("/hello/world", (req, res) => {
    res.json({
      path: req.path,
      originalUrl: req.originalUrl,
      protocol: req.protocol,
      hostname: req.hostname,
    });
  });
  const response = await request(app)
    .get("/hello/world")
    .query({ name: "World" });

  expect(response.body).toEqual({
    path: "/hello/world",
    originalUrl: "/hello/world?name=World",
    protocol: "http",
    hostname: "127.0.0.1",
  });
});

test("Test Query Param", async () => {
  const app = express();

  app.get("/query", (req, res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
  });

  const response = await request(app)
    .get("/query")
    .query({ firstName: "M Bimo", lastName: "Bayu Bagaskara" });

  expect(response.text).toBe("Hello M Bimo Bayu Bagaskara");
});

test("Test Request Header", async () => {
  app.get("/header", (req, res) => {
    const header = req.get("Content");
    res.send(`Hello ${header}`);
  });

  const response = await request(app)
    .get("/header")
    .set("Content", "text/plain");

  expect(response.text).toBe("Hello text/plain");
});
