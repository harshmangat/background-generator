let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("#gradient");

const setGradient = () => {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";

  css.textContent = body.style.background + ";";
};

let random = document.createElement("button");
random.innerHTML = "Random";
body.appendChild(random);
random.classList.add("random");

random.addEventListener("click", () => {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8);

  let colors = "#";
  colors += Math.random().toString(16).slice(2, 8);

  body.style.background =
    "linear-gradient(to right," + color + "," + colors + ")";

    css.textContent = body.style.background + ";";
});

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
