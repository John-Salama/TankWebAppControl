#include <AccelStepper.h>

// Define stepper motor connections
#define STEPPER_STEP_PIN 2
#define STEPPER_DIR_PIN 3

// Define the number of steps per revolution
#define STEPS_PER_REVOLUTION 200

// Create a stepper object
AccelStepper stepper(1, STEPPER_STEP_PIN, STEPPER_DIR_PIN); 

// Define the maximum angle in degrees
#define MAX_ANGLE 180

void setup() {
  // Set the maximum speed and acceleration in steps per second and steps per second^2
  stepper.setMaxSpeed(1000);
  stepper.setAcceleration(500);

  // Set the initial position to zero
  stepper.setCurrentPosition(0);

  // Return to zero position at the start
  long zeroPosition = angleToSteps(0);
  stepper.moveTo(zeroPosition);
}

void loop() {
  // Run the stepper motor
  stepper.run();

  // Check if the stepper has reached the zero position
  if (stepper.distanceToGo() == 0 && stepper.currentPosition() != 0) {
    // Stepper has reached the zero position
    // Stop the motor
    stepper.stop();
  }

  // Example: Move the stepper to a specific angle (e.g., 90 degrees)
  moveToAngle(90, MAX_ANGLE);
}

// Function to move the stepper motor to a specific angle without passing the maximum angle
void moveToAngle(float targetAngle, float maxAngle) {
  // Ensure the target angle is within the range of 0 to maxAngle
  if (targetAngle > maxAngle) {
    targetAngle = maxAngle;
  }

  // Convert target angle to steps
  long targetPosition = angleToSteps(targetAngle);

  // Move to the target position
  stepper.moveTo(targetPosition);
}

// Function to convert angle to steps
long angleToSteps(float angle) {
  return angle * (STEPS_PER_REVOLUTION / 360.0);
}
