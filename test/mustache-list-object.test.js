import Mustache from "mustache";
import fs from "fs/promises";

test("Test Mustache File", async () => {
  const mahasiswaTemplate = await fs
    .readFile("./templates/mahasiswa.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(mahasiswaTemplate, {
    mahasiswa: [
      {
        nama: "M Bimo Bayu Bagaskara",
        nim: "187221049",
        jurusan: "Sistem Informasi",
      },
      {
        nama: "Rizal Ahmad Doni",
        nim: "187221096",
        jurusan: "Sistem Informasi",
      },
      {
        nama: "Naufal Zaki Riyadi",
        nim: "187221074",
        jurusan: "Sistem Informasi",
      },
    ],
  });
  console.info(data);
  expect(data).toContain("M Bimo Bayu Bagaskara");
  expect(data).toContain("187221049");
  expect(data).toContain("Sistem Informasi");
  expect(data).toContain("Rizal Ahmad Doni");
  expect(data).toContain("187221096");
  expect(data).toContain("Naufal Zaki Riyadi");
  expect(data).toContain("187221074");
});
