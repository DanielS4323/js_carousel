const buttons = document.querySelectorAll("[data-carousel-button]");
const btnNext = document.querySelector('[data-carousel-button="next"]');
const btnPrev = document.querySelector('[data-carousel-button="prev"]');

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;

    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    btnNext.click();
    
  } else if (e.key === "ArrowLeft") {
    btnPrev.click();
  }
});
