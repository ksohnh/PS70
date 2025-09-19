import React from 'react';

const Assignment9 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 9: Radio, WiFi, Bluetooth (IoT)</h2>
      
      <h3>Overview</h3>
      <p>This assignment covers wireless communication technologies including radio, WiFi, and Bluetooth for IoT applications. Add your content here.</p>
      
      <h3>Communication Technologies Used</h3>
      <ul>
        <li>WiFi: Add WiFi implementation details</li>
        <li>Bluetooth: Add Bluetooth implementation details</li>
        <li>Radio: Add radio communication details</li>
      </ul>
      
      <h3>Hardware Components</h3>
      <ul>
        <li>Microcontroller: Add microcontroller used</li>
        <li>WiFi Module: Add WiFi module details</li>
        <li>Bluetooth Module: Add Bluetooth module details</li>
        <li>Antenna: Add antenna specifications</li>
      </ul>
      
      <h3>Network Setup</h3>
      <p>Document your network configuration and setup process.</p>
      
      <h3>Programming</h3>
      <pre style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '5px',
        overflow: 'auto'
      }}>
{`// Add your IoT communication code here
#include <WiFi.h>

const char* ssid = "your_network";
const char* password = "your_password";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("WiFi connected!");
}`}
      </pre>
      
      <h3>Data Transmission</h3>
      <p>Document how you transmitted and received data wirelessly.</p>
      
      <h3>Security Considerations</h3>
      <p>Discuss security measures implemented for wireless communication.</p>
      
      <h3>IoT Application</h3>
      <p>Describe the IoT application you built and its functionality.</p>
      
      <h3>Testing & Performance</h3>
      <p>Document testing procedures and performance metrics.</p>
      
      <h3>Results & Demonstration</h3>
      <p>Show your IoT system in action and demonstrate wireless communication.</p>
      
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

export default Assignment9;
