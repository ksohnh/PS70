import React from 'react';

const Assignment7 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 7: Electronic Output Devices</h2>
      
      <h3>Overview</h3>
      <p>This assignment focuses on electronic output devices. Add your content here.</p>
      
      <h3>Output Devices Used</h3>
      <ul>
        <li>Device 1: Add output devices used (LEDs, motors, displays, etc.)</li>
        <li>Device 2: Add output devices used</li>
        <li>Device 3: Add output devices used</li>
      </ul>
      
      <h3>Circuit Design</h3>
      <p>Document your circuit design and connections for output devices.</p>
      
      <h3>Programming</h3>
      <pre style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '5px',
        overflow: 'auto'
      }}>
{`// Add your output device code here
int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  delay(1000);
}`}
      </pre>
      
      <h3>Control Methods</h3>
      <p>Describe how you controlled the output devices (PWM, digital, analog, etc.).</p>
      
      <h3>Power Considerations</h3>
      <p>Document power requirements and considerations for your output devices.</p>
      
      <h3>Results & Demonstration</h3>
      <p>Show your output devices in action and demonstrate their functionality.</p>
      
      <h3>Integration</h3>
      <p>Discuss how output devices integrate with your overall system.</p>
      
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

export default Assignment7;
