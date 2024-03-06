// Define motor pins
#define MOTOR_A_EN 3
#define MOTOR_A_IN1 4
#define MOTOR_A_IN2 5
#define MOTOR_B_EN 6
#define MOTOR_B_IN1 7
#define MOTOR_B_IN2 8

void setup() {
  // Set motor pins as outputs
  pinMode(MOTOR_A_EN, OUTPUT);
  pinMode(MOTOR_A_IN1, OUTPUT);
  pinMode(MOTOR_A_IN2, OUTPUT);
  pinMode(MOTOR_B_EN, OUTPUT);
  pinMode(MOTOR_B_IN1, OUTPUT);
  pinMode(MOTOR_B_IN2, OUTPUT);
}

void loop() {
  // Move forward
  moveForward();
  delay(2000);
  
  // Move backward
  moveBackward();
  delay(2000);
  
  // Turn left
  turnLeft();
  delay(2000);
  
  // Turn right
  turnRight();
  delay(2000);
  
  // Stop
  stopMotors();
  delay(2000);
  
  // Spin clockwise
  spinClockwise();
  delay(2000);
  
  // Spin anti-clockwise
  spinAntiClockwise();
  delay(2000);
}

// Function to move forward
void moveForward() {
  digitalWrite(MOTOR_A_IN1, HIGH);
  digitalWrite(MOTOR_A_IN2, LOW);
  digitalWrite(MOTOR_B_IN1, HIGH);
  digitalWrite(MOTOR_B_IN2, LOW);
  analogWrite(MOTOR_A_EN, 255);
  analogWrite(MOTOR_B_EN, 255);
}

// Function to move backward
void moveBackward() {
  digitalWrite(MOTOR_A_IN1, LOW);
  digitalWrite(MOTOR_A_IN2, HIGH);
  digitalWrite(MOTOR_B_IN1, LOW);
  digitalWrite(MOTOR_B_IN2, HIGH);
  analogWrite(MOTOR_A_EN, 255);
  analogWrite(MOTOR_B_EN, 255);
}

// Function to turn left
void turnLeft() {
  digitalWrite(MOTOR_A_IN1, LOW);
  digitalWrite(MOTOR_A_IN2, HIGH);
  digitalWrite(MOTOR_B_IN1, HIGH);
  digitalWrite(MOTOR_B_IN2, LOW);
  analogWrite(MOTOR_A_EN, 255);
  analogWrite(MOTOR_B_EN, 255);
}

// Function to turn right
void turnRight() {
  digitalWrite(MOTOR_A_IN1, HIGH);
  digitalWrite(MOTOR_A_IN2, LOW);
  digitalWrite(MOTOR_B_IN1, LOW);
  digitalWrite(MOTOR_B_IN2, HIGH);
  analogWrite(MOTOR_A_EN, 255);
  analogWrite(MOTOR_B_EN, 255);
}

// Function to stop
void stopMotors() {
  digitalWrite(MOTOR_A_EN, LOW);
  digitalWrite(MOTOR_B_EN, LOW);
}

// Function to spin clockwise
void spinClockwise() {
  digitalWrite(MOTOR_A_IN1, HIGH);
  digitalWrite(MOTOR_A_IN2, LOW);
  digitalWrite(MOTOR_B_IN1, LOW);
  digitalWrite(MOTOR_B_IN2, HIGH);
  analogWrite(MOTOR_A_EN, 255);
  analogWrite(MOTOR_B_EN, 255);
}

// Function to spin anti-clockwise
void spinAntiClockwise() {
  digitalWrite(MOTOR_A_IN1, LOW);
  digitalWrite(MOTOR_A_IN2, HIGH);
  digitalWrite(MOTOR_B_IN1, HIGH);
  digitalWrite(MOTOR_B_IN2, LOW);
  analogWrite(MOTOR_A_EN, 255);
  analogWrite(MOTOR_B_EN, 255);
}
//**********************************************************************************
#include <CytronMotorDriver.h>

// Define motor objects
CytronMD motor1;
CytronMD motor2;

void setup() {
  // Begin serial communication
  Serial.begin(9600);
  
  // Initialize motor objects with respective pins
  motor1 = CytronMD(3, 4, 5); // Motor A pins: ENA, IN1, IN2
  motor2 = CytronMD(6, 7, 8); // Motor B pins: ENB, IN3, IN4
  
  // Set motor maximum speed (0-255)
  motor1.setMaxSpeed(255);
  motor2.setMaxSpeed(255);
}

void loop() {
  // Move forward at 50% speed
  moveForward(127);
  delay(2000);
  
  // Move backward at 75% speed
  moveBackward(191);
  delay(2000);
  
  // Turn left at full speed
  turnLeft(255);
  delay(2000);
  
  // Turn right at half speed
  turnRight(127);
  delay(2000);
  
  // Stop
  stopMotors();
  delay(2000);
  
  // Spin clockwise at quarter speed
  spinClockwise(64);
  delay(2000);
  
  // Spin anti-clockwise at three-quarter speed
  spinAntiClockwise(191);
  delay(2000);
}

// Function to move forward with speed control
void moveForward(uint8_t speed) {
  motor1.forward(speed);
  motor2.forward(speed);
}

// Function to move backward with speed control
void moveBackward(uint8_t speed) {
  motor1.backward(speed);
  motor2.backward(speed);
}

// Function to turn left with speed control
void turnLeft(uint8_t speed) {
  motor1.backward(speed);
  motor2.forward(speed);
}

// Function to turn right with speed control
void turnRight(uint8_t speed) {
  motor1.forward(speed);
  motor2.backward(speed);
}

// Function to stop
void stopMotors() {
  motor1.stop();
  motor2.stop();
}

// Function to spin clockwise with speed control
void spinClockwise(uint8_t speed) {
  motor1.forward(speed);
  motor2.backward(speed);
}

// Function to spin anti-clockwise with speed control
void spinAntiClockwise(uint8_t speed) {
  motor1.backward(speed);
  motor2.forward(speed);
}
//***************************************************************************************
const int motor1PWM = 9; // PWM pin for motor 1
const int motor1DIR1 = 8; // Direction pin 1 for motor 1
const int motor1DIR2 = 7; // Direction pin 2 for motor 1
const int motor2PWM = 10; // PWM pin for motor 2
const int motor2DIR1 = 12; // Direction pin 1 for motor 2
const int motor2DIR2 = 11; // Direction pin 2 for motor 2

const int maxSpeed = 255; // Maximum speed
const int accelerationSteps = 50; // Number of acceleration steps
const int accelerationDelay = 20; // Delay between acceleration steps in milliseconds

#include <CytronMotorDriver.h>

CytronMD motor1(motor1PWM, motor1DIR1, motor1DIR2);
CytronMD motor2(motor2PWM, motor2DIR1, motor2DIR2);

void setup() {
  pinMode(motor1PWM, OUTPUT);
  pinMode(motor1DIR1, OUTPUT);
  pinMode(motor1DIR2, OUTPUT);
  pinMode(motor2PWM, OUTPUT);
  pinMode(motor2DIR1, OUTPUT);
  pinMode(motor2DIR2, OUTPUT);
}

void loop() {
  // Your loop code here
}

void executeCommand(String command) {
  // Your command execution code here
}

void gradualSpeedIncrease(int targetSpeed) {
  int currentSpeed = 0;
  int increment = maxSpeed / accelerationSteps;

  while (currentSpeed < targetSpeed) {
    currentSpeed += increment;
    if (currentSpeed > targetSpeed) {
      currentSpeed = targetSpeed;
    }
    
    motor1.setSpeed(currentSpeed);
    motor2.setSpeed(currentSpeed);
    
    delay(accelerationDelay);
  }
}

void tankForward() {
  motor1.forward();
  motor2.forward();
  gradualSpeedIncrease(maxSpeed);
}

void tankBackward() {
  motor1.backward();
  motor2.backward();
  gradualSpeedIncrease(maxSpeed);
}

void tankLeft() {
  motor1.backward();
  motor2.forward();
  gradualSpeedIncrease(maxSpeed);
}

void tankRight() {
  motor1.forward();
  motor2.backward();
  gradualSpeedIncrease(maxSpeed);
}

void tankRotateLeft() {
  motor1.backward();
  motor2.forward();
  gradualSpeedIncrease(maxSpeed);
}

void tankRotateRight() {
  motor1.forward();
  motor2.backward();
  gradualSpeedIncrease(maxSpeed);
}

void tankStop() {
  motor1.stop();
  motor2.stop();
}
