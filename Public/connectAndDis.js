const connectBtn = document.querySelector('#connectBtn');
const disconnectBtn = document.querySelector('#disconnectBtn');
const videoFrame = document.querySelector('.live-video');
const container = document.querySelector('.video-container');

const videoSrc =
  'https://www.youtube.com/embed/MtN1YnoL46Q?si=HgGGWkikSHOk3JHN';

const port_list = document.querySelector('#port-list');
connectBtn.addEventListener('click', async () => {
  const port = port_list.value;
  connectPort(port);
});
disconnectBtn.addEventListener('click', () => {
  disconnect();
});

if (!videoSrc.trim()) {
  container.innerHTML = '<p>Please connect to MFR network.</p>';
  container.style.border = '5px solid red';
}
