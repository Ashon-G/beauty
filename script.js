const sources = [
  'video1.mp4',
  'video2.mp4',
  'video3.mp4',
  'video4.mp4',
  'video5.mp4'
];

const videos = [
  document.getElementById('bgVideo1'),
  document.getElementById('bgVideo2')
];

let current = 0;
let sourceIndex = 0;

function showNext() {
  const next = (current + 1) % 2;
  const video = videos[next];
  video.src = sources[sourceIndex];
  video.play();
  video.classList.add('visible');
  videos[current].classList.remove('visible');
  current = next;
  sourceIndex = (sourceIndex + 1) % sources.length;
}

// initialize first video
videos[0].src = sources[0];
videos[0].classList.add('visible');
videos[0].play();
sourceIndex = 1;

setInterval(showNext, 3000);
