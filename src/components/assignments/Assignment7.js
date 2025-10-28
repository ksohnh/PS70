import React from 'react';

const Assignment7 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 7: MVP & Electronic Output Devices</h2>
      <p>
        For my MVP, the main thing that I wanted to try building on was wiring the different components together for
         the phone and understand exactly what electrical/hardware components I needed, and then building some kind of simple communication protocol.
      </p>
      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/4w74Xgq6gyk?si=ZOdVRvjfrpqgSWJ8"
          title="Your Video Title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>
      <h4>Accomplished:</h4>
      <ul>
        <li>Wired everything together, inputs are inputting and outputs are outputting</li>
        <li>Created basic UI to record and send messages</li>
        <li>Set up Wifi capabilities</li>
        <li>Created a basic protocol to receive message and send to the API, the API just doesn't work</li>
      </ul>
      <h4>Next steps:</h4>
      <ul>
        <li>Implement Google Voice or some other API to get an actual working phone number</li>
        <li>Iterate further on the software so that it can send messages to multiple people, receive messages, and display them; might need to implement basic database interactions probably with firebase</li>
        <li>Code the potentiometer to navigate between the different phone numbers</li>
        <li>Get a custom PCB to make the form factor smaller</li>
        <li>Get an actual keyboard and connect it up to the ESP32</li>
      </ul>
      <h4>Details:</h4>
      <div style={{display:"flex", flexDirection:"row", marginBottom: 30, marginTop: 30}}>
        <img src={`${process.env.PUBLIC_URL}/IMG_5122.jpg`} width={300} alt=""/>
        <p style={{marginLeft: 20}}>This was my first iteration. It was kind of messy and I didn't have the keyboard yet 
          so I was just trying to figure out how to get the screen working. I wanted to use the TFT screen because of the 
          potential touch-screen elements and also because the available TFT screens were much bigger than the OLED screen
        </p>
      </div>
      <div style={{display:"flex", flexDirection:"row", marginBottom: 30}}>
        <p style={{marginRight: 20}}>My second iteration was much cleaner in terms of the wire, I got a longer breadboard 
          and attached the components to the breadboard, also got my keyboard. I'm using a simple 4x4 membrane keyboard for 
          now to try and get the communication working, and then worry about figuring out typing out on an actual keyboard later.
           I also attached a rotary encoder, I'm anticipating using this as the main navigational input instead of the touch screen 
           because I think it'd be more fun, I just want it to also be a little smaller so I can put the phone in my pocket.
        </p>
        <img src={`${process.env.PUBLIC_URL}/IMG_5175.jpg`} width={300} alt=""/>
      </div>
      <p>My plan was to use the wifi module on the ESP32 
        to connect to network, and then from there utilize an external API to get a phone number to send texts from. The wifi module
         took a lot longer than I thought to get working, because it was very specific about the kinds of networks it would connect to, and 
         parsing network names was more annoying than I thought it would be.
      </p>
      <p>I then coded things up so that the ESP could receive keyboard inputs and display them on the screen, and then send them to some source. 
        I also created a basic UI to be the "message writing" pad.
      </p>
      <p>Unfortunately, I didn't get the API to work; I tried using Twilio API, which did indeed give me a phone number, but 
        the caviat was that I had to verify my account in order to send to external phone numbers using the Twilio phone numbeer. 
        I initiated the verification process, but it's been a few days and I still haven't heard anything so I think it's a sign that 
        I should try utilizing another API. Bobby suggested Google Voice so that's the API I was planning on trying next.
      </p>
    </div>
  );
};

export default Assignment7;
