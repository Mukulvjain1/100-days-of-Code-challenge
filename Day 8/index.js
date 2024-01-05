// document.addEventListener("DOMContentLoaded", function () {
//   const hamburgerIcon = document.getElementById("hamburger-icon");
//   const closeIcon = document.getElementById("close-icon");
//   const sidebar = document.getElementById("sidebar");

//   hamburgerIcon.addEventListener("click", function () {
//     sidebar.classList.toggle("show");
//     hamburgerIcon.classList.toggle("show");
//     closeIcon.classList.toggle("show");
//   });

//   closeIcon.addEventListener("click", function () {
//     sidebar.classList.remove("show");
//     hamburgerIcon.classList.remove("show");
//     closeIcon.classList.remove("show");
//   });
// });
function openSlidingBar() {
  sidebar.classList.toggle("show");
  hamburgerIcon.classList.toggle("show");
  closeIcon.classList.toggle("show");
}

function closeSlidingBar() {
  sidebar.classList.remove("show");
  hamburgerIcon.classList.remove("show");
  closeIcon.classList.remove("show");
}
