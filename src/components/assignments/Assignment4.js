import React from 'react';

const Assignment4 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 4: Microcontroller Programming</h2>
      
      <h3>Overview</h3>
      <p>This assignment focuses on microcontroller programming. Add your content here.</p>
      
      <h3>Microcontroller Used</h3>
      <p>Specify which microcontroller you used and why.</p>
      
      <h3>Programming Environment</h3>
      <p>Describe the programming environment, IDE, and tools used.</p>
      
      <h3>Code Structure</h3>
      <pre style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '5px',
        overflow: 'auto'
      }}>
{`// Add your code here
void setup() {
  // Setup code
}

void loop() {
  // Main loop code
}`}
      </pre>
      
      <h3>Functionality Implemented</h3>
      <ul>
        <li>Feature 1: Add implemented features</li>
        <li>Feature 2: Add implemented features</li>
        <li>Feature 3: Add implemented features</li>
      </ul>
      
      <h3>Testing & Debugging</h3>
      <p>Document your testing process and any debugging challenges.</p>
      
      <h3>Results</h3>
      <p>Show your microcontroller project in action.</p>
      
      <h3>Lessons Learned</h3>
      <p>Reflect on programming concepts and skills developed.</p>
      
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

export default Assignment4;
