import Mustache from "mustache";

test("Test Mustache", () => {
  const response = Mustache.render("Hello, {{name}}", {
    name: "M Bimo Bayu Bagaskara",
  });
  expect(response).toBe("Hello, M Bimo Bayu Bagaskara");
});
