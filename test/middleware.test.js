import express from "express";
import request from "supertest";

const app = express();

const logger = (req, res, next) => {
  console.info(`Receive Request : ${req.method} ${req.originalUrl}`);
  next();
};

const addPoweeredHeader = (req, res, next) => {
  res.set("X-Powered-By", "Biyuraaa");
  next();
};

const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).end();
  }
};

const requestDateTimeNow = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};
app.use(logger);
app.use(addPoweeredHeader);
app.use(requestDateTimeNow);

// test("Test middleware", async () => {
//   app.get("/", (req, res) => {
//     res.send("Hello Middleware");
//   });

//   const response = await request(app).get("/");

//   expect(response.get("x-powered-by")).toBe("Biyuraaa");
//   expect(response.text).toBe("Hello Middleware");
// });

app.use(apiKeyMiddleware);

test("Test api key", async () => {
  app.get("/", (req, res) => {
    res.send("Hello Middleware");
  });
  const response3 = await request(app).get("/");
  const response4 = await request(app).get("/").query({ apiKey: "123" });

  expect(response3.status).toBe(401);
  // expect(response4.status).toBe(200);
  expect(response4.text).toBe("Hello Middleware");
});

test("Test with no api key ", async () => {
  app.get("/", (req, res) => {
    res.send("Hello Middleware");
  });

  const response = await request(app).get("/");

  expect(response.status).toBe(401);
});

test("Test request date time", async () => {
  app.get("/hello", (req, res) => {
    res.send(`Hello Today is ${req.requestTime}`);
  });

  const response = await request(app).get("/hello").query({ apiKey: 123 });

  expect(response.text).toContain("Hello Today is");
});
