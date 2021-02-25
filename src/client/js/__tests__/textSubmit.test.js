import { textSubmit } from "../textSubmit";

describe('Test textSubmit functionality', () => {
  test("Should be defined", () => {
    expect(textSubmit).toBeDefined()
  })
})

describe('Test textSubmit functionality', () => {
  test("Should be a function", () => {
    expect(typeof textSubmit).toBe("function")
  })
})
