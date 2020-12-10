const outerRing = document.getElementById("outer-ring");
const middleRing = document.getElementById("middle-ring");
const innerRing = document.getElementById("inner-ring");

function scrollRotate() {
  const amountToRotate = window.pageYOffset / 4;
  outerRing.setAttribute("transform", `rotate(${amountToRotate} 290 290)`);

  middleRing.setAttribute(
    "transform",
    `rotate( ${-amountToRotate} 290 290) translate (45 45)`
  );

  innerRing.setAttribute(
    "transform",
    `translate (34 34) rotate(${amountToRotate} 117 117)`
  );
  requestAnimationFrame(scrollRotate);
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

const circleObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      requestAnimationFrame(scrollRotate);
    } else {
      cancelAnimationFrame(scrollRotate);
    }
  });
});

const magCirTarget = document.querySelector(".mag-cir");
circleObserver.observe(magCirTarget);

const tarotSection = document.querySelector(".tarot-section");
observer.observe(tarotSection);
