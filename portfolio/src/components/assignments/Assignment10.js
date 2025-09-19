import React from 'react';

const Assignment10 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 10: Machine Building and End Effectors</h2>
      
      <h3>Overview</h3>
      <p>This assignment focuses on machine building and end effector design. Add your content here.</p>
      
      <h3>Machine Design</h3>
      <p>Document your machine design process, including mechanical design and structural considerations.</p>
      
      <h3>End Effector Design</h3>
      <p>Describe your end effector design and its specific functionality.</p>
      
      <h3>Mechanical Components</h3>
      <ul>
        <li>Actuators: Add actuator specifications</li>
        <li>Motors: Add motor specifications</li>
        <li>Gears/Belts: Add transmission components</li>
        <li>Structural Elements: Add frame and support components</li>
      </ul>
      
      <h3>Control System</h3>
      <p>Document the control system for your machine and end effector.</p>
      
      <h3>Programming</h3>
      <pre style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '5px',
        overflow: 'auto'
      }}>
{`// Add your machine control code here
#include <Stepper.h>

const int stepsPerRevolution = 200;
Stepper myStepper(stepsPerRevolution, 8, 9, 10, 11);

void setup() {
  myStepper.setSpeed(60);
  Serial.begin(9600);
}

void loop() {
  myStepper.step(stepsPerRevolution);
  delay(500);
}`}
      </pre>
      
      <h3>Assembly Process</h3>
      <p>Document the assembly process and any challenges encountered.</p>
      
      <h3>Calibration</h3>
      <p>Describe calibration procedures for your machine and end effector.</p>
      
      <h3>Testing & Performance</h3>
      <p>Document testing procedures and performance evaluation.</p>
      
      <h3>Applications</h3>
      <p>Discuss potential applications and use cases for your machine.</p>
      
      <h3>Results & Demonstration</h3>
      <p>Show your machine in action and demonstrate end effector functionality.</p>
      
      <h3>Images & Documentation</h3>
      <div style={{ 
        border: '2px dashed #CDD3CE', 
        padding: '20px', 
        textAlign: 'center', 
        color: '#CDD3CE',
        marginTop: '20px'
      }}>
        Add your images and additional documentation here
      </div>
    </div>
  );
};

export default Assignment10;
