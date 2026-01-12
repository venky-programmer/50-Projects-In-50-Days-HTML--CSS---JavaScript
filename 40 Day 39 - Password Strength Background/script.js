const backgroundEl = document.getElementById("background");
const passwordEl = document.getElementById("password");

passwordEl.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  backgroundEl.style.filter = `blur(${blurValue}px)`;
});
