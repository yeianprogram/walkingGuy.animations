const dumpling = document.createElement("img");
dumpling.width = 50;
dumpling.height = 50;
dumpling.frames = {
    "frame1" : "frames/1.jpeg",
    "frame2" : "frames/2.jpeg",
    "frame3" : "frames/3.jpeg"
};
dumpling.src = dumpling.frames.frame1;
let frame = 1;
let repeat = false;
function animate() {
  if (frame === 1) {
    repeat = false;
    dumpling.src = dumpling.frames.frame2;
    let frame = 2;
  } else if (frame === 2) {
    if (repeat == true) {
      dumpling.src = dumpling.frames.frame1;
      let frame = 1;
    } else if (repeat === false) {
      dumpling.src = dumpling.frames.frame3;
      let frame = 3;
    }
  } else if (frame === 3) {
    repeat = true;
    dumpling.src = dumpling.frames.frame2;
    frame = 2;
  }
}
setInterval(dumpling, 50);
