// key binds

document.addEventListener('keydown', function (event) {
  if (event.repeat) return;
  switch (event.key) {
    case 'z':
      tankOnFunc();
      simulateHoverAuto(tankOn);
      break;
    case 'c':
      tankOffFunc();
      simulateHoverAuto(tankOff);
      break;
    case 'w':
      forwardFunc();
      simulateHover(forwardBtn);
      break;
    case 's':
      backwardFunc();
      simulateHover(backwardBtn);
      break;
    case 'x':
      stopTankFunc();
      simulateHoverAuto(stopBtn);
      break;
    case 'a':
      leftFunc();
      simulateHover(leftBtn);
      break;
    case 'd':
      rightFunc();
      simulateHover(rightBtn);
      break;
    case 'q':
      rotateLeftFunc();
      simulateHover(rotateLeftBtn);
      break;
    case 'e':
      rotateRightFunc();
      simulateHover(rotateRightBtn);
      break;
    case 'r':
      flipperUpFunc();
      simulateHover(flipperUpBtn);
      break;
    case 'f':
      flipperDownFunc();
      simulateHover(flipperDownBtn);
      break;
    case 'p':
      markMineMineFunc();
      simulateHoverAuto(markMineMineBtn);
      break;
    case 'u':
      baseLeftFunc();
      simulateHover(baseLeftBtn);
      break;
    case 'j':
      baseRightFunc();
      simulateHover(baseRightBtn);
      break;
    case 'i':
      ElbowUpFunc();
      simulateHover(ElbowUpBtn);
      break;
    case 'o':
      ElbowDownFunc();
      simulateHover(ElbowDownBtn);
      break;
    case 'k':
      wristUpFunc();
      simulateHover(wristUpBtn);
      break;
    case 'l':
      wristDownFunc();
      simulateHover(wristDownBtn);
      break;
    case 'n':
      gripperOpenFunc();
      simulateHover(gripperOpenBtn);
      break;
    case 'm':
      gripperCloseFunc();
      simulateHover(gripperCloseBtn);
      break;
  }
});

//send stop signal when key is released
document.addEventListener('keyup', function (event) {
  switch (event.key) {
    case 'w':
      stopTankFunc();
      removeHover(forwardBtn);
      break;
    case 's':
      stopTankFunc();
      removeHover(backwardBtn);
      break;
    case 'a':
      stopTankFunc();
      removeHover(leftBtn);
      break;
    case 'd':
      stopTankFunc();
      removeHover(rightBtn);
      break;
    case 'q':
      stopTankFunc();
      removeHover(rotateLeftBtn);
      break;
    case 'e':
      stopTankFunc();
      removeHover(rotateRightBtn);
      break;
    case 'r':
      stopTankFunc();
      removeHover(flipperUpBtn);
      break;
    case 'f':
      stopTankFunc();
      removeHover(flipperDownBtn);
      break;
  }
});

document.addEventListener('keyup', function (event) {
  switch (event.key) {
    case 'u':
      stopArmFunc();
      removeHover(baseLeftBtn);
      break;
    case 'j':
      stopArmFunc();
      removeHover(baseRightBtn);
      break;
    case 'i':
      stopArmFunc();
      removeHover(ElbowUpBtn);
      break;
    case 'o':
      stopArmFunc();
      removeHover(ElbowDownBtn);
      break;
    case 'k':
      stopArmFunc();
      removeHover(wristUpBtn);
      break;
    case 'l':
      stopArmFunc();
      removeHover(wristDownBtn);
      break;
    case 'n':
      stopArmFunc();
      removeHover(gripperOpenBtn);
      break;
    case 'm':
      stopArmFunc();
      removeHover(gripperCloseBtn);
      break;
  }
});

function simulateHover(tagElement) {
  tagElement.style.backgroundColor = '#9e9a75';
}

function simulateHoverAuto(tagElement) {
  tagElement.style.backgroundColor = '#9e9a75';
  setTimeout(() => {
    tagElement.style.backgroundColor = '#ffffff';
  }, 300);
}

function removeHover(tagElement) {
  tagElement.style.backgroundColor = '#ffffff';
}
