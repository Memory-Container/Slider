const container = document.querySelector(".slider");
const indicator = document.querySelectorAll(".indicator");
let current = 0;

let scrollPercentage = 0
container.addEventListener('scroll', () => {
  const scrollLeft = container.scrollLeft
  const width = 2402;
  scrollPercentage = (scrollLeft / width) * 100;
});
function forward(x = 1) {
  if (scrollPercentage >= 90) {
    container.scrollBy(-5000, 0);
    indicator[0].classList.add("active")
    indicator[5].classList.remove("active")
    current = 0;
    return 0;
  }
  indicator[current + 1].classList.add("active")
  indicator[current].classList.remove("active")
  console.log(current);
  current = current < 6 ? current + 1 : 0;
  container.scrollBy(100 * x, 0);
}
function backward(x = 1) {
  if (scrollPercentage <= 10) {
    container.scrollBy(5000, 0);
    indicator[5].classList.add("active")
    indicator[0].classList.remove("active")
    current = 5;
    return 0;
  }
  indicator[current - 1].classList.add("active")
  indicator[current].classList.remove("active")
  current = current < 0 ? current - 1 : 5;
  container.scrollBy(-100 * x, 0);
}
function scroll(x) {
  if (x > current) {
    forward(x - current);
  } else {
    backward(current - x)
  }
}