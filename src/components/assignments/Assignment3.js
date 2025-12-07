import React from 'react';

const Assignment3 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 3: Hand Tools and Fabrication</h2>
      
      <p>The kinetic sculpture I made is below! It's a planetary gear that allows for two separate directions of
        rotation powered by a single motor.
      </p>

      <video width="500" controls>
        <source src={`${process.env.PUBLIC_URL}/kinetic_vid.mp4`}  type="video/mp4"></source>
      </video>

      <p>I initially wanted to create something with two wheels spinning in opposite directions on 
        top of each other, powered by one gear, in order to create a trippy effect. Upon researching I discovered that there were 
        multiple ways of doing so, but one way is the "planetary gear." Ultimately, what I ended up designing was 
        the planetary gear itself and not my original intention of two opposing movements.
      </p>

      <img src={`${process.env.PUBLIC_URL}/planetary_gear.png`} width={500} alt=""></img>

      <p>I initially created the planetary gear design above, following the information I found online about 
        planetary gears and optimal gear-ratios/sizes of the gears so that the whole thing could flow smoothly.
      
      <p>However, I quickly realized that I needed to think more about this in a real-world scenario, as it wasn't like this gear 
        could just be floating in the air without anything to hold it. I then designed a carrier frame so that it could hold the gears together 
        and also provided a firm axis around which to rotate
      </p>

      <img src={`${process.env.PUBLIC_URL}/planetary_gear_with_carrier.png`} width={500} alt="" ></img>
      </p>

      <p>For the material, I decided to use wood because it would be firmer than cardboard and therefore better to use as a gear; 
        I felt that cardboard would deteriorate after a while, but wood would last longer. I laser cut the design out which looked like below:
      </p>

      <img src={`${process.env.PUBLIC_URL}/kinetic_1.jpg`} width={500} alt=""></img>

      <p>After I cut this out, I tried to figure out various ways to present the gear and attach it to the motor so 
        that it could be powered. Ultimately, I decided to secure the outer frame, and allow the inner gears to not just rotate 
        but move around freely, liberally using masking tape and hot glue to attach it. Luckily, the 
        motor shaft press-fit perfectly into the hole that I cut out on the first try, so I was able to 
        attach everything together without having to iterate too much on how to attach the motor
      </p>

      <img src={`${process.env.PUBLIC_URL}/kinetic_2.jpg`} width={500} alt=""></img>
    </div>
  );
};

export default Assignment3;
