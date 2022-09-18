//* next and perv button
let pervBtn = document.getElementById("perv");
let nextBtn = document.getElementById("next");
let numImg = document.getElementById("numImg");
pervBtn.addEventListener("click", function () {
  pervPic(1);
});
nextBtn.addEventListener("click", function () {
  nextPic(1);
});
//* bullets
const bullet1 = document.getElementById("bullet1");
const bullet2 = document.getElementById("bullet2");
const bullet3 = document.getElementById("bullet3");
const imagSrc = [];
imagSrc[0] = "./benjamin-davies-JrZ1yE1PjQ0-unsplash.jpg";
imagSrc[1] = "./frank-mckenna-OD9EOzfSOh0-unsplash.jpg";
imagSrc[2] = "./jae-bano-Xbf_4e7YDII-unsplash.jpg";
var i = 0;
function nextPic(num) {
  i += num;
  if (i === imagSrc.length) {
    i = 0;
  }
  setImageAndAnimatIt(1);
}
function pervPic(num) {
  i -= num;
  if (i === -1) {
    i = 2;
  }
  setImageAndAnimatIt(-1);
}
let setImageAndAnimatIt = (n) => {
  if (n === 1) {
    document.getElementById("image").style.animation = "moveN 1.01s";
    setTimeout(function () {
      document.getElementById("image").src = imagSrc[i];
      document.getElementById("image").style.animation = "";
      numImg.innerHTML = i;
      setColor();
    }, 1000);
  } else if (n === -1) {
    document.getElementById("image").style.animation = "moveB 1.01s";
    setTimeout(function () {
      document.getElementById("image").src = imagSrc[i];
      document.getElementById("image").style.animation = "";
      numImg.innerHTML = i;
      setColor();
    }, 1000);
  }
};
//* it set color of bullets
let setColor = () => {
  if (i === 0) {
    bullet1.style.backgroundColor = "rgba(156, 156, 156, 0.822)";
    bullet2.style.backgroundColor = "rgba(255, 255, 255, 0.719)";
    bullet3.style.backgroundColor = "rgba(255, 255, 255, 0.719)";
  } else if (i === 1) {
    bullet1.style.backgroundColor = "rgba(255, 255, 255, 0.719)";
    bullet2.style.backgroundColor = "rgba(156, 156, 156, 0.822)";
    bullet3.style.backgroundColor = "rgba(255, 255, 255, 0.719)";
  } else {
    bullet1.style.backgroundColor = "rgba(255, 255, 255, 0.719)";
    bullet2.style.backgroundColor = "rgba(255, 255, 255, 0.719)";
    bullet3.style.backgroundColor = "rgba(156, 156, 156, 0.822)";
  }
};
