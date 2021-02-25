function textSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("words").value;

  console.log("::: Form Submitted :::");

  return fetch("http://localhost:8081/text", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: formText }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      document.querySelector(".results").classList.add("show");
      document.getElementById("text").innerHTML = res.results[0].result.article;

      document.getElementById("hashtags").innerHTML = res.results[1].result.hashtags.join(", ");
      if (res.results[1].result.hashtags && res.results[1].result.hashtags !== "unknown") {
        document.querySelector(".hashtags").classList.add("show");
      }

      document.getElementById("subjectivity").innerHTML = res.results[2].result.subjectivity;
      if (res.results[2].result.subjectivity && res.results[2].result.subjectivity !== "unknown") {
        document.querySelector(".subjectivity").classList.add("show");
      }

      if (res.results[2].result.polarity) {
        document.querySelector(".polarity").classList.add("show");
      }
      document.getElementById("polarity").innerHTML = res.results[2].result.polarity;
    });
}

export { textSubmit };
