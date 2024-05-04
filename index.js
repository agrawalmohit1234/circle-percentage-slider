const slider = document.getElementById("slider");
const circle = document.getElementById("circle");

slider.addEventListener("input", (e) => {
  circle.style = `--percentage: ${e.target.value}%`;
});
