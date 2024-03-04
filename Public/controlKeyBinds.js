// key binds

document.addEventListener("keydown", function (event) {
  if (event.repeat) return;
  switch (event.key) {
    case "z":
      tankOnFunc();
      simulateHover(tankOn);
      break;
    case "c":
      tankOffFunc();
      simulateHover(tankOff);
      break;
    case "w":
      forwardFunc();
      simulateHover(forwardBtn);
      break;
    case "s":
      backwardFunc();
      simulateHover(backwardBtn);
      break;
    case "x":
      stopFunc();
      simulateHover(stopBtn);
      break;
    case "a":
      leftFunc();
      simulateHover(leftBtn);
      break;
    case "d":
      rightFunc();
      simulateHover(rightBtn);
      break;
    case "q":
      rotateLeftFunc();
      simulateHover(rotateLeftBtn);
      break;
    case "e":
      rotateRightFunc();
      simulateHover(rotateRightBtn);
      break;
    case "r":
      flipperUpFunc();
      simulateHover(flipperUpBtn);
      break;
    case "f":
      flipperDownFunc();
      simulateHover(flipperDownBtn);
      break;
    case "p":
      markMineMineFunc();
      simulateHover(markMineMineBtn);
      break;
    case "u":
      baseLeftFunc();
      simulateHover(baseLeftBtn);
      break;
    case "j":
      baseRightFunc();
      simulateHover(baseRightBtn);
      break;
    case "i":
      ElbowUpFunc();
      simulateHover(ElbowUpBtn);
      break;
    case "o":
      ElbowDownFunc();
      simulateHover(ElbowDownBtn);
      break;
    case "k":
      wristUpFunc();
      simulateHover(wristUpBtn);
      break;
    case "l":
      wristDownFunc();
      simulateHover(wristDownBtn);
      break;
    case "n":
      gripperOpenFunc();
      simulateHover(gripperOpenBtn);
      break;
    case "m":
      gripperCloseFunc();
      simulateHover(gripperCloseBtn);
      break;
  }
});

function simulateHover(tagElement) {
  tagElement.style.backgroundColor = "#9e9a75";
  setTimeout(() => {
    resetButtonStyles();
  }, 300);
}
function resetButtonStyles() {
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "#ffffff";
  }
}
