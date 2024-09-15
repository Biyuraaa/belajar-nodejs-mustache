import Mustache from "mustache";
import fs from "fs/promises";

test("Test Mustache File", async () => {
  const mahasiswaTemplate = await fs
    .readFile("./templates/mahasiswa.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(mahasiswaTemplate, {
    mahasiswa: {
      nama: "M Bimo Bayu Bagaskara",
      nim: "187221049",
      jurusan: "Sistem Informasi",
    },
  });
  console.info(data);
  expect(data).toContain("M Bimo Bayu Bagaskara");
  expect(data).toContain("187221049");
  expect(data).toContain("Sistem Informasi");
});
