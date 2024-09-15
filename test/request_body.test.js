import express from "express";
import request from "supertest";
import expressFileUpload from "express-fileupload";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressFileUpload());

app.post("/hello", (req, res) => {
  const name = req.body.name;
  res.json({
    message: `Hello ${name}`,
  });
});

app.post("/", (req, res) => {
  const textFile = req.files.article;
  textFile.mv(__dirname + "/upload/" + textFile.name);

  res.send(`Success upload file ${textFile.name}`);
});

app.post("/form", (req, res) => {
  const name = req.body.name;
  res.json({
    message: `Hello ${name}`,
  });
});

test("Test Request JSON", async () => {
  const response = await request(app)
    .post("/hello")
    .set("Content-Type", "application/json")
    .send({ name: "Bimo" });

  expect(response.body).toEqual({
    message: "Hello Bimo",
  });
});

test("Test Request JSON", async () => {
  const response = await request(app).post("/form").send("name=Bimo");

  expect(response.body).toEqual({
    message: "Hello Bimo",
  });
});

test("Test Upload File", async () => {
  const response = await request(app)
    .post("/")
    .set("Content-Type", "multipart/form-data")
    .attach("article", __dirname + "/contoh.txt");

  expect(response.text).toBe("Success upload file contoh.txt");
});
