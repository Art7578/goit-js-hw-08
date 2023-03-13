import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null && savedTime !== 'undefined' && savedTime !== '') {
  player.setCurrentTime(savedTime);
} else {
  player.setCurrentTime(0);
}
