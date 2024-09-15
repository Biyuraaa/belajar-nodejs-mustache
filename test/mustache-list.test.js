import Mustache from "mustache";
import fs from "fs/promises";

test("Test Mustache List", async () => {
  const hobbiesTemplate = await fs
    .readFile("./templates/hobbies.mustache")
    .then((data) => data.toString());
  const data = Mustache.render(hobbiesTemplate, {
    hobbies: ["Coding", "Gaming", "Workout"],
  });

  console.info(data);
  expect(data).toContain("Coding");
  expect(data).toContain("Gaming");
  expect(data).toContain("Workout");
  expect(data).not.toContain("Data hobbies tidak ditemukan");
  const data2 = Mustache.render(hobbiesTemplate, {});
  expect(data2).not.toContain("Coding");
  expect(data2).not.toContain("Gaming");
  expect(data2).not.toContain("Workout");
  expect(data2).toContain("Data hobbies tidak ditemukan");
});
