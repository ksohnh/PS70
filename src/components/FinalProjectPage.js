import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FinalProjectPage = () => {
  const navigate = useNavigate();
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  const assignments = [
    { id: 1, title: 'Introduction & Documentation' },
    { id: 2, title: '2D Design & Cutting' },
    { id: 3, title: 'Hand tools and fabrication' },
    { id: 4, title: 'Microcontroller Programming' },
    { id: 5, title: '3D Design & Printing' },
    { id: 6, title: 'Electronic Input Devices' },
    { id: 7, title: 'MVP and Electronic Output Devices' },
    { id: 8, title: 'CNC Milling' },
    { id: 9, title: 'Radio, WiFi, Bluetooth (IoT)' },
    { id: 10, title: 'Machine Building and End Effectors' },
    { id: 11, title: 'Project Integration' },
    { id: 12, title: 'Machine Demo / Wildcard' },
    { id: 13, title: 'Next Steps' },
    { id: 14, title: 'Project Prep' }
  ];

  // Handle Command+K shortcut
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setShowSearchOverlay(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (query) => {
    const trimmedQuery = query.trim().toLowerCase();
    
    if (!trimmedQuery) {
      return;
    }

    // Check for exact matches first
    if (trimmedQuery === 'about me' || trimmedQuery === 'about') {
      navigate('/about');
      return;
    }

    if (trimmedQuery === 'final project' || trimmedQuery === 'final') {
      navigate('/final-project');
      return;
    }

    // Check for assignment matches
    const assignmentMatch = assignments.find(assignment => 
      assignment.title.toLowerCase().includes(trimmedQuery) ||
      trimmedQuery.includes(assignment.id.toString()) ||
      assignment.id.toString() === trimmedQuery
    );

    if (assignmentMatch) {
      navigate(`/assignment/${assignmentMatch.id}`);
      return;
    }
  };

  const handleOverlaySearch = (query) => {
    setShowSearchOverlay(false);
    handleSearch(query);
  };

  const handleOverlayKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleOverlaySearch(event.target.value);
    }
  };

  return (
    <div className="notes-page">
      <div className="notes-container">
        <div className="notes-title">Final Project</div>
        <div className="notes-content">
          <h2>ESP32 SMS Device - A "Dumb Phone"</h2>
          
          <p>
            My final project is a custom-built SMS messaging device built on the ESP32 platform. 
            Inspired by my frustration with modern smartphones, this device strips away all the 
            distractions and focuses purely on text messaging—creating a "dumb phone" that helps 
            you stay connected without the constant pull of apps and notifications.
          </p>

          <h3>Video Demo</h3>
          <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
            <video
              controls
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%',
                borderRadius: '8px'
              }}
            >
              <source src={`${process.env.PUBLIC_URL}/final project demo.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <h3>Project Overview</h3>
          <p>
            The ESP32 SMS Device is a standalone messaging terminal that allows you to send and 
            receive text messages through a clean, minimal interface. It features a physical 
            keyboard for typing, a TFT display for viewing messages, and WiFi connectivity for 
            communication. The device operates in two modes: <strong>Message Mode</strong> for 
            composing and sending texts, and <strong>Inbox Mode</strong> for viewing received messages.
          </p>

          <h3>Hardware Components</h3>
          <ul>
            <li><strong>ESP32 DevKit v1</strong> - Main microcontroller with WiFi capabilities</li>
            <li><strong>TFT Display (320x240)</strong> - ILI9341 driver, landscape orientation</li>
            <li><strong>CardKB Mini Keyboard</strong> - I2C-based QWERTY keyboard (address 0x5F)</li>
            <li><strong>Custom 3D-Printed Enclosure</strong> - Designed in Autodesk Fusion 360</li>
            <li><strong>Power Management</strong> - USB power delivery for portable operation</li>
          </ul>

          <div style={{display:"flex", flexDirection:"row", marginBottom: 30, marginTop: 30}}>
            <img src={`${process.env.PUBLIC_URL}/final_design.jpg`} width={400} alt="Final project design"/>
            <div style={{marginLeft: 20}}>
              <h4>Final Design</h4>
              <p>
                The final device features a compact, pocket-sized form factor with a clean interface. 
                The TFT display provides clear text rendering, and the CardKB keyboard offers a 
                comfortable typing experience despite its small size. The enclosure was iterated 
                multiple times to get the dimensions just right for all components to fit snugly.
              </p>
            </div>
          </div>

          <div style={{display:"flex", flexDirection:"row", marginBottom: 30, marginTop: 30}}>
            <div style={{marginRight: 20}}>
              <h4>CAD Design Process</h4>
              <p>
                The enclosure was designed in Autodesk Fusion 360, requiring several iterations to 
                accommodate all components properly. The design needed to account for the ESP32 board, 
                TFT display, CardKB keyboard, and all necessary wiring while maintaining a compact, 
                ergonomic form factor. Each iteration refined the dimensions and component placement 
                to optimize both functionality and aesthetics.
              </p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/phone enclosure.png`} width={400} alt="Phone enclosure CAD"/>
          </div>

          <h3>Software Architecture</h3>
          <p>
            The project is organized into modular components, each handling a specific aspect of 
            functionality:
          </p>
          <ul>
            <li><strong>main.cpp</strong> - Core setup and loop, coordinates all modules</li>
            <li><strong>Input.cpp/h</strong> - Handles CardKB keyboard input via I2C</li>
            <li><strong>UI.cpp/h</strong> - Manages TFT display rendering and user interface</li>
            <li><strong>WifiHandler.cpp/h</strong> - WiFi connection management</li>
            <li><strong>GmailSMTP.cpp/h</strong> - Sends SMS messages via Gmail SMTP to carrier gateways</li>
            <li><strong>FirebaseMessage.cpp/h</strong> - Receives messages from Firebase Realtime Database</li>
          </ul>

          <h3>Code Structure & Workflows</h3>
          
          <h4>1. Initialization Flow (setup)</h4>
          <p>
            The device follows a carefully orchestrated initialization sequence. The display is initialized 
            first to provide immediate user feedback, showing "Connecting..." while WiFi connects. This 
            gives visual confirmation that the device is starting up properly. Time synchronization happens 
            once during setup rather than on every send/receive operation—this was a critical optimization 
            because NTP sync can take several seconds, and doing it repeatedly would make the device feel 
            sluggish. The initialization order ensures that WiFi is connected before attempting any network 
            operations like Firebase initialization.
          </p>
          <pre style={{backgroundColor: '#1e1e1e', color: '#d4d4d4', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '14px'}}>{`void setup() {
  // Display first for user feedback
  tft.init();
  tft.println("Connecting...");
  
  // Network setup
  connectToWiFi(ssid, password);
  if (wifiConnected) {
    syncTimeOnce();  // One-time sync, not per-operation
  }
  
  // Initialize storage and input
  initInboxStorage();
  setupInputDevices();
  drawInterface();
}`}</pre>
          <p>
            The modular design means each component (WiFi, storage, input, UI) initializes independently, 
            making it easy to debug issues and modify individual subsystems without affecting others.
          </p>

          <h4>2. Main Loop - Event-Driven Architecture</h4>
          <p>
            The main loop is intentionally minimal—it only polls for keyboard input. This event-driven 
            design means the device is always responsive to user actions. All other operations (sending 
            messages, receiving messages, UI updates) are triggered by user input rather than running 
            continuously in the background. The 10ms delay prevents overwhelming the I2C bus, which can 
            cause key presses to be missed or corrupted. This approach also saves power compared to 
            constantly polling network services.
          </p>
          <pre style={{backgroundColor: '#1e1e1e', color: '#d4d4d4', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '14px'}}>{`void loop() {
  handleCardKB();  // Check for keyboard input
  delay(10);       // Prevent I2C bus congestion
}`}</pre>
          <p>
            When a key is pressed, <code>handleCardKB()</code> processes it and triggers the appropriate 
            action (sending a message, switching modes, etc.). This keeps the code simple and makes the 
            device's behavior predictable.
          </p>

          <h4>3. Keyboard Input Workflow</h4>
          <p>
            The CardKB keyboard communicates via I2C at address 0x5F. Reading from I2C too frequently 
            can cause bus errors, so the code implements throttling—it only reads every 50ms. The keyboard 
            returns 0x00 when no key is pressed, making it easy to detect when a key is actually pressed. 
            When a key is detected, it's processed through a state machine that behaves differently 
            depending on whether the device is in MESSAGE mode (composing) or INBOX mode (viewing).
          </p>
          <pre style={{backgroundColor: '#1e1e1e', color: '#d4d4d4', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '14px'}}>{`char readCardKB() {
  // Throttle: only read every 50ms
  if (millis() - lastKeyReadTime < 50) return 0x00;
  
  // Request 1 byte from I2C device
  Wire.requestFrom(CARDKB_ADDR, 1);
  return Wire.read();  // Returns 0x00 if no key pressed
}

void handleCardKB() {
  char key = readCardKB();
  if (key == 0x00) return;  // No key pressed
  
  switch(key) {
    case KEY_ENTER:
      // Context-aware: send message OR refresh inbox
      (currentMode == MODE_MESSAGE) ? sendMessage() : refreshInbox();
      break;
    case KEY_TAB:
      // Toggle between modes
      currentMode = (currentMode == MODE_MESSAGE) ? MODE_INBOX : MODE_MESSAGE;
      drawInterface();
      break;
    default:
      // Regular characters only work in message mode
      if (currentMode == MODE_MESSAGE && key >= 0x20) {
        addCharacter(key);
      }
  }
}`}</pre>
          <p>
            This context-aware design means the same key (like Enter) does different things depending on 
            the current mode. In MESSAGE mode, Enter sends the message. In INBOX mode, Enter refreshes 
            the inbox. This makes the interface intuitive—the most common action in each mode is triggered 
            by Enter.
          </p>

          <h4>4. Message Sending Workflow</h4>
          <p>
            Sending messages uses a clever workaround: instead of using an expensive SMS API, the device 
            leverages carrier email-to-SMS gateways. Each carrier (Verizon, AT&T, T-Mobile, etc.) has an 
            email address format (phone@gateway.com) that automatically converts emails to SMS. The code 
            first cleans the phone number (removes formatting like dashes and parentheses), then appends 
            the carrier gateway (default is @vtext.com for Verizon). The ESP32 connects to Gmail's SMTP 
            server using SSL on port 465 and sends an email that gets converted to SMS by the carrier. 
            This approach is free and doesn't require API keys or paid services.
          </p>
          <pre style={{backgroundColor: '#1e1e1e', color: '#d4d4d4', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '14px'}}>{`void sendMessage() {
  showStatus("Sending...", TFT_BLUE, 500);
  
  // Convert phone number to carrier email gateway
  // e.g., "555-123-4567" -> "5551234567@vtext.com"
  String emailAddress = phoneToEmail(phoneNumber, "@vtext.com");
  
  // Configure Gmail SMTP session
  ESP_Mail_Session session;
  session.server.host_name = "smtp.gmail.com";
  session.server.port = 465;  // SSL port
  session.login.email = GMAIL_EMAIL;
  session.login.password = GMAIL_PASSWORD;
  
  // Create and send email
  SMTP_Message messageObj;
  messageObj.addRecipient("", emailAddress.c_str());
  messageObj.text.content = currentMessage.c_str();
  
  bool success = MailClient.sendMail(&smtp, &messageObj);
  showStatus(success ? "Sent!" : "Failed!", 
             success ? TFT_GREEN : TFT_RED, 1500);
}`}</pre>
          <p>
            The user gets immediate visual feedback—the screen shows "Sending..." in blue, then either 
            "Sent!" in green or "Failed!" in red. This feedback is crucial because network operations 
            can take several seconds, and without it, users might think the device froze. The message 
            is cleared from the input buffer only on successful send, so if sending fails, the user 
            can try again without retyping.
          </p>

          <h4>5. Message Receiving Workflow</h4>
          <p>
            Receiving messages uses a hybrid architecture that was born out of necessity. Initially, 
            I tried to run Gmail scraping directly on the ESP32, but the email libraries were too slow, 
            deprecated, and consumed too much memory. The solution: a Python script runs on a Macbook 
            that scrapes Gmail for incoming SMS messages and pushes them to Firebase Realtime Database. 
            The ESP32 then polls Firebase to retrieve new messages. This separation of concerns means 
            the ESP32 only handles lightweight JSON reads instead of complex email parsing.
          </p>
          <pre style={{backgroundColor: '#1e1e1e', color: '#d4d4d4', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '14px'}}>{`void refreshInbox() {
  showRefreshingScreen();  // Immediate feedback
  
  // Read all messages from Firebase
  if (Firebase.getJSON(firebaseData, "/messages")) {
    String jsonString = firebaseData.jsonString();
    
    // Parse JSON - messages stored as:
    // { "msg_id_1": {body, sender, timestamp}, ... }
    DynamicJsonDocument doc(8192);
    deserializeJson(doc, jsonString);
    
    // Extract each message
    for (JsonPair kv : doc.as<JsonObject>()) {
      InboxMessage msg;
      msg.body = kv.value()["body"].as<String>();
      msg.phoneNumber = kv.value()["sender"].as<String>();
      msg.timestamp = kv.value()["timestamp"].as<String>();
      inboxMessages.push_back(msg);
    }
    
    // Sort by timestamp (newest first) and save locally
    saveMessagesToStorage();
  }
}`}</pre>
          <p>
            The <code>isCheckingInbox</code> flag prevents concurrent inbox checks, which could cause 
            memory issues or display glitches. Messages are stored locally using LittleFS (a filesystem 
            for embedded devices), so they persist across reboots and can be viewed even when offline. 
            The JSON parsing uses ArduinoJson with a carefully sized buffer (8192 bytes) to handle 
            multiple messages without running out of memory.
          </p>

          <h4>6. UI Rendering Workflow</h4>
          <p>
            The UI system supports two distinct modes with completely different layouts. In MESSAGE mode, 
            the screen shows a text input area with word-wrapping, a character counter, and a blinking 
            cursor. The word-wrapping algorithm is crucial because the 320x240 screen can only fit about 
            20 characters per line at size 2 text. The algorithm accumulates characters into words, then 
            checks if the word fits on the current line before printing it. If not, it moves to the next 
            line. This prevents words from being split across lines, which would be hard to read.
          </p>
          <pre style={{backgroundColor: '#1e1e1e', color: '#d4d4d4', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '14px'}}>{`void displayCurrentInput() {
  // Word wrap: accumulate characters into words
  String word = "";
  for (int i = 0; i < currentMessage.length(); i++) {
    char c = currentMessage.charAt(i);
    
    if (c == ' ') {
      // Check if word fits on current line
      if (cursorX + tft.textWidth(word) > maxWidth) {
        cursorY += lineHeight;  // Move to next line
        cursorX = 12;
      }
      tft.print(word);
      word = "";
    } else {
      word += c;  // Build word character by character
    }
  }
  
  // Draw cursor and character count
  tft.fillRect(cursorX + 2, cursorY + 2, 2, 14, TFT_YELLOW);
  tft.print(currentMessage.length() + "/" + MAX_MESSAGE_LENGTH);
}`}</pre>
          <p>
            The INBOX mode displays messages as cards with scrolling. Each message card shows the sender's 
            phone number, timestamp, and a preview of the message body (truncated if too long). The scroll 
            position is tracked separately, and only visible messages are rendered to save processing time. 
            A scrollbar on the right side indicates position when there are more messages than can fit on 
            screen. The WiFi status indicator in the title bar changes color (green when connected, red 
            when disconnected) to give immediate feedback about connectivity.
          </p>

          <h4>7. State Management</h4>
          <p>
            Global state variables are defined in <code>main.cpp</code> and accessed across modules 
            using the <code>extern</code> keyword. This centralized approach means any module can read 
            or modify shared state, but it requires careful coordination to avoid race conditions. The 
            <code>currentMode</code> enum is particularly important—it drives the entire UI and input 
            behavior. When the mode changes, the input handler knows to interpret keys differently, and 
            the UI knows to render a completely different layout.
          </p>
          <pre style={{backgroundColor: '#1e1e1e', color: '#d4d4d4', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '14px'}}>{`// Global state (main.cpp)
String currentMessage = "";           // Message being typed
InputMode currentMode = MODE_MESSAGE; // Drives UI & input behavior
bool wifiConnected = false;          // Network status

// Inbox state (FirebaseMessage.cpp)
std::vector<InboxMessage> inboxMessages;
int inboxScrollPosition = 0;
bool isCheckingInbox = false;  // Prevents concurrent checks`}</pre>
          <p>
            The <code>isCheckingInbox</code> flag is a simple mutex pattern—it prevents the inbox from 
            being checked multiple times simultaneously, which could cause memory corruption or display 
            glitches. The state is intentionally kept minimal to reduce complexity and make the codebase 
            easier to understand and maintain.
          </p>

          <h4>8. Memory Management</h4>
          <p>
            ESP32 has limited RAM (~200KB), so memory management is critical. The device monitors memory 
            usage throughout operations, especially during Firebase reads which can consume significant 
            memory for JSON parsing. JSON document sizes are carefully calculated—too small and parsing 
            fails, too large and the device runs out of memory. The 8192-byte buffer for Firebase messages 
            was chosen after testing with various message counts. When memory gets low, the device can 
            crash or behave unpredictably, so vectors are cleared immediately after use, and messages 
            are saved to LittleFS (flash storage) rather than kept in RAM.
          </p>
          <pre style={{backgroundColor: '#1e1e1e', color: '#d4d4d4', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '14px'}}>{`// Monitor memory during critical operations
void logMemory(String context) {
  Serial.printf("[MEMORY] %s - Free: %d\\n", 
                context.c_str(), ESP.getFreeHeap());
}

// Size JSON buffer for expected data
DynamicJsonDocument doc(8192);  // Not too big, not too small

// Clear immediately after use
inboxMessages.clear();

// Persist to flash, not RAM
saveMessagesToStorage();`}</pre>
          <p>
            LittleFS (Little File System) is used for message persistence because it's designed for 
            embedded systems with limited memory. Messages are stored as JSON files that survive reboots, 
            so users can view their inbox even when offline. The filesystem is initialized once during 
            setup and used throughout the device's operation.
          </p>

          <h3>Key Features</h3>
          <h4>Dual-Mode Operation</h4>
          <ul>
            <li><strong>Message Mode</strong>: Compose and send text messages up to 160 characters</li>
            <li><strong>Inbox Mode</strong>: View received messages with sender phone numbers and timestamps</li>
            <li>Toggle between modes using the Tab key</li>
          </ul>

          <h4>Input Controls</h4>
          <ul>
            <li><strong>CardKB Keyboard</strong>: Full QWERTY input for typing messages</li>
            <li><strong>Enter</strong>: Send message (Message Mode) or refresh inbox (Inbox Mode)</li>
            <li><strong>Tab</strong>: Switch between Message and Inbox modes</li>
            <li><strong>Backspace</strong>: Delete last character</li>
            <li><strong>Arrow Keys</strong>: Scroll through inbox messages</li>
            <li><strong>Escape</strong>: Clear current message or return to Message Mode</li>
          </ul>

          <h4>Communication System</h4>
          <p>
            The device uses a hybrid communication approach:
          </p>
          <ul>
            <li><strong>Sending Messages</strong>: Messages are sent via Gmail SMTP to carrier SMS gateways 
              (e.g., @vtext.com for Verizon). The ESP32 directly connects to Gmail's SMTP server and 
              sends emails that are converted to SMS by the carrier.</li>
            <li><strong>Receiving Messages</strong>: A separate Python script runs on a Macbook that 
              scrapes Gmail for incoming SMS messages. These messages are then pushed to Firebase 
              Realtime Database, which the ESP32 polls to retrieve new messages.</li>
          </ul>

          <h3>Design Evolution</h3>
          <h4>From MVP to Final Product</h4>
          <p>
            The project evolved significantly from the initial MVP (see <a href="/assignment/7">Assignment 7</a>):
          </p>
          <ul>
            <li><strong>Keyboard Upgrade</strong>: Replaced the 4x4 matrix membrane keyboard with the 
              CardKB mini keyboard, providing a much better typing experience with full QWERTY layout</li>
            <li><strong>Communication Method</strong>: Initially planned to use a phone API (like Twilio), 
              then switched to Gmail SMTP for sending. For receiving, moved from trying to run everything 
              on ESP32 to a hybrid approach with a Macbook script handling Gmail scraping and Firebase 
              for message delivery</li>
            <li><strong>Code Refactoring</strong>: Significantly improved the codebase with better 
              modularization, error handling, and memory management</li>
            <li><strong>UI Improvements</strong>: Enhanced the interface with better message display, 
              scrolling functionality, and status indicators</li>
          </ul>

          <h4>Technical Challenges and Solutions</h4>
          <ul>
            <li><strong>Library Limitations</strong>: ESP32 email libraries were too slow and deprecated. 
              Solution: Moved Gmail scraping to a separate Python script on Macbook</li>
            <li><strong>Memory Management</strong>: Firebase message storage required careful memory 
              management. Solution: Implemented LittleFS for local message caching and efficient 
              JSON parsing</li>
            <li><strong>I2C Communication</strong>: CardKB keyboard required careful I2C timing. 
              Solution: Implemented throttling and proper error handling for I2C reads</li>
            <li><strong>Display Optimization</strong>: TFT display rendering needed optimization for 
              smooth scrolling. Solution: Implemented efficient word-wrapping and partial screen updates</li>
          </ul>

          <h3>Technical Specifications</h3>
          <ul>
            <li><strong>Platform</strong>: PlatformIO with Arduino framework</li>
            <li><strong>Display</strong>: 320x240 TFT (ILI9341), landscape orientation</li>
            <li><strong>Input</strong>: CardKB via I2C (SDA: GPIO 27, SCL: GPIO 26, 100kHz)</li>
            <li><strong>Storage</strong>: LittleFS for local message caching</li>
            <li><strong>Networking</strong>: WiFi connection with NTP time synchronization</li>
            <li><strong>Message Limit</strong>: 160 characters per message</li>
            <li><strong>Inbox Capacity</strong>: Limited by available memory, with scrolling for large inboxes</li>
          </ul>

          <h3>Future Improvements</h3>
          <ul>
            <li>Add contact management system for storing phone numbers</li>
            <li>Implement message threading/conversation view</li>
            <li>Add battery power for true portability</li>
            <li>Create custom PCB to reduce form factor further</li>
            <li>Add haptic feedback for key presses</li>
            <li>Implement message search functionality</li>
          </ul>

          <h3>Project Context</h3>
          <p>
            This project started as a brainstorm in <a href="/assignment/1">Assignment 1</a>, where I 
            proposed the idea of building a "dumb phone" to escape the distractions of modern smartphones. 
            The MVP was developed in <a href="/assignment/7">Assignment 7</a>, which established the 
            basic hardware setup and initial communication protocols. The final project represents a 
            complete iteration on that MVP, with significant improvements in both hardware and software.
          </p>

          <h3>Code Repository</h3>
          <p>
            The complete source code for this project is located in the <code>PhoneProject/</code> 
            directory. The project uses PlatformIO for build management and includes all necessary 
            libraries and configuration files.
          </p>
        </div>
      </div>

      {/* Search Overlay */}
      {showSearchOverlay && (
        <div className="search-overlay" onClick={() => setShowSearchOverlay(false)}>
          <div className="search-overlay-content" onClick={(e) => e.stopPropagation()}>
            <h5 className="mb-3">Search Portfolio</h5>
            <input
              type="text"
              placeholder="Search assignments, about me, or final project..."
              onKeyPress={handleOverlayKeyPress}
              autoFocus
            />
            <div className="mt-3">
              <small className="text-muted">Press Enter to search or click outside to close</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalProjectPage;
