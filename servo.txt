#include <Servo.h>

// Define servo motor pin
#define SERVO_PIN 9

// Create a servo object
Servo servo;

// Define the maximum angle in degrees
#define MAX_ANGLE 180

void setup() {
  // Attach the servo to the pin
  servo.attach(SERVO_PIN);

  // Set the initial angle to zero
  servo.write(0);
}

void loop() {
  // Example: Move the servo to a specific angle (e.g., 90 degrees)
  moveToAngle(90, MAX_ANGLE);
}

// Function to move the servo motor to a specific angle without passing the maximum angle
void moveToAngle(int targetAngle, int maxAngle) {
  // Ensure the target angle is within the range of 0 to maxAngle
  if (targetAngle > maxAngle) {
    targetAngle = maxAngle;
  }

  // Move to the target angle
  servo.write(targetAngle);

  // Optional: Add a delay for smooth movement
  delay(500); // Adjust the delay as needed
}
