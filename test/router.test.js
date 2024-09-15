import express from "express";
import request from "supertest";

const app = express();

const router = express.Router();

app.use(router);

router.use((req, res, next) => {
  console.info(`Receive request : ${req.originalUrl}`);
  next();
});

router.get("/feature/a", (req, res) => {
  res.send("Feature A");
});

test("Test Router", async () => {
  const response = await request(app).get("/feature/a");

  expect(response.text).toBe("Feature A");
});
