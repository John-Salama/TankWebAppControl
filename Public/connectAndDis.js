const connectBtn = document.querySelector('#connectBtn');
const disconnectBtn = document.querySelector('#disconnectBtn');

const port_list = document.querySelector('#port-list');
const passwordElem = document.querySelector('#paswordInput');
connectBtn.addEventListener('click', async () => {
  const port = port_list.value;
  connectPort(port);
});
disconnectBtn.addEventListener('click', () => {
  disconnect();
});
