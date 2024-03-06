/*
  HC12 Communication Arduino Code

  This code communicates with an HC12 module to receive commands from a remote device.
  The commands are parsed and executed accordingly.

  Author: John Salama

  Date: 1/3/2024

  Hardware Requirements:
  - Arduino board
  - HC12 module connected to pins 2 (RX) and 3 (TX)

  Instructions:
  1. Upload this code to your Arduino board.
  2. Connect the HC12 module to the specified pins (2 and 3).
  3. Use a remote device or application to send commands in the format '#<command>;' via the HC12 module.

  Example Command Format:
  #A; - Tank On
  #B; - Tank Off
  #C; - Tank Forward
  #D; - Tank Backward
  #E; - Tank Left
  #F; - Tank Right
  #G; - Tank Rotate Left
  #H; - Tank Rotate Right
  #I; - Tank Flipper Up
  #J; - Tank Flipper Down
  #K; - Tank Stop
  #L; - Arm Base Left
  #M; - Arm Base Right
  #N; - Arm Elbow Up
  #O; - Arm Elbow Down
  #P; - Arm Wrist Up
  #Q; - Arm Wrist Down
  #R; - Arm Gripper Open
  #S; - Arm Gripper Close
  #T; - Arm Mark Mine
  #U; - Arm Stop
*/

#include <SoftwareSerial.h>

// Define HC12 serial communication pins
SoftwareSerial HC12Serial(2, 3); // RX, TX

// Function prototypes
void executeCommand(String command);

void setup() {
  // Initialize serial communication for debugging
  Serial.begin(9600);

  // Initialize HC12 serial communication
  HC12Serial.begin(9600);
}

void loop() {
  // Check if data is available from HC12 module
  if (HC12Serial.available() > 0) {
    // Read the command until the ';' delimiter
    String command = HC12Serial.readStringUntil(';');

    // Execute the received command
    executeCommand(command);
  }
}

/*
  Execute Command Function

  This function parses and executes the received command.

  Parameters:
    command: The command string received from the HC12 module.

  Returns: None
*/
void executeCommand(String command) {
  // Check if the command format is valid
  if (command.charAt(0) == '#' && command.charAt(command.length() - 1) == ';') {
    // Extract the command type from the received string
    char commandType = command.charAt(1);

    // Execute the corresponding action based on the command type
    switch (commandType) {
      case 'A': // Tank On
        Serial.println("Tank On");
        // Implement Tank On logic here
        break;
      case 'B': // Tank Off
        Serial.println("Tank Off");
        // Implement Tank Off logic here
        break;
      case 'C': //Tank Forward
        Serial.println("Forward");
        // Implement Forward logic here
        break;
      case 'D': //Tank Backward
        Serial.println("Backward");
        // Implement Backward logic here
        break;
      case 'E': //Tank Left
        Serial.println("Left");
        // Implement Left logic here
        break;
      case 'F': //Tank Right
        Serial.println("Right");
        // Implement Right logic here
        break;
      case 'G': //Tank Rotate Left
        Serial.println("Rotate Left");
        // Implement Rotate Left logic here
        break;
      case 'H': //Tank Rotate Right
        Serial.println("Rotate Right");
        // Implement Rotate Right logic here
        break;
      case 'I': //Tank Flipper Up
        Serial.println("Flipper Up");
        // Implement Flipper Up logic here
        break;
      case 'J': //Tank Flipper Down
        Serial.println("Flipper Down");
        // Implement Flipper Down logic here
        break;
      case 'K': // Stop Tank
        Serial.println("Stop Tank");
        // Implement Stop Tank logic here
        break;
      case 'L': //Arm Base Left
        Serial.println("Base Left");
        // Implement Base Left logic here
        break;
      case 'M': //Arm Base Right
        Serial.println("Base Right");
        // Implement Base Right logic here
        break;
      case 'N': //Arm Elbow Up
        Serial.println("Elbow Up");
        // Implement Elbow Up logic here
        break;
      case 'O': //Arm Elbow Down
        Serial.println("Elbow Down");
        // Implement Elbow Down logic here
        break;
      case 'P': //Arm Wrist Up
        Serial.println("Wrist Up");
        // Implement Wrist Up logic here
        break;
      case 'Q': //Arm Wrist Down
        Serial.println("Wrist Down");
        // Implement Wrist Down logic here
        break;
      case 'R': //Arm Gripper Open
        Serial.println("Gripper Open");
        // Implement Gripper Open logic here
        break;
      case 'S': //Arm Gripper Close
        Serial.println("Gripper Close");
        // Implement Gripper Close logic here
        break;
      case 'T': //Arm Mark Mine
        Serial.println("Mark Mine");
        // Implement Mark Mine logic here
        break;
      case 'U': //Arm Stop
        Serial.println("Stop ARM");
        // Implement Stop ARM logic here
        break;
      default:
        Serial.println("Invalid Command");
        break;
    }
  } else {
    // Command format is incorrect
    Serial.println("Invalid Command Format");
  }
}

