// const outerRing = document.querySelector(".outer-ring");
// document.addEventListener("scroll", function () {
//   console.log(outerRing);
//   outerRing.setAttribute("transform", "rotate(180 290 290)");
// });

// var outerRing = document.getElementById("outer-ring");
// var middleRing = document.getElementById("middle-ring");
// var innerRing = document.getElementById("inner-ring");
// var inner = document.getElementById("inner");

// window.addEventListener("scroll", function () {
//   outerRing.style.transform = "rotate(" + window.pageYOffset + "deg)";
//   middleRing.style.transform = "rotate(-" + window.pageYOffset /  + "deg)";
//   innerRing.style.transform = "rotate(" + window.pageYOffset + "deg)";
//   inner.style.transform = "rotate(" + window.pageYOffset + "deg)";
// });

window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  const outerRing = document.getElementById("outer-ring");
  outerRing.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
  const middleRing = document.getElementById("middle-ring");
  middleRing.setAttribute(
    "transform",
    "rotate(" + -window.pageYOffset / 2 + " 290 290) translate(45 45)"
  );
  const innerRing = document.getElementById("inner-ring");
  innerRing.setAttribute(
    "transform",
    "translate(34 34) rotate(" + window.pageYOffset / 2 + " 117 117)"
  );
}
