import express from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());

app.get("/", (req, res) => {
  res.render("index", {
    title: "Belajar Express",
    say: "M Bimo Bayu Bagaskara",
  });
});

test("Test Mustache Express", async () => {
  const response = await request(app).get("/");
  console.info(response.text);
  expect(response.text).toContain("Belajar Express");
  expect(response.text).toContain("M Bimo Bayu Bagaskara");
});
