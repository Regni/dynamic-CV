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
