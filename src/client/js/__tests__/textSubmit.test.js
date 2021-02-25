import { textSubmit } from "../textSubmit";

describe("Test textSubmit", () => {
  test("Should fetch data and add response to page", () => {
    document.body.innerHTML = `
      <div class="tab">
        <form class="text-tab" onsubmit="return textSubmit(event)">
          <textarea id="words" type="text" name="input" placeholder="Enter text here" rows="4"></textarea>
          <input type="submit" value="submit" onclick="return textSubmit(event)" onsubmit="return textSubmit(event)">
        </form>
      </div>

      <section class="results">
        <h2>Analysis</h2>
        <div class="text">
          <p>Text:</p>
          <div id="text"></div>
        </div>

        <div class="polarity">
          <p>Author's tone:</p>
          <div id="polarity"></div>
        </div>

        <div class="hashtags">
          <p>Possible hashtags for this text:</p>
          <div id="hashtags"></div>
        </div>
      </section>
    `;

    const sampleText = "In this life we cannot do great things. We can only do small things with great love. -Mother Teresa";
    const text = document.querySelector("#text");
    const polarity = document.querySelector("#polarity");
    const hashtags = document.querySelector("#hashtags");

    document.querySelector("#words").innerHTML = sampleText;
    document
      .querySelector('input[type="submit"]')
      .click()
      .then(() => {
        expect(text.value).toMatch(sampleText);
        expect(polarity.value).toBe("positive");
        expect(hashtags.value).toMatch("#MotherTeresa");
      });
  });
});
