import Mustache from "mustache";

test("Test Mustache", () => {
  const response = Mustache.render("Hello, {{name}}", {
    name: "M Bimo Bayu Bagaskara",
  });
  expect(response).toBe("Hello, M Bimo Bayu Bagaskara");
});

test("Test Mustache Cache", () => {
  Mustache.parse("Hello, {{name}}");
  const data = Mustache.render("Hello, {{name}}", {
    name: "M Bimo Bayu Bagaskara",
  });

  expect(data).toBe("Hello, M Bimo Bayu Bagaskara");
});
