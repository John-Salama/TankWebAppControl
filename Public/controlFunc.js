/******************************************************************************/
/* Control Functions */
/******************************************************************************/

// Tank On
const tankOnFunc = () => {
  sendDataToPort('#TO;');
};

// Tank Off
const tankOffFunc = () => {
  sendDataToPort('#TC;');
};

// Forward
const forwardFunc = () => {
  sendDataToPort('#TF;');
};

// Backward
const backwardFunc = () => {
  sendDataToPort('#TB;');
};

// Left
const leftFunc = () => {
  sendDataToPort('#TL;');
};

// Right
const rightFunc = () => {
  sendDataToPort('#TR;');
};

// Stop Tank
const stopTankFunc = () => {
  sendDataToPort('#TS;');
};

// Stop ARM
const stopArmFunc = () => {
  sendDataToPort('#AS;');
};

// Rotate Left
const rotateLeftFunc = () => {
  sendDataToPort('#RL;');
};

// Rotate Right
const rotateRightFunc = () => {
  sendDataToPort('#RR;');
};

// Flipper Up
const flipperUpFunc = () => {
  sendDataToPort('#FU;');
};

// Flipper Down
const flipperDownFunc = () => {
  sendDataToPort('#FD;');
};

// Mark Mine
const markMineMineFunc = () => {
  sendDataToPort('#MM;');
};

// Base Left
const baseLeftFunc = () => {
  sendDataToPort('#BL;');
};

// Base Right
const baseRightFunc = () => {
  sendDataToPort('#BR;');
};

// Elbow Up
const ElbowUpFunc = () => {
  sendDataToPort('#EU;');
};

// Elbow Down
const ElbowDownFunc = () => {
  sendDataToPort('#ED;');
};

// Wrist Up
const wristUpFunc = () => {
  sendDataToPort('#WU;');
};

// Wrist Down
const wristDownFunc = () => {
  sendDataToPort('#WD;');
};

// Gripper Open
const gripperOpenFunc = () => {
  sendDataToPort('#GO;');
};

// Gripper Close
const gripperCloseFunc = () => {
  sendDataToPort('#GC;');
};
