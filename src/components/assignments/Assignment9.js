import React from 'react';

const Assignment9 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 9: Radio, WiFi, Bluetooth (IoT)</h2>
      
      <p>For this assignment, I built an IoT system that enables my ESP32-based phone to receive SMS 
        messages wirelessly through Firebase Realtime Database. The system consists of two main components: 
        a Python script that monitors Gmail for SMS messages (which arrive as emails from carrier gateways) 
        and pushes them to Firebase, and an ESP32 program that connects via WiFi to read and display these 
        messages. This is a key component of my final project phone system.
      </p>

      <h3>System Architecture</h3>
      <p>The system works in three stages:</p>
      <ol>
        <li><strong>SMS to Email:</strong> When someone sends an SMS to my phone number, the carrier 
          forwards it to my Gmail account as an email from their gateway domain (e.g., @vtext.com for 
          Verizon, @tmomail.net for T-Mobile).</li>
        <li><strong>Email to Firebase:</strong> A Python script running on my computer continuously 
          monitors Gmail via IMAP, extracts SMS messages from carrier emails, and pushes them to 
          Firebase Realtime Database.</li>
        <li><strong>Firebase to ESP32:</strong> The ESP32 connects to WiFi and reads messages from 
          Firebase, storing them locally and displaying them on the device's screen.</li>
      </ol>

      <h3>Python Script: Email to Firebase Bridge</h3>
      <p>The Python script (<code>receive.py</code>) serves as the bridge between email and Firebase. 
        It uses the <code>imaplib</code> library to connect to Gmail and the Firebase Admin SDK to push 
        data to the cloud database.
      </p>

      <p><strong>Key Features:</strong></p>
      <ul>
        <li><strong>Carrier Support:</strong> Monitors emails from multiple carrier gateways including 
          AT&T (@mms.att.net), T-Mobile (@tmomail.net), Verizon SMS (@vtext.com), Verizon MMS 
          (@vzwpix.com), and Sprint (@messaging.sprintpcs.com)</li>
        <li><strong>Continuous Monitoring:</strong> Checks for new messages every 30 seconds in a 
          continuous loop</li>
        <li><strong>Duplicate Detection:</strong> Prevents saving the same message multiple times by 
          checking sender, body, and timestamp</li>
        <li><strong>Message Parsing:</strong> Extracts the message body from both plain text and 
          multipart email formats</li>
        <li><strong>Timestamp Preservation:</strong> Maintains the original email timestamp rather than 
          using the current time</li>
      </ul>

      <pre style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '5px',
        overflow: 'auto',
        fontSize: '12px'
      }}>
{`def check_for_new_messages():
    # Connect to Gmail via IMAP
    mail = imaplib.IMAP4_SSL(IMAP_SERVER)
    mail.login(EMAIL, PASSWORD)
    mail.select("inbox")
    
    # Search for messages from carrier domains
    for domain in carrier_domains:
        search_query = f'FROM "{domain}"'
        status, message_ids = mail.search(None, search_query)
        # Process and extract message content...
        
    # Push to Firebase
    send_to_firebase(sender, body, msg_id, email_timestamp)`}
      </pre>

      <p>The script stores each message in Firebase with the following structure:</p>
      <ul>
        <li><code>sender</code>: The email address from the carrier gateway</li>
        <li><code>body</code>: The SMS message text</li>
        <li><code>timestamp</code>: ISO format timestamp from the original email</li>
        <li><code>email_id</code>: Unique message ID from the email</li>
        <li><code>read</code>: Boolean flag for read/unread status</li>
      </ul>

      <h3>ESP32 Code: Firebase to Device</h3>
      <p>The ESP32 code (<code>FirebaseMessage.cpp</code>) handles the WiFi connection and Firebase 
        integration. It uses the FirebaseESP32 library to read data from Firebase Realtime Database 
        and stores messages locally using LittleFS for offline access.
      </p>

      <p><strong>Key Components:</strong></p>
      <ul>
        <li><strong>WiFi Connection:</strong> Connects to a WiFi network to access Firebase</li>
        <li><strong>Firebase Initialization:</strong> Supports both unauthenticated access (if database 
          rules allow) and service account authentication</li>
        <li><strong>Message Retrieval:</strong> Reads all messages from the <code>/messages</code> path 
          in Firebase and parses the JSON structure</li>
        <li><strong>Local Storage:</strong> Saves messages to LittleFS filesystem for offline access 
          and faster loading</li>
        <li><strong>Message Sorting:</strong> Sorts messages by timestamp with newest first</li>
        <li><strong>Memory Management:</strong> Includes memory logging to monitor heap usage during 
          Firebase operations</li>
      </ul>

      <pre style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '5px',
        overflow: 'auto',
        fontSize: '12px'
      }}>
{`bool checkInbox() {
    // Ensure WiFi and Firebase are ready
    if (!wifiConnected || !Firebase.ready()) {
        return false;
    }
    
    // Read messages from Firebase
    if (Firebase.getJSON(firebaseData, "/messages")) {
        // Parse JSON and extract message data
        DynamicJsonDocument rootDoc(8192);
        deserializeJson(rootDoc, jsonString);
        
        // Iterate through messages and populate inboxMessages vector
        // Sort by timestamp (newest first)
        // Save to local storage
    }
}`}
      </pre>

      <h3>WiFi Communication</h3>
      <p>The ESP32 uses its built-in WiFi capabilities to connect to a local network and communicate 
        with Firebase. The WiFi connection is essential for real-time message retrieval, allowing the 
        device to stay synchronized with the latest messages pushed by the Python script.
      </p>

      <p>The system handles WiFi connection status gracefully - if WiFi is not connected, the ESP32 
        can still display messages from local storage, but cannot fetch new messages from Firebase. 
        This provides a fallback mechanism for offline operation.
      </p>

      <h3>Data Flow</h3>
      <p>The complete data flow works as follows:</p>
      <ol>
        <li>Someone sends an SMS to my phone number</li>
        <li>Carrier forwards SMS as email to Gmail</li>
        <li>Python script detects new email via IMAP (every 30 seconds)</li>
        <li>Script extracts message content and metadata</li>
        <li>Message is pushed to Firebase Realtime Database at <code>/messages</code></li>
        <li>ESP32 connects to WiFi and reads from Firebase</li>
        <li>Messages are parsed, sorted, and stored locally</li>
        <li>Messages are displayed on the ESP32's screen</li>
      </ol>

      <h3>Challenges & Solutions</h3>
      <p><strong>Carrier Email Formatting:</strong> Different carriers format their SMS-to-email 
        messages differently. The script handles both plain text and multipart email formats, 
        extracting the message body from the appropriate section.
      </p>

      <p><strong>Duplicate Messages:</strong> The system implements duplicate detection by comparing 
        sender, body, and timestamp before saving to Firebase. This prevents the same message from 
        being stored multiple times if the script runs multiple checks.
      </p>

      <p><strong>Firebase Authentication:</strong> The ESP32 code supports both unauthenticated access 
        (for development) and service account authentication (for production). It attempts 
        unauthenticated access first, then falls back to service account credentials if needed.
      </p>

      <p><strong>Memory Management:</strong> Firebase JSON parsing can be memory-intensive on the ESP32. 
        The code allocates appropriate buffer sizes (8192 bytes for message parsing) and includes 
        memory logging to monitor usage.
      </p>

      <h3>IoT Application</h3>
      <p>This system enables my ESP32-based phone to receive SMS messages without requiring a cellular 
        module or SIM card. By leveraging existing email infrastructure and Firebase's real-time 
        database, I can create a low-cost IoT messaging device that integrates seamlessly with 
        traditional SMS networks. The WiFi connection provides the wireless communication backbone, 
        allowing the device to stay synchronized with incoming messages in near real-time.
      </p>

      <h3>Results</h3>
      <p>The system successfully bridges SMS messages from traditional cellular networks to my IoT 
        device through Firebase. Messages appear on the ESP32 within 30 seconds of being sent (the 
        polling interval), and the local storage ensures messages persist even if WiFi is temporarily 
        unavailable. This implementation demonstrates practical IoT communication using WiFi and cloud 
        services to extend device capabilities beyond their direct hardware limitations.
      </p>
    </div>
  );
};

export default Assignment9;
