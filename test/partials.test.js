import Mustache from "mustache";
import fs from "fs/promises";

test("Test Mustache Partials", async () => {
  const contentTemplate = await fs
    .readFile("./templates/content.mustache")
    .then((data) => data.toString());

  const headerTemplate = await fs
    .readFile("./templates/header.mustache")
    .then((data) => data.toString());

  const footerTemplate = await fs
    .readFile("./templates/footer.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(
    contentTemplate,
    {
      content: "Belajar NodeJS Mustache Partials",
      description: "Belajar NodeJS Mustache Partials Description",
    },
    {
      header: headerTemplate,
      footer: footerTemplate,
    }
  );
  console.info(data);
  expect(data).toContain("Belajar NodeJS Mustache Partials");
  expect(data).toContain("Belajar NodeJS Mustache Partials Description");
});
