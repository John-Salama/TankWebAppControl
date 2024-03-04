const tankOn = document.getElementById("tankOn");
const tankOff = document.getElementById("tankOff");

const forwardBtn = document.getElementById("forwardBtn");
const backwardBtn = document.getElementById("backwardBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const stopBtn = document.getElementById("stopBtn");

const rotateLeftBtn = document.getElementById("rotateLeftBtn");
const rotateRightBtn = document.getElementById("rotateRightBtn");

const flipperUpBtn = document.getElementById("flipperUpBtn");
const flipperDownBtn = document.getElementById("flipperDownBtn");

const markMineMineBtn = document.getElementById("markMineBtn");

const baseLeftBtn = document.getElementById("baseLeftBtn");
const baseRightBtn = document.getElementById("baseRightBtn");
const ElbowUpBtn = document.getElementById("ElbowUpBtn");
const ElbowDownBtn = document.getElementById("ElbowDownBtn");
const wristUpBtn = document.getElementById("wristUpBtn");
const wristDownBtn = document.getElementById("wristDownBtn");
const armStopBtn = document.getElementById("armStopBtn");

const gripperOpenBtn = document.getElementById("gripperOpen");
const gripperCloseBtn = document.getElementById("gripperClose");

tankOn.addEventListener("click", () => {
  tankOnFunc();
});

tankOff.addEventListener("click", () => {
  tankOffFunc();
});

forwardBtn.addEventListener("click", () => {
  forwardFunc();
});

backwardBtn.addEventListener("click", () => {
  backwardFunc();
});

leftBtn.addEventListener("click", () => {
  leftFunc();
});

rightBtn.addEventListener("click", () => {
  rightFunc();
});

stopBtn.addEventListener("click", () => {
  stopFunc();
});

rotateLeftBtn.addEventListener("click", () => {
  rotateLeftFunc();
});

rotateRightBtn.addEventListener("click", () => {
  rotateRightFunc();
});

flipperUpBtn.addEventListener("click", () => {
  flipperUpFunc();
});

flipperDownBtn.addEventListener("click", () => {
  flipperDownFunc();
});

markMineMineBtn.addEventListener("click", () => {
  markMineMineFunc();
});

baseLeftBtn.addEventListener("click", () => {
  baseLeftFunc();
});

baseRightBtn.addEventListener("click", () => {
  baseRightFunc();
});

ElbowUpBtn.addEventListener("click", () => {
  ElbowUpFunc();
});

ElbowDownBtn.addEventListener("click", () => {
  ElbowDownFunc();
});

wristUpBtn.addEventListener("click", () => {
  wristUpFunc();
});

wristDownBtn.addEventListener("click", () => {
  wristDownFunc();
});

gripperOpenBtn.addEventListener("click", () => {
  gripperOpenFunc();
});

gripperCloseBtn.addEventListener("click", () => {
  gripperCloseFunc();
});
