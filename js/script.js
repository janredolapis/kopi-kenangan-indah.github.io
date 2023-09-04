// Toggle class active (tadinya ga ada jadi ada)
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger manu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar atau klik diluar menu hamburger untuk menghilangkan menu hamburger
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
