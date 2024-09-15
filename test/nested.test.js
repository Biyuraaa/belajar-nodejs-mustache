import Mustache from "mustache";

test("Test Mustache Tags", async () => {
  const data = Mustache.render(
    "Nama : {{mahasiswa.name}} \n NIM : {{mahasiswa.nim}} \n Jurusan : {{mahasiswa.jurusan}}",
    {
      mahasiswa: {
        name: "M Bimo Bayu Bagaskara",
        nim: "187221049",
        jurusan: "Sistem Informasi",
      },
    }
  );

  expect(data).toEqual(
    "Nama : M Bimo Bayu Bagaskara \n NIM : 187221049 \n Jurusan : Sistem Informasi"
  );
});
