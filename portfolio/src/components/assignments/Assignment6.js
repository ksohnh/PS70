import React from 'react';

const Assignment6 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 6: Electronic Input Devices</h2>
      
      <h3>Overview</h3>
      <p>This assignment focuses on electronic input devices. Add your content here.</p>
      
      <h3>Input Devices Used</h3>
      <ul>
        <li>Device 1: Add input devices used</li>
        <li>Device 2: Add input devices used</li>
        <li>Device 3: Add input devices used</li>
      </ul>
      
      <h3>Circuit Design</h3>
      <p>Document your circuit design and connections.</p>
      
      <h3>Programming</h3>
      <pre style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '5px',
        overflow: 'auto'
      }}>
{`// Add your input device code here
int sensorValue = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  sensorValue = analogRead(A0);
  Serial.println(sensorValue);
  delay(100);
}`}
      </pre>
      
      <h3>Data Collection</h3>
      <p>Document how you collected and analyzed data from input devices.</p>
      
      <h3>Calibration</h3>
      <p>Describe any calibration processes performed.</p>
      
      <h3>Results & Analysis</h3>
      <p>Show your results and analysis of the input device data.</p>
      
      <h3>Applications</h3>
      <p>Discuss potential applications for the input devices used.</p>
      
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

export default Assignment6;
