import React from 'react';

const Assignment4 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 4: Microcontroller Programming</h2>

      <p>Here is the microcontroller thing I programmed with Arduino! It's essentially the very 
        first iteration of my final project, the phone; in this portion, the main thing I wanted to get 
        up and running was the basic inputs and outputs, which I could manipulate through Arduino.
      </p>
      
      <video width="500" controls>
        <source src={`${process.env.PUBLIC_URL}/mvp_typing_demo.mp4`}  type="video/mp4"></source>
      </video>

      <video width="500" controls>
        <source src={`${process.env.PUBLIC_URL}/mvp_rotary_demo.mp4`}  type="video/mp4"></source>
      </video>

      <p>The electronic schematic itself relatively simple; it's connecting two components, the TFT 
        screen and a rotary encoder, into the ESP32. The two components do have a lot of pins, though, 
        so there was a bit of a trial-and-error process in order to find which pins were available to 
        write to and which ones already have internal functions that might get messed up if I tried to use 
        it as an I/O pin.
      </p>

      <img src={`${process.env.PUBLIC_URL}/mvp_wiring_diagram.jpg`} width={500} alt=""></img>

      <p>
        For the keyboard, it was a 16x16 matrix so I had to figure out how the keys were mapped before 
        utilizing the KeyPad Library in Arduino to receive the inputs. Since I was only trying to get the 
        inputting and communication protocol to work, I wasn't worried about trying to figure out how to type letters;
        that would come later once I received an actual keyboard component to be utilized.
      </p>

      <img src={`${process.env.PUBLIC_URL}/mvp_code_snippet_2.png`} width={500} alt=""></img>


      <p>  
        I heavily researched different communication protocols and ways to get my
        ESP32 to be able to send messages. Ultimately, I decided to go with the Twilio API, because it seemed like 
        the fastest way to get off the ground without having to rely on too many external factors or jump through too 
        many loopholes. The below code snippet is a small example of how I'm interacting with the API, essentially sending 
        messages along with a pre-identified phone number to be sent as a toy example. In future iterations I'd want to be able 
        to support inputting and maintaining multiple phone numbers.
      </p>

      <img src={`${process.env.PUBLIC_URL}/mvp_code_snippet_1.png`} width={500} alt=""></img>

    </div>
  );
};

export default Assignment4;
