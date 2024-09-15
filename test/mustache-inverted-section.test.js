import Mustache from "mustache";
import fs from "fs/promises";

test("Test Mustache File", async () => {
  const mahasiswaTemplate = await fs
    .readFile("./templates/mahasiswa.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(mahasiswaTemplate, {});
  console.info(data);
  expect(data).not.toContain("M Bimo Bayu Bagaskara");
  expect(data).not.toContain("187221049");
  expect(data).not.toContain("Sistem Informasi");
  expect(data).toContain("Data mahasiswa tidak ditemukan");
});
