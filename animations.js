const outerRing = document.getElementById("outer-ring");
const middleRing = document.getElementById("middle-ring");
const innerRing = document.getElementById("inner-ring");

window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  const ammountToRotate = window.pageYOffset / 4;
  outerRing.setAttribute("transform", `rotate(${ammountToRotate} 290 290)`);

  middleRing.setAttribute(
    "transform",
    `rotate( ${-ammountToRotate} 290 290) translate (45 45)`
  );

  innerRing.setAttribute(
    "transform",
    `translate (34 34) rotate(${ammountToRotate} 117 117)`
  );
}

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.remove("inactive");
    } else {
      entry.target.classList.add("inactive");
    }
  });
});

const tarotSection = document.querySelector(".tarot-section");
observer.observe(tarotSection);
