//This is not my code
//Developer: Anamaira Miehs
//link: https://codepen.io/anamariamiehs/pen/rYwbgG

function Carousel() {
  var self = this;

  self.items = document.querySelectorAll(".carousel .item");
  self.len = this.items.length;
  self.prev = document.querySelector(".carousel .prev");
  self.next = document.querySelector(".carousel .next");

  self.init = (function () {
    self.items[0].classList.add("active");
  })();

  self.moveTo = function (dir) {
    for (var i = 0; i < self.len; i++) {
      if (self.items[i].classList.contains("active")) {
        self.items[i].classList.remove("active");
        self.items[self.clampLoop(i + dir, self.len - 1)].classList.add(
          "active"
        );
        break;
      }
    }
  };

  self.clampLoop = function (value, max) {
    if (value < 0) return max;
    if (value > max) return 0;
    return value;
  };

  self.prev.addEventListener("click", function () {
    self.moveTo(-1);
  });
  self.next.addEventListener("click", function () {
    self.moveTo(1);
  });
}

var carousel = new Carousel();

//my code to link the buttons

//website links
const project1Btn = document.getElementById("project1Website");
const project2Btn = document.getElementById("project2Website");
const project3Btn = document.getElementById("project3Website");

project1Btn.addEventListener("click", function () {
  window.open("https://regni.github.io/rock-paper-scissors/");
});

project2Btn.addEventListener("click", function () {
  window.open("https://regni.github.io/random_number/");
});
project3Btn.addEventListener("click", function () {
  window.open("https://regni.github.io/affixes/");
});

//github repo links
const project1Git = document.getElementById("project1Github");
const project2Git = document.getElementById("project2Github");
const project3Git = document.getElementById("project3Github");

project1Git.addEventListener("click", function () {
  window.open("https://github.com/Regni/rock-paper-scissors");
});

project2Git.addEventListener("click", function () {
  window.open("https://github.com/Regni/random_number");
});

project3Git.addEventListener("click", function () {
  window.open("https://github.com/Regni/affixes");
});
