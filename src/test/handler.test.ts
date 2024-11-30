import { handler } from "../function/handler";

test("Returns Hello, John when name is provided", async () => {
  const response = await handler({ queryStringParameters: { name: "John" } });
  expect(response.body).toBe("Hello, John");
});

test("Returns Hello, World when name is not provided", async () => {
  const response = await handler({ queryStringParameters: {} });
  expect(response.body).toBe("Hello, World");
});
