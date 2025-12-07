import React from 'react';

const Assignment2 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 2: 2D Design & Cutting</h2>
      

      <p>For the first part of this assignment I made a box! The box that I created is below:</p>
      <img src={`${process.env.PUBLIC_URL}/box_angle_1.jpg`} alt="3D bottle" width={250} />
      <img src={`${process.env.PUBLIC_URL}/box_angle_2.jpg`} alt="3D bottle" width={250} />

      <p>
      This box is very plain and simple; I chose to include five fingers because I felt that struck a good balance between
      size and frequency of a finger for the dimensions I was going for. For the material, while I initially wanted to go with wood, 
      I realized that cardboard would be easier to work with and more malleable, whereas it would be difficult to work with the thin plywood
      that was available for laser cutting. As such, I went with cardboard, and made sure to try and level it out as much as possible to make the 
      cuts more consistent.
      </p>
      <p>
      I iterated multiple times because I kept messing up 
      the alignment of the fingers on the box so they would mismatch or a part would be sticking 
      out on the side. 

      Eventually I gave up on trying to make the fingers slide in exactly and just
      hot glued the fingers together, which held together even though I would cram my box with a lot of 
      stuff!
      </p>

      <p>I followed the Youtube series "Learn Fusion 360 in 30 Days for Complete Beginners! 
        - 2023 EDITION" in order to learn how to use Fusion. I did the first three days, which 
        honestly exposed me to enough to be able to get by. Examples of what I did are shown below:
        </p>

      <img src={`${process.env.PUBLIC_URL}/3D_bottle.png`} alt="3D bottle" width={500} />
      <img src={`${process.env.PUBLIC_URL}/lego_block.png`} alt="Lego block" width={500} />
    </div>
  );
};

export default Assignment2;
