import Mustache from "mustache";

test("Test Mustache Tags", async () => {
  const data = Mustache.render(
    "Hello, namaku {{name}}, dan hobiku adalah {{{hobby}}}",
    {
      name: "M Bimo Bayu Bagaskara",
      hobby: "<b>Coding</b>",
    }
  );

  expect(data).toBe(
    "Hello, namaku M Bimo Bayu Bagaskara, dan hobiku adalah <b>Coding</b>"
  );
});
