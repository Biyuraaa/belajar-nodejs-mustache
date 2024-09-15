import Mustache from "mustache";
import fs from "fs/promises";

test("Test Mustache File", async () => {
  const helloTemplate = await fs
    .readFile("./templates/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    title: "Mustache File",
    content: "Belajar NodeJS Mustache File",
  });
  console.info(data);
  expect(data).toContain("Mustache File");
  expect(data).toContain("Belajar NodeJS Mustache File");
});
