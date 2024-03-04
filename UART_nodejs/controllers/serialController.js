const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

/* ******************************************** */
/* configs */
/* ******************************************** */
const config = {
  path: 'COM2',
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  autoOpen: false,
  flowControl: false,
};

/* ******************************************** */
/* Open Port */
/* ******************************************** */
const openPort = (PortObj) => {
  PortObj.open((err) => {
    if (err) {
      return { status: 'Failed', message: `Error on Open : ${err.message}` };
    }
  });
  return { status: 'Success', message: `Port Opened Successfully..`, PortObj };
};

/* ******************************************** */
/* External Functions */
/* ******************************************** */
// Open Port
exports.Open = (port) => {
  config.path = port;
  port = new SerialPort(config);
  const status = openPort(port);
  return status;
};
// Close Port
exports.Close = (PortObj) => {
  const status = closePort(PortObj);
  return status;
};

/* ******************************************** */
/* Close Port */
/* ******************************************** */
const closePort = (PortObj) => {
  PortObj.close((err) => {
    if (err) {
      return {
        status: 'Failed',
        message: `Disconnect Port Failed ${err.message}`,
      };
    }
  });
  return { status: 'Success', message: `Port Disconnected Successfully..` };
};
/* ******************************************** */
/* Send Data */
/* ******************************************** */
exports.sendData = (data, portObj) => {
  portObj.write(data, (err) => {
    if (err) {
      return console.log(`Error on Write: `, err.message);
    }
  });
  return { status: 'Success', message: `Message Written Successfully..` };
};

/* ******************************************** */
/* Read Data */
/* ******************************************** */

// '*' is the delimiter change it to whatever you want
const parser = new ReadlineParser({ delimiter: '*' });
exports.readData = (portObj, callBack) => {
  portObj.pipe(parser);
  parser.on('data', (line) => {
    callBack(line);
  });
};
