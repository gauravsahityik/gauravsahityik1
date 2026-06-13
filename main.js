
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ===============================
// Back To Top Button
// ===============================
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ===============================
// Dark Mode
// ===============================
const darkBtn = document.getElementById("darkMode");

if (darkBtn) {
    darkBtn.onclick = function () {
        document.body.classList.toggle("dark-theme");
    };
}

// ===============================
// Image Fade Animation
// ===============================
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            card.classList.add("show");
        }
    });
});
