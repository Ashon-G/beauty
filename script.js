const videos = [
  'video1.mp4',
  'video2.mp4',
  'video3.mp4',
  'video4.mp4',
  'video5.mp4'
];

let index = 0;
const videoEl = document.getElementById('background-video');

function playNext() {
  videoEl.src = videos[index];
  videoEl.play();
  index = (index + 1) % videos.length;
}

playNext();
setInterval(playNext, 3000);
