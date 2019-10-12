let socket = io();

let glob = {};
let colorQueue = [];

let transitionGoing = false;

const confettiSettings = {
  target: "confetti-holder",
  max: "200",
  size: "2",
  animate: true,
  props: ["circle", "square", "triangle", "line"],
  colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
  clock: "35",
  rotate: false
};
const confetti = new ConfettiGenerator(confettiSettings);

$(document).ready(() => {
  socket.on("message", message => {
    $(".number").text("You did it!");
    document.body.style.backgroundColor = "hotpink";
    confetti.render();
  });
});
