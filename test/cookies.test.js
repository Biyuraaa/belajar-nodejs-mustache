import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.cookies["name"];
  res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("Login", name, { path: "/" });
  res.send(`Hello ${name}`);
});

test("Test Cookie", async () => {
  const response = await request(app)
    .get("/")
    .set("Cookie", "name=Bimo;nim=187221049;jurusan=SI");

  expect(response.text).toBe("Hello Bimo");
});

test("Test Cookie Login", async () => {
  const response = await request(app).post("/login").send({ name: "Bimo" });
  expect(response.text).toBe("Hello Bimo");
});
