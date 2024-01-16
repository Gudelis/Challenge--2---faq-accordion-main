const faqQuestions = document.querySelectorAll("h4");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    faqQuestions.forEach((q) => {
      q.nextElementSibling.style.display = "none";
      q.firstElementChild.src = "./assets/images/icon-minus.svg";
    });

    if (question.nextElementSibling.style.display === "none") {
      question.nextElementSibling.style.display = "block";
      question.firstElementChild.src = "./assets/images/icon-plus.svg";
    } else {
      question.nextElementSibling.style.display = "none";
      question.firstElementChild.src = "./assets/images/icon-minus.svg";
    }
  });
});

let currentIndex = 0;

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 38) {
    hideCurrentAndMove(-1);
  } else if (e.keyCode === 40) {
    hideCurrentAndMove(1);
  }
});

const hideCurrentAndMove = (direction) => {
  faqQuestions[currentIndex].nextElementSibling.style.display = "none";
  faqQuestions[currentIndex].firstElementChild.src =
    "./assets/images/icon-minus.svg";

  currentIndex =
    (currentIndex + direction + faqQuestions.length) % faqQuestions.length;

  faqQuestions[currentIndex].nextElementSibling.style.display = "block";
  faqQuestions[currentIndex].firstElementChild.src =
    "./assets/images/icon-plus.svg";
};
