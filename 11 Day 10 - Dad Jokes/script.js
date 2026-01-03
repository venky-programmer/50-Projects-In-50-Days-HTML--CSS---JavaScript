const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// jokeBtn.addEventListener("click", generateJoke);
jokeBtn.addEventListener("click", generateJokeAsyncAwait);

// generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((resp) => resp.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}

async function generateJokeAsyncAwait() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  jokeEl.innerHTML = data.joke;
}
