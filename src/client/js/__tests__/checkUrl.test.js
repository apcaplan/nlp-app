import { checkUrl } from "../urlChecker";

describe("Test urlChecker for valid cases", () => {
  test("Should return true", () => {
    const goodExamples = ["http://test.com", "https://sample.com"];

    goodExamples.forEach((example) => {
      expect(checkUrl(example)).toBeTruthy();
    });
  });
});

describe("Test urlChecker for invalid cases", () => {
  test("Should return false", () => {
    const badExamples = ["test.com", "sample.com", "http:///test.com", "https:/samples.com"];

    badExamples.forEach((eg) => {
      expect(checkUrl(eg)).toBeFalsy();
    });
  });
});
