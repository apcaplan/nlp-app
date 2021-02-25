import { handleSubmit } from "../formHandler";

describe('Test handleSubmit functionality', () => {
  test("Should be defined", () => {
    expect(handleSubmit).toBeDefined()
  })
})

describe('Test handleSubmit functionality', () => {
  test("Should be a function", () => {
    expect(typeof handleSubmit).toBe("function")
  })
})
