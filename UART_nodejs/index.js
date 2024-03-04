const express = require('express');
const app = express();
const cors = require('cors');
const serialController = require('./controllers/serialController');
let localBuffer = 'Empty';
let portObjTemp = null;
// save data to local buffer
const saveData = async (data) => {
  localBuffer = data;
};

const readingPort = () => {
  if (portObjTemp) {
    serialController.readData(portObjTemp, saveData);
  }
};
/* Turn on reading */
readingPort();
//////////////////////////////////
// Server
app.use(cors());
app.use(express.json({ limit: '50kb' }));
/////////////////////////
// init
app.post('/connect', async (req, res) => {
  /* Writing For Now */
  const port = req.body.port;
  console.log(port);
  const { status, message, PortObj: portObj } = serialController.Open(port);
  /* save object to global variable */
  portObjTemp = portObj;
  /* Turn on reading */
  serialController.readData(portObjTemp, saveData);
  if (status === 'Success') {
    res.status(200).json({
      status,
      message,
    });
  } else {
    res.status(400).json({
      status,
      message,
    });
  }
});
/////////////////////////
// POST Data
app.post('/sendData', async (req, res) => {
  const data = req.body.data;
  const { status, message } = serialController.sendData(data, portObjTemp);

  if (status === 'Success') {
    res.status(200).json({
      status,
      message,
    });
  } else {
    res.status(400).json({
      status,
      message,
    });
  }
});
/////////////////////////
// GET Reading
app.get('/ReadData', async (req, res) => {
  console.log(localBuffer);
  res.status(200).json({
    data: localBuffer,
  });
});

app.get('/disconnect', (req, res) => {
  const { status, message } = serialController.Close(portObjTemp);
  if (status === 'Success') {
    res.status(200).json({
      status,
      message,
    });
  } else {
    res.status(400).json({
      status,
      message,
    });
  }
});

/////////////////////////
const port = 8000;
const server = app.listen(port, () => {
  console.log(`works on ${port} ...`);
});
