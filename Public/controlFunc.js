/******************************************************************************/
/* Control Functions */
/******************************************************************************/

// Tank On
const tankOnFunc = () => {
  sendDataToPort('#A;');
};

// Tank Off
const tankOffFunc = () => {
  sendDataToPort('#B;');
};

// Tank Forward
const forwardFunc = () => {
  sendDataToPort('#C;');
};

// Tank Backward
const backwardFunc = () => {
  sendDataToPort('#D;');
};

// Tank Left
const leftFunc = () => {
  sendDataToPort('#E;');
};

// Tank Right
const rightFunc = () => {
  sendDataToPort('#F;');
};

// Tank Rotate Left
const rotateLeftFunc = () => {
  sendDataToPort('#G;');
};

// Tank Rotate Right
const rotateRightFunc = () => {
  sendDataToPort('#H;');
};

// Tank Flipper Up
const flipperUpFunc = () => {
  sendDataToPort('#I;');
};

// Tank Flipper Down
const flipperDownFunc = () => {
  sendDataToPort('#J;');
};

// Tank Stop
const stopTankFunc = () => {
  sendDataToPort('#K;');
};

// Arm Base Left
const baseLeftFunc = () => {
  sendDataToPort('#L;');
};

// Arm Base Right
const baseRightFunc = () => {
  sendDataToPort('#M;');
};

// Arm Elbow Up
const ElbowUpFunc = () => {
  sendDataToPort('#N;');
};

// Arm Elbow Down
const ElbowDownFunc = () => {
  sendDataToPort('#O;');
};

// Arm Wrist Up
const wristUpFunc = () => {
  sendDataToPort('#P;');
};

// Arm Wrist Down
const wristDownFunc = () => {
  sendDataToPort('#Q;');
};

// Arm Gripper Open
const gripperOpenFunc = () => {
  sendDataToPort('#R;');
};

// Arm Gripper Close
const gripperCloseFunc = () => {
  sendDataToPort('#S;');
};

// Arm Mark Mine
const markMineMineFunc = () => {
  sendDataToPort('#T;');
};

// Arm Stop
const stopArmFunc = () => {
  sendDataToPort('#U;');
};
