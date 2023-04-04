const overlay = document.querySelector(".overlay");
const links = document.querySelector(".links");
const alink = links.querySelectorAll("a");
const ham = document.querySelector(".ham");
const close = document.querySelector(".close");
const back = document.querySelector(".back");
const front = document.querySelector(".front");
const text = document.querySelectorAll(".text");
const heroImg = document.querySelector(".heroImg");

const toggle = () => {
  overlay.classList.toggle("hidden");
  close.classList.toggle("hidden");
  links.classList.toggle("hidden");
  ham.classList.toggle("hidden");
};

ham.addEventListener("click", toggle);

close.addEventListener("click", toggle);

overlay.addEventListener("click", toggle);

alink.forEach((al) => {
  al.addEventListener("click", toggle);
});

let count = 1;

front.addEventListener("click", () => {
  text.forEach((txt) => txt.classList.add("hidden"));
  text[count].classList.remove("hidden");
  heroImg.style.backgroundImage = `url("images/desktop-image-hero-${
    count + 1
  }.jpg")`;

  if (screen.availWidth <= 375) {
    heroImg.style.backgroundImage = `url("images/mobile-image-hero-${
      count + 1
    }.jpg")`;
  }

  count++;

  if (count === 3) count = 0;
});

back.addEventListener("click", () => {
  if (count < 1) count = 3;
  count--;
  text.forEach((txt) => txt.classList.add("hidden"));
  text[count].classList.remove("hidden");
  heroImg.style.backgroundImage = `url("images/desktop-image-hero-${
    count + 1
  }.jpg")`;

  if (screen.availWidth <= 375) {
    heroImg.style.backgroundImage = `url("images/mobile-image-hero-${
      count + 1
    }.jpg")`;
  }
});

console.log(screen);
